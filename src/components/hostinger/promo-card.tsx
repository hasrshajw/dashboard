"use client";

import * as React from "react";
import { Lock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PromoCardProps {
  onGetNow?: () => void;
  onSeeMore?: () => void;
}

export function PromoCard({ onGetNow, onSeeMore }: PromoCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border border-[#dadce0] bg-white p-5 shadow-xs">
      {/* Left: Lock, Title & Domain recommendation */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs text-[#6d7081]">
          <Lock className="h-3.5 w-3.5 text-[#6d7081]" />
          <span>Protect your internet identity</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-[#1d1e20]">
            weonemedia.in
          </span>
          <span className="text-xs text-[#6d7081]">or</span>
          <button
            onClick={onSeeMore}
            className="text-xs font-semibold text-[#673de6] hover:underline cursor-pointer"
          >
            See more options
          </button>
        </div>
      </div>

      {/* Right: Pricing, Discount pill & Get now button */}
      <div className="flex flex-wrap items-center gap-4 self-end md:self-auto">
        <div className="flex flex-col items-end text-right">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#6d7081] line-through">
              ₹ 899.00/1st yr
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-sm bg-[#ebe4ff] px-1.5 py-0.5 text-[10px] font-bold text-[#673de6]">
              Save 99%
            </span>
            <span className="text-2xl font-bold text-[#1d1e20]">
              ₹ 1.00
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#6d7081]">
            <span>Only for 3yr+ term</span>
            <HelpCircle className="h-3 w-3 text-[#6d7081]" />
          </div>
        </div>

        <button
          onClick={onGetNow ? onGetNow : () => alert("Adding weonemedia.in to cart for ₹1.00!")}
          className="rounded-lg border border-[#dadce0] bg-white hover:bg-[#f2f3f6] px-5 py-2 text-xs font-semibold text-[#1d1e20] shadow-2xs transition-colors cursor-pointer"
        >
          Get now
        </button>
      </div>
    </div>
  );
}
