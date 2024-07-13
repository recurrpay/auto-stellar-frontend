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
<<<<<<< HEAD
      title: "Disburse Payments",
      href: "/organization-payroll",
      icon: "home",
    },
    {
      title: "Employee Directory",
=======
      title: "Employees",
>>>>>>> 099b9f6e4518d69890d1cdd348ffbe805b9b625a
      href: "/organization-users",
      icon: "home",
    },
    {
      title: "Add New Employee",
      href: "/add-users",
      icon: "home",
    },
    {
      title: "Payroll",
      href: "/organization-payroll-list",
      icon: "home",
    },
    {
      title: "Add Payroll ",
      href: "/organization-payroll",
      icon: "home",
    },
    {
      title: "Deposits",
      href: "/organization-deposit",
      icon: "home",
    },
    {
<<<<<<< HEAD
      title: "Payment Records",
=======
      title: "Invoices",
>>>>>>> 099b9f6e4518d69890d1cdd348ffbe805b9b625a
      href: "/organization-payment-history",
      icon: "home",
    },
    {
<<<<<<< HEAD
      title: "Organization Payrolls",
      href: "/organization-payroll-list",
      icon: "home",
    },
    {
=======
>>>>>>> 099b9f6e4518d69890d1cdd348ffbe805b9b625a
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
