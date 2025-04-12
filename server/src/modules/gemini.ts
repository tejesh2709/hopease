import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config/index.ts";

const genAi = new GoogleGenerativeAI(config.genai_api_key);

const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function genrateTop3Hobbies(
  scrollTime?: string,
  goal?: string,
  favActivity?: string[],
  personality?: string,
  lostTrack?: string,
  age?: number
): Promise<string[]> {
  try {
    const prompt = `
Generate top 3 hobbies from the available list of hobbies for a user with the following details:
- Scroll Time: ${scrollTime}
- Goal: ${goal}
- Favourite Activities: ${favActivity?.join(", ")}
- Personality: ${personality}
- Lost Track: ${lostTrack}
- Age: ${age}

Return only a JSON array of 3 strings, where each string is a hobby name.
    `.trim();

    const res = await model.generateContent(prompt);

    const outputText: string = res.response.text();
    const cleanedText = outputText.replace(/```json|```/g, "").trim();
    const hobbies: string[] = JSON.parse(cleanedText);
    return hobbies;
  } catch (err) {
    console.error("Error generating hobbies:", err);
    throw new Error("Failed to generate hobbies");
  }
}

export async function generateLevels(hobby: string): Promise<any[]> {
  try {
    const prompt = `
You are an imaginative adventure guide and quest master, tasked with creating a unique, engaging, and unconventional learning journey for a user exploring the hobby "${hobby}". This is not a typical school syllabus – rather, it is an epic quest filled with intriguing missions and challenges.

For creative hobbies (such as painting, writing, or music), design the roadmap as a series of mystical quests where the user embarks on a journey to unlock their creative potential, transforming from a curious novice to an inspired master.

For non-creative hobbies (such as coding, fitness, or cooking), design the roadmap as an expedition through real-world challenges, where the user overcomes obstacles, hones practical skills, and emerges as a resourceful expert.

Generate 4 sequential levels. For each level, output an object with:
  - "levelTitle": a short, compelling mission name (e.g., "The Initiation", "Quest of Discovery", "Mastery Unleashed")
  - "description": an inspiring narrative that vividly explains the challenges and skills to be gained at that level, it must be clear, simple, engaging and clear at the same time
  - "xp": a suggested numerical XP value that increases with each level (e.g., 50, 100, 200)
  
Return only a valid JSON array of these level objects without any markdown formatting or extra text.
    `.trim();

    const res = await model.generateContent(prompt);

    const outputText: string = res.response.text();
    const cleanedText = outputText.replace(/```json|```/g, "").trim();

    const levels: any[] = JSON.parse(cleanedText);
    return levels;
  } catch (err) {
    console.error("Error generating levels:", err);
    throw new Error("Failed to generate levels");
  }
}