"use client";

import * as React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Package,
  Settings,
  Bell,
  Sparkles,
  ChevronRight,
  LogOut,
  HelpCircle,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard, badge: null },
  { id: "components", label: "UI Components", icon: Layers, badge: "21" },
  { id: "analytics", label: "Analytics", icon: BarChart3, badge: "Live" },
  { id: "orders", label: "Orders", icon: CreditCard, badge: "12" },
  { id: "customers", label: "Customers", icon: Users, badge: null },
  { id: "products", label: "Products", icon: Package, badge: null },
  { id: "settings", label: "Settings", icon: Settings, badge: null },
];

export function Sidebar({ currentTab, onSelectTab, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm font-bold text-base">
              ▲
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-foreground flex items-center gap-1.5">
                Apex Admin
                <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4">
                  v2.0
                </Badge>
              </span>
              <span className="text-xs text-muted-foreground">Enterprise Suite</span>
            </div>
          </div>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Platform
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    onClose();
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all cursor-pointer",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Secondary section */}
          <div className="mt-8 px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Support & Tools
          </div>
          <div className="space-y-1">
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4" />
                <span>Audit Logs</span>
              </div>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-4 w-4" />
                <span>Documentation</span>
              </div>
            </button>
          </div>

          {/* Pro Plan Card */}
          <div className="mt-8 rounded-xl border border-border bg-gradient-to-br from-brand-primary-light via-brand-white-blue to-transparent dark:from-brand-meteorite-dark/60 dark:via-brand-meteorite-dark/20 p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary dark:text-brand-meteorite" />
              <span className="text-xs font-semibold text-foreground">Pro Workspace</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              You are currently on the Pro trial with 14 days remaining.
            </p>
            <Button size="sm" variant="outline" className="mt-3 w-full text-xs h-7 border-brand-primary/30 hover:bg-brand-primary-light dark:hover:bg-brand-meteorite-dark/50">
              Manage Subscription
            </Button>
          </div>
        </div>

        {/* User Footer Profile */}
        <div className="border-t border-border p-3">
          <div className="flex items-center justify-between rounded-lg p-2 hover:bg-accent transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-foreground">Alex Developer</span>
                <span className="text-[11px] text-muted-foreground">admin@apex.dev</span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </aside>
    </>
  );
}
