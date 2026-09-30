"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { newsArticlesData } from "@/data/news";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export function NewsSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="dynamic-section-field -z-10" />

      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold tracking-wider text-[#111650] uppercase shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span>Section 17 &bull; News, Updates & Milestones</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#111650] sm:text-4xl lg:text-[42px]">
              Corporate & Execution Milestones
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
            Latest grid energization milestones, trenchless HDD achievements, and institutional
            safety audits.
          </p>
        </div>

        {/* Magazine / Editorial Card Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newsArticlesData.map((article) => (
            <div
              key={article.id}
              className="kinetic-card electric-lift flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-[#EA580C] hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded bg-[#EA580C] px-2 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                      {article.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center space-x-3 font-mono text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#EA580C]" />
                      {article.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#EA580C]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 text-sm leading-snug font-bold text-[#111650] sm:text-base">
                    {article.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111650] transition hover:text-[#EA580C]"
                >
                  <span>Read Full Update</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
