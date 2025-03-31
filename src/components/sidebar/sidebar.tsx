"use client";

import React, { useEffect, useState } from "react";
import {
  FiBarChart,
  FiHome,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiHardDrive,
  FiMusic,
} from "react-icons/fi";
import { motion } from "motion/react";
import Option from "~/components/sidebar/option";
import { TitleSection } from "~/components/sidebar/title-section";
import ToggleClose from "~/components/sidebar/toggle-close";
import type { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";
import { useAuth, useUser } from "@clerk/nextjs";

type Option = {
  title: string;
  icon: IconType;
  href: string;
};

const OPTIONS: Option[] = [
  { title: "Dashboard", icon: FiHome, href: "/dashboard" },
  { title: "Playlists", icon: FiMusic, href: "/playlists" },
  { title: "Drive", icon: FiHardDrive, href: "/drive" },
  { title: "Products", icon: FiShoppingCart, href: "/dashboard" },
  { title: "Tags", icon: FiTag, href: "/dashboard" },
  { title: "Analytics", icon: FiBarChart, href: "/dashboard" },
  { title: "Members", icon: FiUsers, href: "/dashboard" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(
    `${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`,
  );

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-neutral-700 bg-neutral-800 p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        {OPTIONS.map((o, index) => {
          return (
            <Option
              key={index}
              Icon={o.icon}
              title={o.title}
              selected={selected}
              setSelected={setSelected}
              open={open}
              href={o.href}
            />
          );
        })}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};
