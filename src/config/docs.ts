import type { DocsConfig } from "@/types"

export const docsConfig: DocsConfig = {
  mainNav: [
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/project/wellcome/",
        },
      ],
    },

    {
      title: "Main Net",
      items: [
        {
          title: "Pendahuluan",
          href: "/docs/uang-saku",
          // disabled: true,
        },
        {
          title: "Untuk Pengasuh",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Untuk Wali Santri",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Test Net",
      items: [
        {
          title: "Pendahuluan",
          href: "/docs/setor-hafalan",
          // disabled: true,
        },
        {
          title: "Untuk Pengasuh",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Untuk Wali Santri",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}