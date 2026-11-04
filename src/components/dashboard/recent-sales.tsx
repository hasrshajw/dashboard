import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Sale {
  name: string;
  email: string;
  amount: string;
  avatar: string;
  initials: string;
  status: "Completed" | "Processing" | "Pending";
}

const sales: Sale[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    initials: "OM",
    status: "Completed",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    initials: "JL",
    status: "Completed",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    initials: "IN",
    status: "Processing",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    initials: "WK",
    status: "Completed",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$449.00",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    initials: "SD",
    status: "Pending",
  },
];

export function RecentSales() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">Recent Sales</CardTitle>
            <CardDescription>
              You made 265 sales this month.
            </CardDescription>
          </div>
          <Badge variant="secondary" className="font-mono text-xs">
            +18 today
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={sale.avatar} alt={sale.name} />
                  <AvatarFallback>{sale.initials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-0.5">
                  <p className="text-sm font-medium leading-none text-foreground">{sale.name}</p>
                  <p className="text-xs text-muted-foreground">{sale.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    sale.status === "Completed"
                      ? "success"
                      : sale.status === "Processing"
                      ? "info"
                      : "warning"
                  }
                  className="hidden sm:inline-flex text-[10px] py-0 px-1.5 h-5"
                >
                  {sale.status}
                </Badge>
                <div className="font-semibold text-sm text-foreground text-right">
                  {sale.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
