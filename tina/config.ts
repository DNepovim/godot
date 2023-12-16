import { defineConfig, Template } from "tinacms";

const globalBlockFields: Template["fields"] = [
  {
    type: "string",
    label: "Barva",
    name: "palette",
    options: ["sky", "brown", "beige", "blue"],
  },
  {
    type: "string",
    label: "Kotva",
    name: "id",
  },
];

const columnsBlock: Template = {
  name: "columns",
  label: "Sloupce",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Nadpis",
      name: "title",
    },
    {
      type: "boolean",
      label: "Zobrazit v mřížce",
      name: "gridView",
    },
    {
      type: "object",
      label: "Sloupce",
      name: "columns",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        {
          type: "string",
          label: "Nadpis",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "string",
          label: "Ikona",
          name: "icon",
          options: ["hand", "scout", "lile"],
        },
      ],
    },
  ],
};

const contactsBlock: Template = {
  name: "contacts",
  label: "Kontakty",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Nadpis",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Podnadpis",
      name: "text",
    },
  ],
};

const coverBlock: Template = {
  name: "cover",
  label: "Úvod",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Nadpis",
      name: "title",
    },
    {
      type: "string",
      label: "Podnadpis",
      name: "subtitle",
    },
    {
      type: "string",
      label: "Popis",
      name: "claim",
    },
    {
      type: "boolean",
      label: "Sněžení",
      name: "isSnowfall",
    },
    {
      type: "object",
      label: "Tlačítko",
      name: "button",
      fields: [
        {
          type: "string",
          label: "Popis",
          name: "label",
        },
        {
          type: "string",
          label: "Odkaz",
          name: "link",
        },
        {
          type: "boolean",
          label: "Otevřít v novém okně",
          name: "targetBlank",
        },
        {
          type: "boolean",
          label: "Zobrazit tlačítko",
          name: "showButton",
        },
      ],
    },
  ],
};

const galleryBlock: Template = {
  name: "gallery",
  label: "Galerie",
  fields: [
    ...globalBlockFields,
    {
      type: "image",
      label: "Fotka",
      name: "images",
      list: true,
    },
    {
      type: "object",
      label: "Tlačítko",
      name: "button",
      fields: [
        {
          type: "string",
          label: "Popis",
          name: "label",
        },
        {
          type: "string",
          label: "Odkaz",
          name: "link",
        },
        {
          type: "boolean",
          label: "Otevřít v novém okně",
          name: "targetBlank",
        },
        {
          type: "boolean",
          label: "Zobrazit tlačítko",
          name: "showButton",
        },
      ],
    },
  ],
};

const personsBlock: Template = {
  name: "persons",
  label: "Medailonky",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Nadpis",
      name: "title",
    },
    {
      type: "string",
      label: "Podnadpis",
      name: "subtitle",
    },
    {
      type: "object",
      label: "Medailonky",
      name: "persons",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.nickname }),
      },
      fields: [
        {
          type: "image",
          label: "Fotka",
          name: "image",
        },
        {
          type: "string",
          label: "Přezdívka",
          name: "nickname",
          required: true,
        },
        {
          type: "string",
          label: "Jméno",
          name: "name",
          required: true,
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text",
        },
        {
          type: "boolean",
          label: "Skrýt",
          name: "isHidden",
        },
      ],
    },
  ],
};

const quotationBlock: Template = {
  name: "quotation",
  label: "Citát",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Citát",
      name: "quotation",
    },
    {
      type: "string",
      label: "Zdroj",
      name: "source",
    },
    {
      type: "string",
      label: "Odkaz na zdroj",
      name: "sourceUrl",
    },
  ],
};

const richTextBlock: Template = {
  name: "richText",
  label: "Text",
  fields: [
    ...globalBlockFields,
    {
      type: "string",
      label: "Nadpis",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "richText",
    },
  ],
};

const testimonialsBlock: Template = {
  name: "testimonials",
  label: "Reference",
  fields: [
    ...globalBlockFields,
    {
      type: "object",
      label: "Reference",
      name: "testimonials",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.name }),
      },
      fields: [
        { type: "string", label: "Jméno", name: "name", required: true },
        { type: "string", label: "Text", name: "text", required: true },
      ],
    },
  ],
};

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD ||
    "main", // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Nastavení",
        format: "json",
        path: "settings",
        ui: {
          allowedActions: { delete: false, create: false },
        },
        fields: [{ name: "siteTitle", label: "Název webu", type: "string" }],
      },
      {
        name: "navigation",
        label: "Navigace",
        format: "json",
        path: "data",
        ui: {
          allowedActions: { delete: false, create: false },
        },
        fields: [
          {
            type: "object",
            name: "items",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.title }),
            },
            fields: [
              {
                name: "title",
                label: "Název",
                type: "string",
                required: true,
              },
              {
                name: "link",
                label: "Odkaz",
                type: "string",
                required: true,
              },
              {
                name: "isHidden",
                label: "Skrýt",
                type: "boolean",
              },
              {
                name: "isButton",
                label: "Tlačítko",
                type: "boolean",
              },
              {
                name: "showAlways",
                label: "Vždy zobrazit",
                type: "boolean",
              },
              {
                name: "showAfterScroll",
                label: "Zobrazit po odscrollování",
                type: "boolean",
              },
            ],
          },
        ],
      },
      {
        name: "page",
        label: "Obsah",
        path: "content/pages",
        format: "mdx",
        ui: {
          allowedActions: { delete: false, create: false },
        },
        fields: [
          {
            type: "string",
            label: "Název stránky",
            name: "title",
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Obsah",
            templates: [
              columnsBlock,
              contactsBlock,
              coverBlock,
              galleryBlock,
              personsBlock,
              quotationBlock,
              richTextBlock,
              testimonialsBlock,
            ],
          },
        ],
      },
    ],
  },
});

export default config;
