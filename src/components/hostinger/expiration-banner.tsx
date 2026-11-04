"use client";

import * as React from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExpirationBannerProps {
  onRenew?: () => void;
}

export function ExpirationBanner({ onRenew }: ExpirationBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#ffe8ef] border-b border-[#fc5185]/20 px-6 py-3 transition-all duration-300">
      {/* Left: Red Alert Icon & Text */}
      <div className="flex items-start sm:items-center gap-3">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fc5185] text-white mt-0.5 sm:mt-0">
          <AlertCircle className="h-3.5 w-3.5" />
        </div>
        <div className="text-xs sm:text-sm text-[#36344d] leading-snug">
          <p>
            Your domain <strong className="font-semibold text-[#1d1e20]">vastramayamagic.in</strong> will expire soon
          </p>
          <p className="text-xs text-[#6d7081]">
            You have <strong className="font-semibold text-[#1d1e20]">29 days</strong> to renew this domain and to keep it yours.
          </p>
        </div>
      </div>

      {/* Right: Renew Button & Dismiss (X) */}
      <div className="flex items-center gap-3 self-end sm:self-auto">
        <button
          onClick={() => {
            onRenew ? onRenew() : alert("Renewing vastramayamagic.in...");
          }}
          className="rounded-lg bg-[#d63163] hover:bg-[#fc5185] px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
        >
          Renew
        </button>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded p-1 text-[#6d7081] hover:text-[#1d1e20] hover:bg-[#fc5185]/10 transition-colors cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
