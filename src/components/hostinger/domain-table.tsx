"use client";

import * as React from "react";
import {
  Search,
  ChevronDown,
  ArrowUpDown,
  MoreVertical,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DomainItem {
  id: string;
  name: string;
  status: "Active" | "Pending" | "Expired";
  expirationDate: string;
  autoRenewal: boolean;
}

const initialDomains: DomainItem[] = [
  {
    id: "1",
    name: "weonemedia.com",
    status: "Active",
    expirationDate: "2027-06-18",
    autoRenewal: false,
  },
  {
    id: "2",
    name: "weshopindia.com",
    status: "Active",
    expirationDate: "2027-06-18",
    autoRenewal: false,
  },
  {
    id: "3",
    name: "happynonvegpickles.in",
    status: "Active",
    expirationDate: "2027-02-04",
    autoRenewal: false,
  },
  {
    id: "4",
    name: "premiumupvc.in",
    status: "Active",
    expirationDate: "2027-02-04",
    autoRenewal: false,
  },
  {
    id: "5",
    name: "schedy.in",
    status: "Active",
    expirationDate: "2026-11-20",
    autoRenewal: false,
  },
];

interface DomainTableProps {
  onRenewDomain: (domain: string) => void;
  onManageDomain: (domain: string) => void;
}

export function DomainTable({ onRenewDomain, onManageDomain }: DomainTableProps) {
  const [domains, setDomains] = React.useState<DomainItem[]>(initialDomains);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterType, setFilterType] = React.useState("All domains");
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const filteredDomains = domains.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredDomains.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredDomains.map((d) => d.id));
    }
  };

  const toggleSelectOne = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAutoRenewal = (id: string) => {
    setDomains((prev) =>
      prev.map((d) => (d.id === id ? { ...d, autoRenewal: !d.autoRenewal } : d))
    );
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-[#6d7081]" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-10 w-full rounded-lg border border-[#dadce0] bg-white pl-10 pr-4 text-xs text-[#1d1e20] placeholder-[#6d7081] focus:border-[#673de6] focus:outline-none focus:ring-1 focus:ring-[#673de6]"
          />
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-10 items-center justify-between gap-2 rounded-lg border border-[#dadce0] bg-white px-4 text-xs font-medium text-[#1d1e20] hover:bg-[#f2f3f6] transition-colors cursor-pointer min-w-[130px]">
              <span>{filterType}</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#6d7081]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem onClick={() => setFilterType("All domains")}>
              All domains
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Active")}>
              Active
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilterType("Expiring soon")}>
              Expiring soon
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Domains Table Container */}
      <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-white shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            {/* Table Header */}
            <thead className="border-b border-[#dadce0] bg-white text-[#6d7081] font-medium">
              <tr>
                <th className="w-10 px-4 py-3.5">
                  <Checkbox
                    checked={
                      filteredDomains.length > 0 &&
                      selectedIds.length === filteredDomains.length
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#6d7081]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#1d1e20]">
                    <span>Domain name</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#6d7081]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#1d1e20]">
                    <span>Status</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#6d7081]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-[#1d1e20]">
                    <span>Expiration date</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="px-4 py-3.5 font-semibold text-[#6d7081]">
                  Auto-renewal
                </th>
                <th className="px-4 py-3.5 text-right font-semibold text-[#6d7081]"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#dadce0]/60">
              {filteredDomains.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-[#6d7081]">
                    No domains found matching &quot;{searchTerm}&quot;
                  </td>
                </tr>
              ) : (
                filteredDomains.map((domain) => {
                  const isSelected = selectedIds.includes(domain.id);

                  return (
                    <tr
                      key={domain.id}
                      className="hover:bg-[#f8f9fc] transition-colors"
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-3.5">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleSelectOne(domain.id)}
                        />
                      </td>

                      {/* Domain Name */}
                      <td className="px-4 py-3.5 font-medium text-[#1d1e20]">
                        {domain.name}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5 text-[#00b090] font-medium">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{domain.status}</span>
                        </div>
                      </td>

                      {/* Expiration date */}
                      <td className="px-4 py-3.5 text-[#36344d]">
                        {domain.expirationDate}
                      </td>

                      {/* Auto-renewal Switch */}
                      <td className="px-4 py-3.5">
                        <Switch
                          checked={domain.autoRenewal}
                          onCheckedChange={() => toggleAutoRenewal(domain.id)}
                        />
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onRenewDomain(domain.name)}
                            className="text-xs font-semibold text-[#673de6] hover:text-[#5025d1] hover:underline px-2 py-1 cursor-pointer transition-colors"
                          >
                            Renew
                          </button>

                          <button
                            onClick={() => onManageDomain(domain.name)}
                            className="rounded-lg border border-[#dadce0] bg-white hover:bg-[#f2f3f6] px-3.5 py-1.5 text-xs font-medium text-[#1d1e20] shadow-2xs transition-colors cursor-pointer"
                          >
                            Manage
                          </button>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-[#dadce0]/40 text-[#6d7081] hover:text-[#1d1e20] transition-colors cursor-pointer">
                                <MoreVertical className="h-4 w-4" />
                              </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuLabel>{domain.name}</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => onManageDomain(domain.name)}>
                                DNS zone editor
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => alert(`Lock status checked for ${domain.name}`)}>
                                Domain lock settings
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => alert(`WHOIS privacy checked for ${domain.name}`)}>
                                WHOIS Privacy protection
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                Transfer out
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
