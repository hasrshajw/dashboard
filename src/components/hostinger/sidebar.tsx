"use client";

import * as React from "react";
import {
  Home,
  Sparkles,
  Globe,
  LayoutGrid,
  Mail,
  Code2,
  Store,
  ChevronDown,
  Wand2,
  Share2,
  Bot,
  Layers,
  MessageSquare,
  Workflow,
  Search,
  ArrowLeftRight,
  Database,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  currentSubTab?: string;
  onSelectSubTab?: (subTab: string) => void;
}

export function HostingerSidebar({
  currentTab = "domains",
  onSelectTab,
  currentSubTab = "portfolio",
  onSelectSubTab,
}: SidebarProps) {
  const [appsOpen, setAppsOpen] = React.useState(true);
  const [agentsOpen, setAgentsOpen] = React.useState(true);

  return (
    <aside className="w-60 shrink-0 border-r border-[#dadce0] bg-[#f8f9fc] flex flex-col justify-between min-h-[calc(100vh-3.5rem)] text-sm select-none py-4 px-3">
      {/* Primary Navigation */}
      <div className="space-y-6 overflow-y-auto">
        <div className="space-y-0.5">
          {/* Home */}
          <button
            onClick={() => onSelectTab("home")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer text-[#36344d] hover:bg-white hover:text-[#1d1e20]",
              currentTab === "home" && "bg-white text-[#1d1e20] shadow-xs font-semibold"
            )}
          >
            <Home className="h-4 w-4 text-[#6d7081]" />
            <span>Home</span>
          </button>

          {/* Agent */}
          <button
            onClick={() => onSelectTab("agent")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer text-[#36344d] hover:bg-white hover:text-[#1d1e20]",
              currentTab === "agent" && "bg-white text-[#1d1e20] shadow-xs font-semibold"
            )}
          >
            <Sparkles className="h-4 w-4 text-[#673de6]" />
            <span>Agent</span>
          </button>

          {/* Websites */}
          <button
            onClick={() => onSelectTab("websites")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer text-[#36344d] hover:bg-white hover:text-[#1d1e20]",
              currentTab === "websites" && "bg-white text-[#1d1e20] shadow-xs font-semibold"
            )}
          >
            <LayoutGrid className="h-4 w-4 text-[#6d7081]" />
            <span>Websites</span>
          </button>

          {/* Domains (Active Main Tab) */}
          <div>
            <button
              onClick={() => onSelectTab("domains")}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer",
                currentTab === "domains"
                  ? "bg-white text-[#1d1e20] shadow-xs"
                  : "text-[#36344d] hover:bg-white"
              )}
            >
              <Globe className="h-4 w-4 text-[#673de6]" />
              <span>Domains</span>
            </button>

            {/* Sub-navigation under Domains */}
            {currentTab === "domains" && (
              <div className="ml-7 mt-1 space-y-0.5 border-l border-[#dadce0] pl-3 py-1">
                {[
                  { id: "domain-search", label: "Domain search" },
                  { id: "transfers", label: "Transfers" },
                  { id: "dns", label: "DNS" },
                  { id: "contact-profiles", label: "Contact profiles" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectSubTab?.(item.id)}
                    className={cn(
                      "block w-full text-left py-1 text-xs transition-colors cursor-pointer",
                      currentSubTab === item.id
                        ? "text-[#673de6] font-semibold"
                        : "text-[#6d7081] hover:text-[#1d1e20]"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Emails */}
          <button
            onClick={() => onSelectTab("emails")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-colors cursor-pointer text-[#36344d] hover:bg-white hover:text-[#1d1e20]",
              currentTab === "emails" && "bg-white text-[#1d1e20] shadow-xs font-semibold"
            )}
          >
            <Mail className="h-4 w-4 text-[#6d7081]" />
            <span>Emails</span>
          </button>

          {/* Open source */}
          <button
            onClick={() => onSelectTab("open-source")}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-[#36344d] hover:bg-white hover:text-[#1d1e20] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Code2 className="h-4 w-4 text-[#6d7081]" />
              <span>Open source</span>
            </div>
            <span className="rounded-full bg-[#f2f3f6] border border-[#dadce0] px-2 py-0.5 text-[10px] font-semibold text-[#6d7081]">
              Beta
            </span>
          </button>

          {/* More services */}
          <button
            onClick={() => onSelectTab("services")}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-[#36344d] hover:bg-white hover:text-[#1d1e20] transition-colors cursor-pointer"
          >
            <Store className="h-4 w-4 text-[#6d7081]" />
            <span>More services</span>
          </button>
        </div>

        {/* Section: Hostinger apps */}
        <div className="pt-2">
          <button
            onClick={() => setAppsOpen(!appsOpen)}
            className="flex w-full items-center justify-between px-3 py-1 text-[11px] font-semibold text-[#6d7081] hover:text-[#1d1e20] cursor-pointer"
          >
            <span>Hostinger apps</span>
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition-transform", !appsOpen && "-rotate-90")}
            />
          </button>
          {appsOpen && (
            <div className="mt-1 space-y-0.5">
              <button
                onClick={() => alert("AI Builder opened")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-xs font-medium text-[#36344d] hover:bg-white transition-colors cursor-pointer"
              >
                <Wand2 className="h-4 w-4 text-[#673de6]" />
                <span>AI Builder</span>
              </button>
              <button
                onClick={() => alert("Ecommerce manager opened")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-xs font-medium text-[#36344d] hover:bg-white transition-colors cursor-pointer"
              >
                <Share2 className="h-4 w-4 text-[#6d7081]" />
                <span>Ecommerce</span>
              </button>
            </div>
          )}
        </div>

        {/* Section: AI agents */}
        <div className="pt-2">
          <button
            onClick={() => setAgentsOpen(!agentsOpen)}
            className="flex w-full items-center justify-between px-3 py-1 text-[11px] font-semibold text-[#6d7081] hover:text-[#1d1e20] cursor-pointer"
          >
            <span>AI agents</span>
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition-transform", !agentsOpen && "-rotate-90")}
            />
          </button>
          {agentsOpen && (
            <div className="mt-1 space-y-0.5">
              <button
                onClick={() => alert("OpenClaw agent selected")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-xs font-medium text-[#36344d] hover:bg-white transition-colors cursor-pointer"
              >
                <Bot className="h-4 w-4 text-[#673de6]" />
                <span>OpenClaw</span>
              </button>
              <button
                onClick={() => alert("Hermes Agent selected")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-xs font-medium text-[#36344d] hover:bg-white transition-colors cursor-pointer"
              >
                <Layers className="h-4 w-4 text-[#6d7081]" />
                <span>Hermes Agent</span>
              </button>
              <button
                onClick={() => alert("n8n workflow engine selected")}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-xs font-medium text-[#36344d] hover:bg-white transition-colors cursor-pointer"
              >
                <Workflow className="h-4 w-4 text-[#fc5185]" />
                <span>n8n</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer: Give feedback */}
      <div className="pt-4 border-t border-[#dadce0]">
        <button
          onClick={() => alert("Feedback modal opened!")}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-[#6d7081] hover:text-[#1d1e20] hover:bg-white transition-colors cursor-pointer"
        >
          <MessageSquare className="h-4 w-4 text-[#6d7081]" />
          <span>Give feedback</span>
        </button>
      </div>
    </aside>
  );
}
