"use client";

import * as React from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { RecentSales } from "@/components/dashboard/recent-sales";
import { OrdersTable } from "@/components/dashboard/orders-table";
import { CreateInvoiceModal } from "@/components/dashboard/create-invoice-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Plus,
  BarChart3,
  Users,
  Settings as SettingsIcon,
} from "lucide-react";

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = React.useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <Header
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          onOpenNewModal={() => setIsModalOpen(true)}
        />

        {/* Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">
          {/* Welcome & Top Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Dashboard Overview
                </h1>
                <Badge variant="outline" className="hidden sm:inline-flex text-xs gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Welcome back, Alex. Here is what is happening with your projects today.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 gap-1.5 text-xs"
                onClick={() => alert("Monthly report exported to CSV!")}
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Export Report</span>
              </Button>
              <Button
                size="sm"
                className="h-9 gap-1.5 text-xs shadow-sm"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="h-3.5 w-3.5" />
                <span>New Invoice</span>
              </Button>
            </div>
          </div>

          {/* Conditional View by Selected Tab */}
          {currentTab === "overview" && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <StatsCards />

              {/* Charts & Recent Activity Grid */}
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
                <RevenueChart />
                <RecentSales />
              </div>

              {/* Transactions / Orders Data Table */}
              <OrdersTable />
            </div>
          )}

          {currentTab === "analytics" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 text-center py-12">
                <BarChart3 className="mx-auto h-12 w-12 text-primary opacity-80 mb-3" />
                <h2 className="text-lg font-semibold text-foreground">Advanced Analytics Engine</h2>
                <p className="text-xs text-muted-foreground max-w-md mx-auto mt-1">
                  Real-time event tracking, conversion funnels, and retention curves configured for your product.
                </p>
              </div>
              <StatsCards />
              <RevenueChart />
            </div>
          )}

          {currentTab === "orders" && (
            <div className="space-y-6">
              <OrdersTable />
            </div>
          )}

          {currentTab === "customers" && (
            <div className="space-y-6">
              <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                <RecentSales />
                <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-center items-center text-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground">Audience Segmentation</h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-xs">
                    Target power users, churn risks, and trial signups with automated email flows.
                  </p>
                  <Button size="sm" variant="outline" className="mt-4 text-xs">
                    Configure Cohorts
                  </Button>
                </div>
              </div>
              <OrdersTable />
            </div>
          )}

          {currentTab === "products" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <h2 className="text-lg font-semibold text-foreground">Products & Catalog</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Manage inventory, pricing tiers, and subscriptions.
                </p>
                <Button size="sm" className="mt-4" onClick={() => setIsModalOpen(true)}>
                  Add New Item
                </Button>
              </div>
            </div>
          )}

          {currentTab === "settings" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  General Workspace Settings
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Configure organization details, team roles, and billing preferences.
                </p>
                <div className="mt-6 space-y-4 max-w-xl">
                  <div>
                    <label className="text-xs font-semibold text-foreground">Workspace Name</label>
                    <input
                      type="text"
                      defaultValue="Apex Workspace"
                      className="mt-1 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="admin@apex.dev"
                      className="mt-1 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                    />
                  </div>
                  <Button size="sm" className="mt-2">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Interactive Modal */}
      <CreateInvoiceModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}
