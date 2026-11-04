"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

interface CreateInvoiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateInvoiceModal({ open, onOpenChange }: CreateInvoiceModalProps) {
  const [customer, setCustomer] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setCustomer("");
        setEmail("");
        setAmount("");
        onOpenChange(false);
      }, 1200);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <DialogTitle className="text-xl">Invoice Created Successfully!</DialogTitle>
            <DialogDescription>
              A payment link has been dispatched to {email || "the client"}.
            </DialogDescription>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Invoice</DialogTitle>
              <DialogDescription>
                Issue a new invoice to your client. They will receive an email with checkout details.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Client / Company Name
                </label>
                <Input
                  required
                  placeholder="e.g. Acme Corporation"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                  className="h-9"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Client Email Address
                </label>
                <Input
                  required
                  type="email"
                  placeholder="billing@acme.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Amount (USD)
                  </label>
                  <Input
                    required
                    type="number"
                    step="0.01"
                    placeholder="1500.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="h-9"
                  />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Due Date
                  </label>
                  <Input
                    type="date"
                    defaultValue="2026-11-20"
                    className="h-9"
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Generating Invoice..." : "Create & Send Invoice"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
