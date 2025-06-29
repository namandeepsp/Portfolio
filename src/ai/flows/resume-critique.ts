'use server';

/**
 * @fileOverview An AI-powered resume critique agent.
 *
 * - resumeCritique - A function that handles the resume critique process.
 * - ResumeCritiqueInput - The input type for the resumeCritique function.
 * - ResumeCritiqueOutput - The return type for the resumeCritique function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeCritiqueInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be reviewed.'),
});
export type ResumeCritiqueInput = z.infer<typeof ResumeCritiqueInputSchema>;

const ResumeCritiqueOutputSchema = z.object({
  strengths: z.string().describe('The strengths of the resume.'),
  weaknesses: z.string().describe('The weaknesses of the resume.'),
  suggestions: z.string().describe('Suggestions for improving the resume.'),
});
export type ResumeCritiqueOutput = z.infer<typeof ResumeCritiqueOutputSchema>;

export async function resumeCritique(input: ResumeCritiqueInput): Promise<ResumeCritiqueOutput> {
  return resumeCritiqueFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeCritiquePrompt',
  input: {schema: ResumeCritiqueInputSchema},
  output: {schema: ResumeCritiqueOutputSchema},
  prompt: `You are a professional resume writer. Review the following resume and provide feedback on its strengths and weaknesses, and provide suggestions for improvement in wording and content.

Resume:
{{{resumeText}}}`,
});

const resumeCritiqueFlow = ai.defineFlow(
  {
    name: 'resumeCritiqueFlow',
    inputSchema: ResumeCritiqueInputSchema,
    outputSchema: ResumeCritiqueOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
