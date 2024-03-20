import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Project Mainnet",
          href: "/project/category/mainnet",
          description: "Project Nodes Mainnet cosmos network",
        },

        {
          title: "Project Testnet",
          href: "/project/category/testnet",
          description: "Project Nodes Testnet cosmos network",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Explorer",
      items: [
        {
          title: "Mainet",
          href: "/docs/getting-started",
          description: "Exploler Mainnet cosmos network",
        },
        {
          title: "Testnet",
          href: "/blog",
          description:
            "Exploler Mainnet Cosmos Network",
        },

      ],
    },
  ],
  links: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "contact",
      href: "/contact",
    },
  ],
};
