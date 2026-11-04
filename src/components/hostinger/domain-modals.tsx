"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, CheckCircle2, ArrowRight } from "lucide-react";

interface GetDomainModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetDomainModal({ open, onOpenChange }: GetDomainModalProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setResult(searchTerm.endsWith(".in") || searchTerm.endsWith(".com") ? searchTerm : `${searchTerm}.in`);
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base font-bold">
            <Globe className="h-5 w-5 text-[#673de6]" />
            Find your perfect domain
          </DialogTitle>
          <DialogDescription className="text-xs">
            Search millions of available domain names with instant registration.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSearch} className="space-y-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6d7081]" />
            <Input
              placeholder="e.g. yourbrandname"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 h-10 text-xs"
            />
          </div>

          <Button
            type="submit"
            disabled={isSearching || !searchTerm.trim()}
            className="w-full bg-[#673de6] hover:bg-[#5025d1] text-xs h-9"
          >
            {isSearching ? "Checking availability..." : "Search Domain"}
          </Button>

          {result && (
            <div className="rounded-lg border border-[#dadce0] bg-[#f8f9fc] p-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-xs text-[#1d1e20]">{result}</p>
                <p className="text-[11px] text-[#00b090] font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Available
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[#1d1e20]">₹ 1.00</span>
                <Button
                  size="sm"
                  onClick={() => {
                    alert(`Added ${result} to cart!`);
                    onOpenChange(false);
                  }}
                  className="bg-[#673de6] hover:bg-[#5025d1] text-xs h-7"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface TransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransferDomainModal({ open, onOpenChange }: TransferModalProps) {
  const [domain, setDomain] = React.useState("");

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Transfer initiated for ${domain}. You will receive an authorization code email.`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">Transfer an existing domain</DialogTitle>
          <DialogDescription className="text-xs">
            Transfer your domain to Hostinger to manage all your websites and DNS in one place.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleTransfer} className="space-y-4 py-2">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#1d1e20]">Domain name to transfer</label>
            <Input
              required
              placeholder="example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="h-10 text-xs"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="text-xs"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#673de6] hover:bg-[#5025d1] text-xs">
              Start Transfer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface RenewModalProps {
  open: boolean;
  domainName: string;
  onOpenChange: (open: boolean) => void;
}

export function RenewDomainModal({ open, domainName, onOpenChange }: RenewModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-bold">Renew {domainName}</DialogTitle>
          <DialogDescription className="text-xs">
            Extend your domain registration to keep your brand secure and prevent downtime.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-3">
          <div className="rounded-lg border border-[#dadce0] p-3 flex justify-between items-center bg-[#f8f9fc]">
            <div>
              <p className="text-xs font-semibold text-[#1d1e20]">1 Year Extension</p>
              <p className="text-[11px] text-[#6d7081]">Renews until next cycle</p>
            </div>
            <div className="text-right">
              <p className="text-xs line-through text-[#6d7081]">₹ 1,199.00</p>
              <p className="text-sm font-bold text-[#1d1e20]">₹ 899.00</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="text-xs"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert(`Successfully renewed ${domainName}!`);
              onOpenChange(false);
            }}
            className="bg-[#d63163] hover:bg-[#fc5185] text-xs text-white"
          >
            Confirm Renewal
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
