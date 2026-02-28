import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaCheck } from "react-icons/fa";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import type { ContactFormProps } from "@/types/contact.types";

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: FormData) => {
    setSubmitError(false);
    try {
      // simulate network request
      await new Promise((r) => setTimeout(r, 1000));
      setSuccess(true);
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setSubmitError(true);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-background-surface border border-border rounded-none">
        <FaCheck className="text-primary text-4xl mb-4" />
        <p className="text-lg text-foreground text-center">
          {labels.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <ScrollReveal delay={0.2}>
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
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
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
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
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
      </ScrollReveal>

      {submitError && (
        <div className="text-red-500 text-sm">{labels.errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-primary text-primary-foreground font-semibold transition-colors duration-200 hover:brightness-110 rounded-none flex items-center justify-center gap-2"
      >
        {isSubmitting && (
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        )}
        {isSubmitting ? labels.sendingLabel : labels.submitLabel}
      </button>
    </form>
  );
};

export default ContactForm;
