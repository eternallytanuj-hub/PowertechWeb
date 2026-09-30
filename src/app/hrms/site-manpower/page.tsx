"use client";

import React, { useState } from "react";
import { HrmsLayout } from "@/components/hrms/HrmsLayout";
import { SiteManpowerTab } from "@/components/hrms/SiteManpowerTab";
import { MOCK_CURRENT_USER } from "@/data/hrms";
import { useRouter } from "next/navigation";

export default function HrmsSiteManpowerPage() {
  const router = useRouter();

  return (
    <HrmsLayout
      currentTab="site-manpower"
      onSelectTab={(tab) => {
        if (tab !== "site-manpower") {
          router.push(`/hrms`);
        }
      }}
      user={MOCK_CURRENT_USER}
      role="engineer"
      onToggleRole={() => router.push("/hrms/admin")}
    >
      <SiteManpowerTab />
    </HrmsLayout>
  );
}
