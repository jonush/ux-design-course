import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { topicTitle, topicOverview, topicDeepDive, gaps, grades } = await req.json();

    const stream = await client.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [
        {
          role: "user",
          content: `You are a UX design tutor creating a personalized deep dive for a student who just completed a quiz on "${topicTitle}".

Topic overview:
${topicOverview}

Reference deep dive content (use as a knowledge base, but personalize):
${topicDeepDive}

Student's knowledge gaps identified from their quiz:
${gaps.map((g: string, i: number) => `${i + 1}. ${g}`).join("\n")}

Quiz results summary:
${grades.map((g: { score: number; feedback: string }, i: number) => `Q${i + 1}: Score ${g.score}/2 - ${g.feedback}`).join("\n")}

Create a personalized deep dive that:
1. Focuses on the areas where the student struggled
2. Explains concepts they got wrong in a clear, accessible way
3. Uses practical UX examples to illustrate points
4. Builds on what they already understand correctly
5. Is conversational and encouraging in tone

Format with markdown (headers, bold, lists). Keep it focused and actionable — around 800-1200 words.`,
        },
      ],
    });

    // Stream the response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Deep dive API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate deep dive" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
