import type { Application } from "@/entities/application/model";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const sendPrompt = async ({
  jobTitle,
  company,
  skills,
  details,
}: Pick<Application, "jobTitle" | "company" | "skills" | "details">) => {
  //   const response = await client.responses.create({
  //     model: "gpt-4.1-nano",
  //     instructions: "You are a coding assistant that talks like a pirate",
  //     input: `Write a professional cover letter from a job applicant to an employer based on the following data:
  //   - Job Title: ${jobTitle}
  //   - Company: ${company}
  //   - Skills: ${skills}
  //   - Additional details: ${details}
  // The tone should be confident, respectful, and enthusiastic. Do not include placeholder names. Keep the letter under 300 words.
  // `,
  //     max_output_tokens: 2000,
  //   });

  // console.log("response: ", response);

  return new Promise((res) => {
    setTimeout(() => {
      res("123");
    }, 2000);
  });
};
