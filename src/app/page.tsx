"use client";

import * as React from "react";
import { TopNav } from "@/components/hostinger/top-nav";
import { ExpirationBanner } from "@/components/hostinger/expiration-banner";
import { HostingerSidebar } from "@/components/hostinger/sidebar";
import { PromoCard } from "@/components/hostinger/promo-card";
import { DomainTable } from "@/components/hostinger/domain-table";
import { AiOmnibar } from "@/components/hostinger/ai-omnibar";
import {
  GetDomainModal,
  TransferDomainModal,
  RenewDomainModal,
} from "@/components/hostinger/domain-modals";
import { ArrowLeftRight, Globe, Sparkles } from "lucide-react";
import { ComponentsShowcase } from "@/components/dashboard/components-showcase";

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = React.useState("domains");
  const [currentSubTab, setCurrentSubTab] = React.useState("portfolio");

  // Modals state
  const [isGetDomainOpen, setIsGetDomainOpen] = React.useState(false);
  const [isTransferOpen, setIsTransferOpen] = React.useState(false);
  const [renewTarget, setRenewTarget] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fafbff] text-[#1d1e20] flex flex-col font-sans antialiased">
      {/* 1. Dark Top Navigation Bar */}
      <TopNav />

      {/* 2. Urgent Expiration Alert Banner */}
      <ExpirationBanner onRenew={() => setRenewTarget("vastramayamagic.in")} />

      {/* 3. Main Workspace Area: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <HostingerSidebar
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          currentSubTab={currentSubTab}
          onSelectSubTab={setCurrentSubTab}
        />

        {/* Main Content Body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 pb-28">
          {currentTab === "domains" && (
            <div className="max-w-6xl mx-auto space-y-6">
              {/* Header Title & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-bold tracking-tight text-[#1d1e20]">
                  Domain portfolio
                </h1>

                <div className="flex items-center gap-2.5">
                  {/* Transfer an existing domain */}
                  <button
                    onClick={() => setIsTransferOpen(true)}
                    className="flex items-center gap-2 rounded-lg border border-[#dadce0] bg-white hover:bg-[#f2f3f6] px-3.5 py-2 text-xs font-semibold text-[#673de6] shadow-2xs transition-colors cursor-pointer"
                  >
                    <ArrowLeftRight className="h-3.5 w-3.5 text-[#673de6]" />
                    <span>Transfer an existing domain</span>
                  </button>

                  {/* Get a new domain */}
                  <button
                    onClick={() => setIsGetDomainOpen(true)}
                    className="flex items-center gap-2 rounded-lg bg-[#673de6] hover:bg-[#5025d1] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                  >
                    <Globe className="h-3.5 w-3.5 text-white" />
                    <span>Get a new domain</span>
                  </button>
                </div>
              </div>

              {/* Promo Card: "Protect your internet identity" weonemedia.in ₹ 1.00 */}
              <PromoCard
                onGetNow={() => setIsGetDomainOpen(true)}
                onSeeMore={() => setIsGetDomainOpen(true)}
              />

              {/* Domains Table */}
              <DomainTable
                onRenewDomain={(domain) => setRenewTarget(domain)}
                onManageDomain={(domain) =>
                  alert(`Managing DNS, nameservers, and settings for ${domain}`)
                }
              />
            </div>
          )}

          {/* Fallback for other tabs */}
          {currentTab === "open-source" && (
            <div className="max-w-6xl mx-auto">
              <ComponentsShowcase />
            </div>
          )}

          {currentTab !== "domains" && currentTab !== "open-source" && (
            <div className="max-w-4xl mx-auto rounded-xl border border-[#dadce0] bg-white p-12 text-center space-y-3">
              <Sparkles className="mx-auto h-10 w-10 text-[#673de6]" />
              <h2 className="text-lg font-bold capitalize text-[#1d1e20]">
                {currentTab} Overview
              </h2>
              <p className="text-xs text-[#6d7081] max-w-sm mx-auto">
                Manage your {currentTab} services, deploy apps, and configure options.
              </p>
              <button
                onClick={() => setCurrentTab("domains")}
                className="mt-2 text-xs font-semibold text-[#673de6] hover:underline cursor-pointer"
              >
                Return to Domain portfolio
              </button>
            </div>
          )}
        </main>
      </div>

      {/* 4. Floating AI Command Pill ("Ask me anything") */}
      <AiOmnibar />

      {/* 5. Modals */}
      <GetDomainModal
        open={isGetDomainOpen}
        onOpenChange={setIsGetDomainOpen}
      />
      <TransferDomainModal
        open={isTransferOpen}
        onOpenChange={setIsTransferOpen}
      />
      <RenewDomainModal
        open={!!renewTarget}
        domainName={renewTarget || ""}
        onOpenChange={(open) => !open && setRenewTarget(null)}
      />
    </div>
  );
}
