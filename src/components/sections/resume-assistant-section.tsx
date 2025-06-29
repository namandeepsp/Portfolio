
"use client";

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BrainCircuit, ThumbsUp, ThumbsDown, Lightbulb, Loader2 } from 'lucide-react';
import { resumeCritique } from '@/ai/flows/resume-critique';
import type { ResumeCritiqueOutput } from '@/ai/flows/resume-critique';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import contentConfig from '@/config/content.json';

const formSchema = z.object({
  resumeText: z.string().min(100, {
    message: "Resume text must be at least 100 characters.",
  }).max(10000, {
    message: "Resume text must not exceed 10000 characters.",
  }),
});

export function ResumeAssistantSection() {
  const [critique, setCritique] = useState<ResumeCritiqueOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: "",
    },
  });

  const resumeAssistantContent = contentConfig.resumeAssistantSection;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setCritique(null);
    try {
      const result = await resumeCritique({ resumeText: values.resumeText });
      setCritique(result);
    } catch (e) {
      console.error(e);
      setError(resumeAssistantContent.errorAlertDescription);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionWrapper id="resume-ai" title={resumeAssistantContent.title} subtitle={resumeAssistantContent.subtitle} icon={BrainCircuit} className="bg-secondary/30">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="font-headline text-xl text-primary">{resumeAssistantContent.pasteResumeTitle}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="resumeText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{resumeAssistantContent.resumeContentLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={resumeAssistantContent.resumePlaceholder}
                          className="min-h-[300px] resize-y"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {resumeAssistantContent.analyzingButton}
                    </>
                  ) : (
                    resumeAssistantContent.getCritiqueButton
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 shadow-sm min-h-[300px]">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-lg text-muted-foreground">{resumeAssistantContent.loadingMessage}</p>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>{resumeAssistantContent.errorAlertTitle}</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {critique && !isLoading && (
            <>
              <Card className="shadow-lg">
                <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-2 bg-green-500/10">
                  <ThumbsUp className="h-6 w-6 text-green-600" />
                  <CardTitle className="font-headline text-lg text-green-700">{resumeAssistantContent.strengthsTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-4 text-foreground/90 whitespace-pre-line">{critique.strengths}</CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-2 bg-red-500/10">
                  <ThumbsDown className="h-6 w-6 text-red-600" />
                  <CardTitle className="font-headline text-lg text-red-700">{resumeAssistantContent.weaknessesTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-4 text-foreground/90 whitespace-pre-line">{critique.weaknesses}</CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="p-4 md:p-6 flex flex-row items-center gap-2 bg-blue-500/10">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  <CardTitle className="font-headline text-lg text-blue-700">{resumeAssistantContent.suggestionsTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-4 text-foreground/90 whitespace-pre-line">{critique.suggestions}</CardContent>
              </Card>
            </>
          )}
          {!critique && !isLoading && !error && (
             <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 shadow-sm min-h-[300px]">
                <BrainCircuit className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-lg text-center text-muted-foreground">{resumeAssistantContent.initialMessage}</p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
