"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10">
          <Image src="/icons/logo.svg" alt="logo.svg" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white mac-lg:hidden">
            Prodcastr
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActiveRoute =
            pathName === route || pathName.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 lg:justify-start",
                {
                  "bg-nav-focus border-r-4 border-yellow-300": isActiveRoute,
                }
              )}
            >
              <Image src={imgURL} alt={label} height={24} width={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
