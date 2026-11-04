"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  SlidersHorizontal,
  Download,
  ArrowUpDown,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Order {
  id: string;
  customer: string;
  email: string;
  status: "Paid" | "Pending" | "Refunded" | "Failed";
  date: string;
  amount: string;
  method: string;
}

const initialOrders: Order[] = [
  {
    id: "ORD-9481",
    customer: "Liam Johnson",
    email: "liam@techcorp.io",
    status: "Paid",
    date: "Nov 4, 2026",
    amount: "$250.00",
    method: "Credit Card (Visa ••4242)",
  },
  {
    id: "ORD-9480",
    customer: "Emma Watson",
    email: "emma@creative.studio",
    status: "Paid",
    date: "Nov 4, 2026",
    amount: "$1,200.00",
    method: "Wire Transfer",
  },
  {
    id: "ORD-9479",
    customer: "Noah Miller",
    email: "noah@enterprise.com",
    status: "Pending",
    date: "Nov 3, 2026",
    amount: "$450.00",
    method: "Stripe",
  },
  {
    id: "ORD-9478",
    customer: "Sophia Brown",
    email: "sophia@startup.co",
    status: "Paid",
    date: "Nov 2, 2026",
    amount: "$89.00",
    method: "PayPal",
  },
  {
    id: "ORD-9477",
    customer: "Lucas Garcia",
    email: "lucas@designs.org",
    status: "Refunded",
    date: "Nov 1, 2026",
    amount: "$320.00",
    method: "Credit Card (Mastercard ••8819)",
  },
  {
    id: "ORD-9476",
    customer: "Ava Wilson",
    email: "ava@cloudops.net",
    status: "Failed",
    date: "Oct 31, 2026",
    amount: "$600.00",
    method: "Credit Card (Amex ••1002)",
  },
];

export function OrdersTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState<string>("All");

  const filteredOrders = initialOrders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <CardTitle className="text-base font-semibold">Transactions & Orders</CardTitle>
          <CardDescription>
            Manage and inspect recent customer billing activities and transactions.
          </CardDescription>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filter by name, ID or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 h-9 text-xs"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1 border border-border rounded-lg p-0.5 bg-muted/30">
            {["All", "Paid", "Pending", "Refunded"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  filterStatus === status
                    ? "bg-card text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Export Button */}
          <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs">
            <Download className="h-3.5 w-3.5" />
            <span>Export</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="font-semibold text-xs">Order ID</TableHead>
                <TableHead className="font-semibold text-xs">Customer</TableHead>
                <TableHead className="font-semibold text-xs">Status</TableHead>
                <TableHead className="font-semibold text-xs">Payment Method</TableHead>
                <TableHead className="font-semibold text-xs">Date</TableHead>
                <TableHead className="font-semibold text-xs text-right">Amount</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-muted-foreground text-xs">
                    No matching orders found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/40 transition-colors">
                    <TableCell className="font-mono text-xs font-semibold text-foreground">
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-xs text-foreground">
                          {order.customer}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {order.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "Paid"
                            ? "success"
                            : order.status === "Pending"
                            ? "warning"
                            : order.status === "Refunded"
                            ? "secondary"
                            : "destructive"
                        }
                        className="text-[11px] py-0.5 px-2 font-medium capitalize"
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {order.method}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {order.date}
                    </TableCell>
                    <TableCell className="font-semibold text-xs text-right text-foreground">
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => alert(`Viewing details for ${order.id}`)}>
                            View invoice details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => alert(`Receipt downloaded for ${order.id}`)}>
                            Download receipt (PDF)
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Issue refund
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Table footer count */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 px-1">
          <span>
            Showing <strong>{filteredOrders.length}</strong> of {initialOrders.length} orders
          </span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-8 text-xs" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
