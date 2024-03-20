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
          href: "/docs/uang",
          // disabled: true,
        },

      ],
    },
    {
      title: "Test Net",
      items: [
        {
          title: "Pendahuluan",
          href: "/docs/setor",
          // disabled: true,
        },

      ],
    },
  ],
}