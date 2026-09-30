"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PowertechLogo } from "@/components/ui/PowertechLogo";
import {
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowRight,
  AlertTriangle,
  KeyRound,
  CheckCircle2,
  Building,
  User,
  ShieldAlert,
} from "lucide-react";

export default function EmployeeLoginPage() {
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authStep, setAuthStep] = useState<"credentials" | "2fa" | "success">("credentials");
  const [otp, setOtp] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto redirect countdown on success
  useEffect(() => {
    if (authStep === "success") {
      const timer = setTimeout(() => {
        router.push(employeeId.includes("ADMIN") ? "/hrms/admin" : "/hrms");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [authStep, employeeId, router]);

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      if (employeeId.trim().length < 4 || password.length < 6) {
        setErrorMessage(
          "Invalid credentials. Please enter your valid Powertech Employee ID and password."
        );
      } else {
        setAuthStep("2fa");
      }
    }, 600);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage(null);

    setTimeout(() => {
      setIsProcessing(false);
      if (otp.length === 6) {
        setAuthStep("success");
      } else {
        setErrorMessage("Please enter a valid 6-digit corporate verification OTP.");
      }
    }, 600);
  };

  // Demo Fast-Fill Handlers
  const handleQuickLoginEngineer = () => {
    setEmployeeId("PTE-EMP-1048");
    setPassword("Powertech@2026");
    setOtp("847291");
    setAuthStep("credentials");
  };

  const handleQuickLoginAdmin = () => {
    setEmployeeId("PTE-ADMIN-01");
    setPassword("PowertechAdmin@2026");
    setOtp("901847");
    setAuthStep("credentials");
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#060a17] py-12 text-white">
      {/* Background Grid Pattern */}
      <div className="hero-circuit-grid pointer-events-none absolute inset-0 opacity-15" />

      {/* Top Header */}
      <div className="relative z-10 w-full border-b border-white/10 pb-6">
        <Container className="flex items-center justify-between">
          <Link href="/" className="inline-block">
            <PowertechLogo variant="light" height={40} className="h-10 w-auto" />
          </Link>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="hidden sm:inline">256-Bit SSL Encrypted Corporate Boundary</span>
          </div>
        </Container>
      </div>

      {/* Center Auth Card */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-[#0c1427]/95 p-8 shadow-2xl backdrop-blur-xl">
          {/* Card Title */}
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EA580C]/30 bg-[#EA580C]/20 text-[#EA580C]">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-black text-white">Powertech Enterprise Portal</h1>
            <p className="mt-1 text-xs text-slate-400">
              Authorized Personnel HRMS & Operations Gateway
            </p>
          </div>

          {/* Quick Demo Credentials Widget */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Instant Demo Access:
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleQuickLoginEngineer}
                className="flex items-center justify-center space-x-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-orange-300 hover:bg-orange-500/20"
              >
                <User className="h-3 w-3" />
                <span>Site Engineer</span>
              </button>
              <button
                type="button"
                onClick={handleQuickLoginAdmin}
                className="flex items-center justify-center space-x-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-purple-300 hover:bg-purple-500/20"
              >
                <ShieldAlert className="h-3 w-3" />
                <span>HR Admin Desk</span>
              </button>
            </div>
          </div>

          {/* Strict Security Policy Banner (Section 25 Compliance) */}
          <div className="mb-6 flex items-start space-x-2.5 rounded-xl border border-amber-500/30 bg-amber-950/20 p-3.5 text-xs text-amber-200/90">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <div className="text-[11px] leading-relaxed">
              <strong>Public UI Boundary:</strong> Internal HRMS modules (payroll, attendance,
              manpower rosters) are restricted to authenticated personnel. Unauthorized access
              attempts are monitored and logged.
            </div>
          </div>

          {errorMessage && (
            <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-950/40 p-3 text-xs text-rose-300">
              {errorMessage}
            </div>
          )}

          {/* Step 1: Employee ID & Password Form */}
          {authStep === "credentials" && (
            <form onSubmit={handleCredentialsSubmit} className="space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  Employee ID / Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PTE-EMP-1048"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                />
              </div>

              <div>
                <div className="mb-1 flex items-center justify-between">
                  <label className="font-semibold text-slate-300">Corporate Password</label>
                  <a href="#reset" className="text-[11px] text-[#f08020] hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter security password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-10 text-xs text-white placeholder:text-slate-500 focus:border-[#EA580C] focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-600 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Verifying Credentials...</span>
                ) : (
                  <>
                    <span>Proceed to 2FA Authentication</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Step 2: 2FA Verification Form */}
          {authStep === "2fa" && (
            <form onSubmit={handleOtpSubmit} className="space-y-4 text-xs">
              <div className="mb-2 space-y-1 text-center">
                <KeyRound className="mx-auto h-8 w-8 text-[#f08020]" />
                <h3 className="text-sm font-bold text-white">Enter 6-Digit Authenticator Code</h3>
                <p className="text-[11px] text-slate-400">
                  A verification code has been dispatched to your registered employee device.
                </p>
                <div className="mt-1 text-[10px] text-orange-400 font-mono">
                  [Demo OTP: 847291 or any 6 digits]
                </div>
              </div>

              <div>
                <input
                  type="text"
                  maxLength={6}
                  required
                  placeholder="847291"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/10 py-3 text-center font-mono text-lg font-bold tracking-[0.5em] text-white focus:border-[#EA580C] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#EA580C] py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-600 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Authenticating Session...</span>
                ) : (
                  <span>Confirm & Launch HRMS</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setAuthStep("credentials")}
                className="w-full text-center text-[11px] text-slate-400 hover:text-white"
              >
                &larr; Back to ID Credentials
              </button>
            </form>
          )}

          {/* Step 3: Authenticated State */}
          {authStep === "success" && (
            <div className="space-y-4 py-4 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Authentication Successful</h3>
              <p className="text-xs text-slate-300">
                Welcome, <strong>{employeeId}</strong>. Redirecting you to the Powertech Engineers HRMS ERP...
              </p>
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-3 font-mono text-[11px] text-emerald-300">
                Session Token Issued: SEC-PTE-2026-TOKEN &bull; 256-Bit SSL
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/hrms"
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-orange-600 py-3 text-xs font-bold text-white shadow-lg hover:bg-orange-500"
                >
                  <span>Launch Employee HRMS Portal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/hrms/admin"
                  className="flex w-full items-center justify-center space-x-2 rounded-xl border border-purple-500/40 bg-purple-950/40 py-2.5 text-xs font-bold text-purple-300 hover:bg-purple-900/50"
                >
                  <ShieldAlert className="h-3.5 w-3.5" />
                  <span>Access HR Admin Desk</span>
                </Link>
              </div>

              <Link href="/" className="inline-block pt-2 text-xs text-slate-400 hover:text-white">
                &larr; Return to Public Corporate Site
              </Link>
            </div>
          )}

          {/* Help Desk Link */}
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-[11px] text-slate-400">
            For technical support or credentials reset, contact Corporate IT Desk at{" "}
            <a href="tel:01204131018" className="text-white hover:underline">
              0120-4131018
            </a>{" "}
            or email{" "}
            <a href="mailto:engineerspowertech1@yahoo.com" className="text-white hover:underline">
              engineerspowertech1@yahoo.com
            </a>
            .
          </div>
        </div>
      </div>

      {/* Footer Utility Link */}
      <div className="relative z-10 w-full text-center text-xs text-slate-500">
        <Link href="/" className="transition hover:text-slate-300">
          &larr; Back to Powertech Engineers Public Website
        </Link>
      </div>
    </div>
  );
}
