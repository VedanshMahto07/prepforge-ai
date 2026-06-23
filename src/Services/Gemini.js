import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
});

// ====================
// Generate Questions
// ====================

export async function generateQuestions(
  role,
  difficulty,
  count
) {
  const prompt = `
Generate exactly ${count} interview questions.

Role: ${role}
Difficulty: ${difficulty}

IMPORTANT:

Return ONLY a valid JSON array.

Example:

[
  "What is React?",
  "What is Virtual DOM?",
  "Explain useEffect?"
]

Do not wrap inside an object.
Do not add markdown.
Do not add explanations.
Do not add text before or after the array.
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}

// ====================
// Evaluate Interview
// ====================

export async function evaluateInterview(
  role,
  difficulty,
  questions,
  answers
) {
  const prompt = `
You are an expert technical interviewer.

Role: ${role}
Difficulty: ${difficulty}

Questions:
${questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

Answers:
${answers.map((a, i) => `${i + 1}. ${a}`).join("\n")}

Evaluate the candidate and return ONLY valid JSON.

{
  "overallScore": 75,
  "technicalKnowledge": 8,
  "communication": 7,
  "problemSolving": 8,
  "strengths": [
    "Good understanding of fundamentals"
  ],
  "weaknesses": [
    "Needs deeper practical knowledge"
  ],
  "suggestions": [
    "Practice more interview questions"
  ],
  "questionScores": [
    {
      "questionNumber": 1,
      "score": 8
      "suggestedAnswer":"Ideal Answer here"
    }
  ]
}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
    console.log(cleanedText);
  return JSON.parse(cleanedText);
}