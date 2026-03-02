import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaCheck } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/react-bits";
import type { ContactFormProps } from "@/types/contact.types";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = ({ labels }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitError(false);

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Name: data.name,
              Email: data.email,
              Message: data.message,
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      toast.success("Your message has been sent successfully!");

      setSuccess(true);
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to send your message. Please try again.");

      setSubmitError(true);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-background-surface border border-border">
        <FaCheck className="text-primary text-4xl mb-4" />
        <p className="text-lg text-foreground text-center">
          {labels.successMessage}
        </p>
      </div>
    );
  }

  return (
    <ScrollReveal>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="text-xs font-bold text-foreground mb-1">
            {labels.nameLabel}
          </label>
          <input
            {...register("name")}
            placeholder={labels.namePlaceholder}
            className="w-full bg-background-surface text-foreground p-2 border border-border focus:border-accent focus:outline-none transition-colors duration-200 rounded-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-bold text-foreground mb-1">
            {labels.emailLabel}
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder={labels.emailPlaceholder}
            className="w-full bg-background-surface text-foreground p-2 border border-border focus:border-accent focus:outline-none transition-colors duration-200 rounded-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-xs font-bold text-foreground mb-1">
            {labels.messageLabel}
          </label>
          <textarea
            rows={5}
            {...register("message")}
            placeholder={labels.messagePlaceholder}
            className="w-full bg-background-surface text-foreground p-2 border border-border focus:border-accent focus:outline-none transition-colors duration-200 rounded-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        {submitError && (
          <div className="text-red-500 text-sm">{labels.errorMessage}</div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-none hover:brightness-110 h-auto py-3"
        >
          {isSubmitting && <Loader2 className="size-5 animate-spin" />}
          {isSubmitting ? labels.sendingLabel : labels.submitLabel}
        </Button>
      </form>
    </ScrollReveal>
  );
};

export default ContactForm;
