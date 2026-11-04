"use client";

import * as React from "react";
import {
  Bell,
  Sparkles,
  ArrowRight,
  Gift,
  Search,
  Check,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopNav() {
  return (
    <header className="relative z-30 flex h-14 w-full items-center justify-between px-4 bg-[#2f1c6a] text-white shadow-md overflow-hidden select-none">
      {/* Decorative subtle 3D percent symbols in background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center gap-48 opacity-15">
        <span className="text-4xl font-black rotate-12 transform">%</span>
        <span className="text-5xl font-black -rotate-12 transform">%</span>
        <span className="text-4xl font-black rotate-45 transform">%</span>
      </div>

      {/* Left: Hostinger "H" Logo & Refer button */}
      <div className="flex items-center gap-3 z-10">
        {/* Hostinger Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-7 w-7 items-center justify-center font-black text-xl tracking-tighter text-white">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-white"
              fill="currentColor"
            >
              <path d="M7 3v7h10V3h3v18h-3v-8H7v8H4V3h3z" />
            </svg>
          </div>
        </div>

        {/* Refer & earn up to $365 button */}
        <button
          onClick={() => alert("Referral link copied to clipboard!")}
          className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#463185] hover:bg-[#523b9c] px-3 py-1 text-xs font-medium text-white transition-all border border-white/10 shadow-xs cursor-pointer"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ffcd35] text-[10px] font-bold text-[#1d1e20]">
            2★
          </span>
          <span>Refer & earn up to $365</span>
        </button>
      </div>

      {/* Center: SALE! Grab the best deals */}
      <div className="hidden md:flex items-center z-10">
        <a
          href="#deals"
          onClick={(e) => {
            e.preventDefault();
            alert("Viewing Black Friday & Cyber special hosting deals!");
          }}
          className="flex items-center gap-2 rounded-full bg-black/35 hover:bg-black/50 px-4 py-1 text-xs font-semibold text-white tracking-wide border border-white/10 transition-all cursor-pointer shadow-xs"
        >
          <span>SALE! Grab the best deals</span>
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-2.5 w-2.5" />
          </div>
        </a>
      </div>

      {/* Right: AI Agent pill, Bell, User profile */}
      <div className="flex items-center gap-2.5 z-10">
        {/* Agent pill button */}
        <button
          onClick={() => alert("Hostinger AI Agent opened!")}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#673de6] to-[#8c85ff] hover:brightness-110 px-3.5 py-1 text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#fff8e2]" />
          <span>Agent</span>
        </button>

        {/* Notifications Bell with red badge 1 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              <Bell className="h-4 w-4 text-white" />
              <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#fc5185] text-[9px] font-bold text-white ring-1 ring-[#2f1c6a]">
                1
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-2">
            <DropdownMenuLabel>Notifications (1 unread)</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-2 rounded-md bg-[#ffe8ef] text-xs space-y-1">
              <p className="font-semibold text-[#d63163]">
                Domain expiring in 29 days
              </p>
              <p className="text-[#36344d]">
                vastramayamagic.in needs renewal before it expires.
              </p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile Avatar with dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 pl-1 pr-1.5 py-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              <Avatar className="h-7 w-7 ring-1 ring-white/20">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" />
                <AvatarFallback className="bg-[#673de6] text-[10px] text-white">
                  HA
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="h-3 w-3 text-white/70" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-xs font-semibold">hasrshajw</span>
                <span className="text-[11px] text-muted-foreground">
                  harshavardhanjw@gmail.com
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing & Invoices</DropdownMenuItem>
            <DropdownMenuItem>Referral Dashboard</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
