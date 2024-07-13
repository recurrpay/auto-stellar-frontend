import type { DashboardConfig } from "@/app/types/index";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "User",
      href: "/dashboard/user",
    },
    {
      title: "Consulate",
      href: "/dashboard/admin",
    },
  ],
  userSidebarNav: [
    {
      title: "Dashboard",
      href: "/organization-dashboard",
      icon: "home",
    },
    {
      title: "Employee List",
      href: "/organization-users",
      icon: "home",
    },
    {
      title: "Add New Employee",
      href: "/add-users",
      icon: "home",
    },
    {
      title: "Payroll List",
      href: "/organization-payroll-list",
      icon: "home",
    },
    {
      title: "Disburse Payroll",
      href: "/organization-payroll",
      icon: "home",
    },
    {
      title: "Deposits",
      href: "/organization-deposit",
      icon: "home",
    },
    {
      title: "Invoices",
      href: "/organization-payment-history",
      icon: "home",
    },
    {
      title: "Organization Profile",
      href: "/organization-profile",
      icon: "home",
    },
  ],
  adminSidebarNav: [
    {
      title: "Organization",
      href: "/dashboard/user/visa",
      icon: "home",
    },
  ],
  sidebarNav: [],
  sidebarNavBidder: [],
};
