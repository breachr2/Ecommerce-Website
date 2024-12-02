"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="size-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  const sidebarLinks = [
    {
      href: "/dashboard",
      icon: Layout,
      label: "Dashboard",
      isCollapsed: isSidebarCollapsed,
    },
    {
      href: "/inventory",
      icon: Archive,
      label: "Inventory",
      isCollapsed: isSidebarCollapsed,
    },
    {
      href: "/products",
      icon: Clipboard,
      label: "Products",
      isCollapsed: isSidebarCollapsed,
    },
    {
      href: "/users",
      icon: User,
      label: "Users",
      isCollapsed: isSidebarCollapsed,
    },
    {
      href: "/settings",
      icon: SlidersHorizontal,
      label: "Settings",
      isCollapsed: isSidebarCollapsed,
    },
    {
      href: "/expenses",
      icon: CircleDollarSign,
      label: "Expenses",
      isCollapsed: isSidebarCollapsed,
    },
  ];
  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <Image
          src="https://s3-ecommerce-storage-v2.s3.us-west-2.amazonaws.com/logo2.png"
          alt="Website logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          Ecommerce Store
        </h1>

        <button
          className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="size-4" />
        </button>
      </div>

      <div className="flex-grow mt-8">
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            isCollapsed={link.isCollapsed}
          />
        ))}
      </div>

      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Ecommerce Store
        </p>
      </div>
    </div>
  );
}
