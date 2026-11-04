"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Info, Bell, Sparkles, Layers } from "lucide-react";

export function ComponentsShowcase() {
  const [progressVal, setProgressVal] = React.useState(68);
  const [switchState, setSwitchState] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(true);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-border bg-card p-6">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">shadcn/ui Component Catalog</h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Every component below lives directly in your codebase under{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px]">src/components/ui/</code>.
          </p>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">UI Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>All Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Grid of Showcase Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* Buttons & Badges */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Buttons & Variants</CardTitle>
            <CardDescription>Primary, secondary, destructive, outline, ghost, and sizes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="success">Success</Button>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" variant="outline">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="destructive">Failed</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Controls: Select, Switch, Checkbox */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Form Inputs & Controls</CardTitle>
            <CardDescription>Select dropdowns, toggle switches, checkboxes, and text inputs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Select Role</label>
                <Select defaultValue="Admin">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Administrator</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Text Input</label>
                <Input placeholder="Type something..." className="h-9" />
              </div>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border p-3">
              <div className="space-y-0.5">
                <div className="text-xs font-medium text-foreground">Enable Two-Factor Auth</div>
                <div className="text-[11px] text-muted-foreground">Secure your account with 2FA verification.</div>
              </div>
              <Switch checked={switchState} onCheckedChange={setSwitchState} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox checked={checkboxState} onCheckedChange={setCheckboxState} />
              <label className="text-xs font-medium text-foreground cursor-pointer">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Sheet & Drawer (Slide-out) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Slide-out Sheet (Drawer)</CardTitle>
            <CardDescription>Slide out panels from left, right, top or bottom.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs text-muted-foreground">
              Sheets are great for mobile navigation, detail inspectors, and complex workflows.
            </p>
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="text-xs">
                    Open Right Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Side Inspector Panel</SheetTitle>
                    <SheetDescription>
                      This is a shadcn Sheet component sliding out from the right.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold">User Notes</label>
                      <Textarea placeholder="Add private notes..." />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button variant="outline">Close</Button>
                    </SheetClose>
                    <Button>Save Details</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <Tooltip>
                <TooltipTrigger>
                  <Button variant="secondary" className="text-xs">
                    Hover for Tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>shadcn Tooltip in action!</TooltipContent>
              </Tooltip>
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Storage Limit (Progress Component)</span>
                <span>{progressVal}%</span>
              </div>
              <Progress value={progressVal} />
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Alerts & Status Banners</CardTitle>
            <CardDescription>Visual feedback banners for errors, warnings, and success.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>System Operational</AlertTitle>
              <AlertDescription>All APIs and webhooks are responding within nominal latency.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Billing Attention Needed</AlertTitle>
              <AlertDescription>Your credit card is set to expire in 3 days.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Accordion (FAQ) */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Accordion Component</CardTitle>
            <CardDescription>Collapsible accordion for FAQs, nested settings, and docs.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does shadcn/ui differ from Material UI or Chakra?</AccordionTrigger>
                <AccordionContent>
                  Unlike traditional UI libraries packaged as npm dependencies, shadcn/ui provides raw component code
                  that you copy directly into your project. You own the code, the Tailwind classes, and can customize
                  everything without being constrained by a third-party package API.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I add more components using the CLI?</AccordionTrigger>
                <AccordionContent>
                  Yes! With the included <code className="font-mono text-xs">components.json</code> file, you can run{" "}
                  <code className="font-mono text-xs">npx shadcn@latest add &lt;component&gt;</code> anytime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is this production-ready for Vercel?</AccordionTrigger>
                <AccordionContent>
                  Yes, it is built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4, optimized specifically
                  for instantaneous zero-configuration deployment to Vercel.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
