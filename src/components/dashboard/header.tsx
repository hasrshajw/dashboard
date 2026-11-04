"use client";

import * as React from "react";
import {
  Menu,
  Search,
  Bell,
  Plus,
  SlidersHorizontal,
  User,
  Settings,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onToggleSidebar: () => void;
  onOpenNewModal: () => void;
}

export function Header({ onToggleSidebar, onOpenNewModal }: HeaderProps) {
  const [unreadCount, setUnreadCount] = React.useState(3);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-card/80 px-4 md:px-6 backdrop-blur-md">
      {/* Left side: Hamburger and Search */}
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden h-9 w-9"
          onClick={onToggleSidebar}
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>

        {/* Global Search */}
        <div className="relative w-full max-w-xs md:max-w-sm hidden sm:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search metrics, orders, customers..."
            className="w-full pl-9 pr-12 h-9 bg-background/50 border-input text-xs"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-2 hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Right side: Actions, Theme, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Quick Action Button */}
        <Button
          onClick={onOpenNewModal}
          size="sm"
          className="hidden sm:flex items-center gap-1.5 h-9"
        >
          <Plus className="h-4 w-4" />
          <span>New Invoice</span>
        </Button>

        {/* Notification Bell */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative h-9 w-9">
              <Bell className="h-4 w-4 text-foreground" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                  {unreadCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-2">
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-xs font-semibold text-foreground">Notifications</span>
              <button
                onClick={() => setUnreadCount(0)}
                className="text-[11px] text-primary hover:underline cursor-pointer"
              >
                Mark all read
              </button>
            </div>
            <DropdownMenuSeparator />
            <div className="space-y-1 text-xs">
              <div className="rounded-md p-2 hover:bg-accent cursor-pointer transition-colors">
                <p className="font-medium text-foreground">Payment received from Acme Corp</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">\$4,950.00 • 5m ago</p>
              </div>
              <div className="rounded-md p-2 hover:bg-accent cursor-pointer transition-colors">
                <p className="font-medium text-foreground">New enterprise subscriber</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Apex tier • 42m ago</p>
              </div>
              <div className="rounded-md p-2 hover:bg-accent cursor-pointer transition-colors">
                <p className="font-medium text-foreground">Deployment successful</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Vercel production build v2.4 • 2h ago</p>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dark/Light Theme Toggle */}
        <ThemeToggle />

        {/* User Profile Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <Avatar className="h-9 w-9 cursor-pointer border border-border">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-foreground">Alex Developer</p>
                <p className="text-xs leading-none text-muted-foreground">admin@apex.dev</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Billing & Plans</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4 mr-2" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
