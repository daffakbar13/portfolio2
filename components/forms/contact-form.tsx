"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm({
  title = "Send a message",
  note = "Usually replies within 1–2 days.",
}: {
  title?: string;
  note?: string;
}) {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      form.reset();

      if (response.status === 200) {
        storeModal.onOpen({
          title: "Thankyou!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      console.log("Err!", err);
    }
  }

  const field =
    "h-[52px] rounded-[14px] border-line/[.12] bg-well px-[18px] text-base text-fg placeholder:text-mute focus-visible:ring-lime focus-visible:ring-offset-0";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex min-w-0 flex-col gap-[22px] self-start rounded-[32px] border border-line/[.08] bg-surface p-6 md:flex-[1_1_480px] md:p-10"
      >
        <h2 className="mb-1.5 mt-0 font-display text-[30px] font-bold tracking-[-0.03em]">
          {title}
        </h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field: f }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-fg-2">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" autoComplete="name" className={field} {...f} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field: f }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-fg-2">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@company.com" autoComplete="email" className={field} {...f} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field: f }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <FormLabel className="text-sm font-medium text-fg-2">Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell me about your project"
                  className="min-h-[150px] resize-y rounded-[14px] border-line/[.12] bg-well px-[18px] py-4 text-base leading-normal text-fg placeholder:text-mute focus-visible:ring-lime focus-visible:ring-offset-0"
                  {...f}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="btn-lime h-14 w-full disabled:opacity-60"
        >
          Send message
          <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
        </button>
        <p className="m-0 text-[13px] text-mute">{note}</p>
      </form>
    </Form>
  );
}
