"use client";

import React, { useState } from "react";
import { HrmsLayout } from "@/components/hrms/HrmsLayout";
import { AdminDashboardTab } from "@/components/hrms/AdminDashboardTab";
import { MOCK_CURRENT_USER } from "@/data/hrms";
import { useRouter } from "next/navigation";

export default function HrmsAdminPage() {
  const router = useRouter();
  const [role, setRole] = useState<"engineer" | "admin">("admin");

  const handleToggleRole = () => {
    router.push("/hrms");
  };

  return (
    <HrmsLayout
      currentTab="admin"
      onSelectTab={(tab) => {
        if (tab !== "admin") {
          router.push(`/hrms`);
        }
      }}
      user={MOCK_CURRENT_USER}
      role={role}
      onToggleRole={handleToggleRole}
    >
      <AdminDashboardTab />
    </HrmsLayout>
  );
}
