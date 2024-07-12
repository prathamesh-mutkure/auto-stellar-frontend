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
      title: "Pay ",
      href: "/payroll",
      icon: "home",
    },
    {
      title: "Users",
      href: "/users",
      icon: "home",
    },
    {
      title: "Payment History",
      href: "/history",
      icon: "home",
    },
    {
      title: "Add  Users",
      href: "/add_users",
      icon: "home",
    },
    {
      title: "Organization Profile",
      href: "/profile",
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