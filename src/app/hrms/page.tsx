"use client";

import React, { useState } from "react";
import {
  HrmsLayout,
  HrmsTabKey,
} from "@/components/hrms/HrmsLayout";
import { EmployeeDashboardTab } from "@/components/hrms/EmployeeDashboardTab";
import { ProfileTab } from "@/components/hrms/ProfileTab";
import { AttendanceTab } from "@/components/hrms/AttendanceTab";
import { LeaveTab } from "@/components/hrms/LeaveTab";
import { PayrollTab } from "@/components/hrms/PayrollTab";
import { DocumentsTab } from "@/components/hrms/DocumentsTab";
import { PerformanceTab } from "@/components/hrms/PerformanceTab";
import { CompanyPoliciesTab } from "@/components/hrms/CompanyPoliciesTab";
import { ServiceRequestsTab } from "@/components/hrms/ServiceRequestsTab";
import { SiteManpowerTab } from "@/components/hrms/SiteManpowerTab";
import { AdminDashboardTab } from "@/components/hrms/AdminDashboardTab";
import {
  MOCK_CURRENT_USER,
  MOCK_ATTENDANCE_RECORDS,
  MOCK_LEAVE_REQUESTS,
  MOCK_PAYROLL_SLIPS,
  MOCK_HR_DOCUMENTS,
  MOCK_SERVICE_REQUESTS,
} from "@/data/hrms";

export default function HrmsPage() {
  const [currentTab, setCurrentTab] = useState<HrmsTabKey>("dashboard");
  const [role, setRole] = useState<"engineer" | "admin">("engineer");

  const handleToggleRole = () => {
    if (role === "engineer") {
      setRole("admin");
      setCurrentTab("admin");
    } else {
      setRole("engineer");
      setCurrentTab("dashboard");
    }
  };

  return (
    <HrmsLayout
      currentTab={currentTab}
      onSelectTab={setCurrentTab}
      user={MOCK_CURRENT_USER}
      role={role}
      onToggleRole={handleToggleRole}
    >
      {currentTab === "dashboard" && (
        <EmployeeDashboardTab
          user={MOCK_CURRENT_USER}
          attendance={MOCK_ATTENDANCE_RECORDS}
          leaves={MOCK_LEAVE_REQUESTS}
          payroll={MOCK_PAYROLL_SLIPS}
          documents={MOCK_HR_DOCUMENTS}
          onNavigateTab={setCurrentTab}
        />
      )}

      {currentTab === "profile" && <ProfileTab user={MOCK_CURRENT_USER} />}

      {currentTab === "attendance" && (
        <AttendanceTab attendanceRecords={MOCK_ATTENDANCE_RECORDS} />
      )}

      {currentTab === "leave" && (
        <LeaveTab leaveRequests={MOCK_LEAVE_REQUESTS} />
      )}

      {currentTab === "payroll" && (
        <PayrollTab user={MOCK_CURRENT_USER} payrollSlips={MOCK_PAYROLL_SLIPS} />
      )}

      {currentTab === "documents" && (
        <DocumentsTab user={MOCK_CURRENT_USER} documents={MOCK_HR_DOCUMENTS} />
      )}

      {currentTab === "performance" && (
        <PerformanceTab user={MOCK_CURRENT_USER} />
      )}

      {currentTab === "policies" && <CompanyPoliciesTab />}

      {currentTab === "requests" && (
        <ServiceRequestsTab initialRequests={MOCK_SERVICE_REQUESTS} />
      )}

      {currentTab === "site-manpower" && <SiteManpowerTab />}

      {currentTab === "admin" && <AdminDashboardTab />}
    </HrmsLayout>
  );
}
