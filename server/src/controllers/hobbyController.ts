import { type Request, type Response } from "express";
import { genrateTop3Hobbies, generateLevels } from "../modules/gemini";
import { error } from "console";

export async function getHobbyRecommendations(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { scrollTime, goal, favActivity, personality, lostTrack, age } =
      req.body;

    const safeScrollTime = scrollTime || "N/A";
    const safeGoal = goal || "N/A";
    const safeFavActivity =
      favActivity && Array.isArray(favActivity) && favActivity.length
        ? favActivity
        : [];
    const safePersonality = personality || "N/A";
    const safeLostTrack = lostTrack || "N/A";
    const safeAge = age !== undefined ? age : 18;

    const hobbies = await genrateTop3Hobbies(
      safeScrollTime,
      safeGoal,
      safeFavActivity,
      safePersonality,
      safeLostTrack,
      safeAge
    );
    if (!hobbies) 
        throw error;
    return res.status(200).json(hobbies);
  } catch (err) {
    console.error("Error during hobby recommendation:", err);
    return res
      .status(500)
      .json({ message: "Error during hobby recommendation" });
  }
}

export async function getHobbyLevels(req: Request, res: Response) {
  try {
    const hobby = req.body.hobby;
    const levels = await generateLevels(hobby);

    if(!levels)
      throw error;

    return res.status(200).json(levels);
  } catch (err) {
    console.log("Error during hobby level generation:", err);
    return res
      .status(500)
      .json({ message: "Error during hobby level generation" });
  }
}