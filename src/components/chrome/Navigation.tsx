"use client";

import { useAuth } from "@clerk/nextjs";
import { GearIcon } from "@radix-ui/react-icons";
import { FilePlus, HomeIcon, Layout, LineChart, Plus } from "lucide-react";
import Link from "next/link";

interface Link {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navigation() {
  const { userId } = useAuth();

  const links: Link[] = [
    { href: userId!, label: "Home", icon: <HomeIcon className="h-7 w-7" /> },
    {
      href: `${userId!}/content`,
      label: "Content",
      icon: <FilePlus className="h-7 w-7" />,
    },
    {
      href: `${userId!}/pages`,
      label: "Pages",
      icon: <Layout className="h-7 w-7" />,
    },
    {
      href: `${userId!}/analytics`,
      label: "Analytics",
      icon: <LineChart className="h-7 w-7" />,
    },
    {
      href: `${userId!}/settings`,
      label: "Settings",
      icon: <GearIcon className="h-7 w-7" />,
    },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around gap-2 bg-sky-50 p-5">
      {links.map((link) => (
        <Link
          className="inline-flex flex-col items-center rounded p-2"
          href={link.href}
          key={link.href}
        >
          {link.icon}
          <span className="text-xs normal-case">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}
