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
You are a whimsical quest master tasked with designing a lighthearted, engaging learning journey for a user exploring the hobby "${hobby}". This isn't a dry, standard syllabus—it's a fun expedition filled with quirky yet practical missions.

For creative hobbies (like painting, writing, or music), imagine the roadmap as a series of charming quests that gradually transform a curious beginner into a confident creator.  
For non-creative hobbies (such as coding, fitness, or cooking), design the roadmap as a playful expedition where everyday challenges become stepping stones to real expertise.

Generate 4 sequential levels. For each level, output an object with:
  - "levelTitle": a short, catchy mission name (for example, "First Leap", "Discovery Dash", "Skill Sprint", "Victory Voyage")
  - "description": a clear, engaging explanation of the challenge and skills to be gained at that level, written in simple language with a touch of humor
  - "xp": a numerical XP value that increases with each level (for example, 50, 100, 150, 200)

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