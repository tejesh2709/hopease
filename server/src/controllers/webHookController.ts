import { type Request, type Response } from "express";
import { Webhook, type WebhookRequiredHeaders } from "svix";
import prisma from "../config/prisma.config.js";
import {config }from "../config/index.js";

interface ClerkEvent {
  data: {
    id: string;
    username?: string;
    email_addresses?: { email_address: string }[];
    [key: string]: any;
  };
  type: string;
}

const handleWebHook = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const headers = req.headers as unknown as WebhookRequiredHeaders;

    const clerkWebhookSecret = config.clerk_secret;
    const wh = new Webhook(clerkWebhookSecret);
    const evt = wh.verify(payload, headers) as ClerkEvent;

    const { id, ...attributes } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const existingUser = await prisma.user.findUnique({
        where: { clerkId: id },
      });
      if (!existingUser) {
        await prisma.user.create({
          data: {
            clerkId: id,
            name: attributes.username ?? null,
            email: attributes.email_addresses?.[0]?.email_address ?? "",
          },
        });
      }
    }

    res.status(200).json({
      success: true,
      message: "Webhook received",
    });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(400).json({
      success: false,
      message: errorMessage,
    });
  }
};

export default handleWebHook;