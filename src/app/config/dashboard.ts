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
      href: "/dashboard",
      icon: "home",
    },
    {
      title: "Payment History",
      href: "/history",
      icon: "home",
    },
    {
      title: "Add Users",
      href: "/dashboard/user/visa/form",
      icon: "home",
    },
    {
      title: "Users",
      href: "/dashboard/user/travel-history",
      icon: "home",
    },
    {
      title: "Profile",
      href: "/dashboard/user/profile",
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
