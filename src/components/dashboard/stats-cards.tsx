import * as React from "react";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    period: "from last month",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1%",
    period: "from last month",
    trend: "up",
    icon: Users,
  },
  {
    title: "Sales Volume",
    value: "+12,234",
    change: "+19.0%",
    period: "from last month",
    trend: "up",
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201",
    period: "since last hour",
    trend: "up",
    icon: Activity,
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";

        return (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <Badge
                  variant={isPositive ? "success" : "destructive"}
                  className="px-1 py-0 h-4 text-[10px] gap-0.5"
                >
                  {isPositive ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground">{stat.period}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
