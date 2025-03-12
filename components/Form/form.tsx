"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle } from "lucide-react";
import Typography from "@/components/Typography/typography";
import { useForm, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
// import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isBusMovingAnimationOn, setIsBusMovingAnimation] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (emailData: FieldValues) => {
    try {
      //await axios.post("/api/contact", emai);
      console.log("Message sent!");
      console.log(emailData.name);
      console.log(emailData.email);
      console.log(emailData.subject);
      console.log(emailData.message);
      setIsBusMovingAnimation(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-black border border-neutral-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-6 w-6 text-red-600" />
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle className="h-16 w-16 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-neutral-400 mb-6">
              Thank you for contacting us. We will get back to you soon.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="border-red-600 text-red-600 hover:bg-red-900/20 hover:text-red-500"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-300">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  required
                  placeholder="Your name"
                  className="bg-neutral-900 border-neutral-700 text-white focus:border-red-600 focus:ring-red-600"
                  {...register("name", { onChange: handleChange })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  required
                  placeholder="your.email@example.com"
                  className="bg-neutral-900 border-neutral-700 text-white focus:border-red-600 focus:ring-red-600"
                  {...register("email", { onChange: handleChange })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-neutral-300">
                Subject
              </Label>
              <Input
                id="subject"
                value={formData.subject}
                required
                placeholder="What is this regarding?"
                className="bg-neutral-900 border-neutral-700 text-white focus:border-red-600 focus:ring-red-600"
                {...register("subject", { onChange: handleChange })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-neutral-300">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                required
                placeholder="Your message here..."
                className="min-h-[150px] bg-neutral-900 border-neutral-700 text-white focus:border-red-600 focus:ring-red-600"
                {...register("message", { onChange: handleChange })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white relative justify-center items-center group overflow-hidden"
            >
              <div className="w-full flex flex-col items-center justify-center h-full">
                {/* Icon that slides in from left */}
                <span
                  className={cn(
                    "scale-x-[-1] w-full text-center absolute transform -translate-y-10 group-hover:translate-y-0 transition-all duration-300",
                    isBusMovingAnimationOn &&
                      "translate-x-full transform transition-all duration-1500"
                  )}
                >
                  <Typography variant="h4">🚐</Typography>
                </span>
                {/* Text that moves right */}
                <span className="w-full transform transition-all duration-300 group-hover:translate-y-full">
                  <Typography variant="h4">Send Message</Typography>
                </span>
              </div>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
