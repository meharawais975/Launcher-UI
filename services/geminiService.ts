
import { GoogleGenAI } from "@google/genai";

export class GeminiAssistant {
  private ai: GoogleGenAI;

  constructor() {
    // Fix: Initialization must use named parameter and direct process.env.API_KEY
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      // Fix: Use ai.models.generateContent and gemini-3-flash-preview for text tasks
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: "You are Galaxy Assistant, a helpful AI built into a Samsung-style smartphone launcher. Be concise, friendly, and helpful. Use emojis sparingly."
        }
      });
      // Fix: Directly access .text property, not .text()
      return response.text || "Sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Network error. Please check your connection.";
    }
  }
}

export const assistant = new GeminiAssistant();
