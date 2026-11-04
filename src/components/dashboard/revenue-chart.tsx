"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MonthlyData {
  month: string;
  revenue: number;
  expenses: number;
}

const data: MonthlyData[] = [
  { month: "Jan", revenue: 18500, expenses: 9200 },
  { month: "Feb", revenue: 22400, expenses: 11000 },
  { month: "Mar", revenue: 26800, expenses: 12500 },
  { month: "Apr", revenue: 24200, expenses: 10800 },
  { month: "May", revenue: 31000, expenses: 14200 },
  { month: "Jun", revenue: 29500, expenses: 13100 },
  { month: "Jul", revenue: 36800, expenses: 15400 },
  { month: "Aug", revenue: 34200, expenses: 14900 },
  { month: "Sep", revenue: 39500, expenses: 16200 },
  { month: "Oct", revenue: 42100, expenses: 17800 },
  { month: "Nov", revenue: 45231, expenses: 18400 },
  { month: "Dec", revenue: 49800, expenses: 19100 },
];

export function RevenueChart() {
  const [activeRange, setActiveRange] = React.useState("month");
  const [hoveredBar, setHoveredBar] = React.useState<MonthlyData | null>(null);

  const maxVal = Math.max(...data.map((d) => d.revenue));

  return (
    <Card className="col-span-1 lg:col-span-4">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
        <div>
          <CardTitle className="text-base font-semibold">Revenue Analytics</CardTitle>
          <CardDescription>
            Monthly breakdown of gross revenue vs operating expenses.
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="month" value={activeRange} onValueChange={setActiveRange}>
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        {/* Dynamic Tooltip / Stat Banner */}
        <div className="flex items-center justify-between mb-6 rounded-lg bg-muted/40 p-3 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-muted-foreground">Selected Month: </span>
              <span className="font-semibold text-foreground">
                {hoveredBar ? hoveredBar.month : "November (Current)"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Gross Revenue: </span>
              <span className="font-bold text-primary">
                ${(hoveredBar ? hoveredBar.revenue : 45231).toLocaleString()}
              </span>
            </div>
            <div className="hidden sm:inline">
              <span className="text-muted-foreground">Net Margin: </span>
              <span className="font-semibold text-brand-success">
                +
                {(
                  (((hoveredBar ? hoveredBar.revenue : 45231) -
                    (hoveredBar ? hoveredBar.expenses : 18400)) /
                    (hoveredBar ? hoveredBar.revenue : 45231)) *
                  100
                ).toFixed(1)}
                %
              </span>
            </div>
          </div>
          <Badge variant="outline" className="text-[11px]">
            Target: $40,000 / mo
          </Badge>
        </div>

        {/* Visual Bar Chart */}
        <div className="relative h-64 w-full flex items-end justify-between gap-2 pt-6 pb-2">
          {/* Background grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 border-b border-border">
            <div className="border-b border-dashed border-border" />
            <div className="border-b border-dashed border-border" />
            <div className="border-b border-dashed border-border" />
            <div className="border-b border-dashed border-border" />
          </div>

          {/* Bars */}
          {data.map((item) => {
            const heightPercent = (item.revenue / maxVal) * 100;
            const isHovered = hoveredBar?.month === item.month;

            return (
              <div
                key={item.month}
                className="relative flex flex-col items-center flex-1 h-full justify-end group cursor-pointer"
                onMouseEnter={() => setHoveredBar(item)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Popover Bubble on Hover */}
                {isHovered && (
                  <div className="absolute -top-10 z-10 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-semibold text-background shadow-lg transition-transform animate-in fade-in zoom-in-95">
                    ${item.revenue.toLocaleString()}
                  </div>
                )}

                {/* The Bar */}
                <div className="w-full max-w-[28px] rounded-t-md transition-all duration-300 relative overflow-hidden bg-brand-primary-lightest group-hover:bg-brand-primary-light/40 flex flex-col justify-end">
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-md transition-all duration-300 ${
                      isHovered ? "bg-brand-primary scale-[1.03]" : "bg-brand-primary/85"
                    }`}
                  />
                </div>

                {/* X-axis Label */}
                <span className="mt-2 text-[11px] font-medium text-muted-foreground group-hover:text-foreground">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-xs bg-primary" />
            <span>Monthly Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-xs bg-primary/30" />
            <span>Target Benchmark</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
