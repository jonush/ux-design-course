import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { topicTitle, topicOverview, questions, answers } = await req.json();

    const questionsText = questions
      .map((q: string, i: number) => `Q${i + 1}: ${q}\nAnswer: ${answers[i] || "(no answer)"}`)
      .join("\n\n");

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [
        {
          role: "user",
          content: `You are grading a UX design student's free-response quiz on "${topicTitle}".

Topic overview for context:
${topicOverview}

Student's answers:
${questionsText}

Grade each answer on a scale of 0-2:
- 0: Incorrect or shows no understanding
- 1: Partially correct, shows some understanding but has gaps
- 2: Correct and demonstrates solid understanding

Respond in JSON format only:
{
  "grades": [
    { "score": 0|1|2, "feedback": "brief explanation" }
  ],
  "overallScore": number,
  "maxScore": number,
  "passed": boolean,
  "gaps": ["list of specific knowledge gaps or misconceptions identified"]
}

A student passes if they score >= 70% of max possible points. Be fair but thorough — identify genuine gaps in understanding.`,
        },
      ],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Failed to parse grading response" }, { status: 500 });
    }
    const result = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Grade API error:", error);
    return NextResponse.json({ error: "Failed to grade quiz" }, { status: 500 });
  }
}
