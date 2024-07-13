import * as React from "react";
import type { MainNavItem } from "../types/index";
import { siteConfig } from "@/app/config/site";
import { cn } from "@/app/lib/utils";
import { Icons } from "@/app/components/icons";
import { MobileNav } from "@/app/components/mobile-nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Search } from "./ui/search";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  // const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="light flex gap-6 md:gap-10">
      <Link
        href="/"
        className={cn(
          "hidden items-center space-x-2 hover:text-foreground/80 md:flex",
        )}
      >
        <div>
          <Search />
        </div>
      </Link>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
