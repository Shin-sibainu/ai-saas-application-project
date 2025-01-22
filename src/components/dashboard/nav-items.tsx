"use client";

import { navItems } from "@/config/nav";
import { Button } from "../ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-accent")}
          asChild
        >
          <Link href={item.href}>
            {item.icon && <item.icon className="h-4 w-4 mr-2" />}
            {item.title}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default NavItems;
