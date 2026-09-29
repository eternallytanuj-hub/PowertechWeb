"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { Button } from "../ui/Button";
import { ContactFormData } from "@/types";
import { CheckCircle2, AlertCircle } from "lucide-react";

const serviceOptions = [
  { label: "Substations & Switchyards", value: "substations-switchyards" },
  { label: "Industrial Electrification", value: "industrial-electrification" },
  { label: "Transmission Lines", value: "transmission-lines" },
  { label: "Underground Cabling", value: "underground-cabling" },
  { label: "Township Electrification", value: "township-electrification" },
  { label: "AMC & Breakdown Services", value: "amc-breakdown" },
  { label: "General Project Enquiry", value: "general" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceCategory: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    // Client-side validation check
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields marked with an asterisk (*).");
      setIsSubmitting(false);
      return;
    }

    try {
      // In Phase 1 architecture, this simulates the structured payload submission
      // In Phase 2, this connects to server route handler (/api/enquiry) or Supabase
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setStatusMessage(
        "Thank you for contacting Powertech Engineers. Your technical enquiry has been received."
      );
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceCategory: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setStatusMessage(
        "Failed to submit enquiry. Please try again or reach out directly by phone."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "success" && (
        <div className="text-success flex items-center rounded-md border border-green-200 bg-green-50 p-4 text-sm">
          <CheckCircle2 className="mr-2 h-5 w-5 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div className="text-error flex items-center rounded-md border border-red-200 bg-red-50 p-4 text-sm">
          <AlertCircle className="mr-2 h-5 w-5 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="e.g. Rajesh Sharma"
        />
        <Input
          label="Company / Organisation"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="e.g. Infrastructure Ltd."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="Work Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="e.g. r.sharma@company.com"
        />
        <Input
          label="Contact Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="e.g. +91 98765 43210"
        />
      </div>

      <Select
        label="Service of Interest"
        name="serviceCategory"
        value={formData.serviceCategory}
        onChange={handleChange}
        options={serviceOptions}
        placeholder="Select relevant engineering capability"
      />

      <Textarea
        label="Project Scope / Enquiry Details"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        placeholder="Provide voltage rating, location, turnkey scope, or timeline details..."
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          Submit Technical Enquiry
        </Button>
      </div>
    </form>
  );
}
