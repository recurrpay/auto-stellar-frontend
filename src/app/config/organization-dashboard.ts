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
      title: "Pay ",
      href: "/organization-payroll",
      icon: "home",
    },
    {
      title: "Users",
      href: "/organization-users",
      icon: "home",
    },
    {
      title: "Payment History",
      href: "/organization-payment-history",
      icon: "home",
    },
    {
      title: "Add  Users",
      href: "/add-users",
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
