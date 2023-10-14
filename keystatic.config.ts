// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    category: collection({
      label: "Category",
      slugField: "title",
      path: "src/content/category/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        avatar: fields.image({
          label: "Category Image",
          description: "Select image for category ",
          // This will output the images in the "public" directory
          directory: "public/assets/category/desktop/",
          publicPath: "/assets/category/desktop/",
        }),
      },
    }),
    headphones: collection({
      label: "Headphones",
      slugField: "title",
      path: "src/content/headphones/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        img: fields.image({
          label: "Headphone Product Image",
          description: "Select image for product ",
          // This will output the images in the "public" directory
          directory: "public/assets/headphones/desktop/",
          publicPath: "/assets/headphones/desktop/",
        }),
        newProduct: fields.checkbox({
          label: "New Product",
          description: "Select for this is a new Product",
        }),
        details: fields.text({
          label: "Information",
          multiline: true,
        }),
      },
    }),
    speakers: collection({
      label: "Speakers",
      slugField: "title",
      path: "src/content/speakers/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        img: fields.image({
          label: "speakers Product Image",
          description: "Select image for product ",
          // This will output the images in the "public" directory
          directory: "public/assets/speakers/desktop/",
          publicPath: "/assets/speakers/desktop/",
        }),
        newProduct: fields.checkbox({
          label: "New Product",
          description: "Select for this is a new Product",
        }),
        details: fields.text({
          label: "Information",
          multiline: true,
        }),
      },
    }),
    earphones: collection({
      label: "Earphones",
      slugField: "title",
      path: "src/content/earphones/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        img: fields.image({
          label: "earphones Product Image",
          description: "Select image for product ",
          // This will output the images in the "public" directory
          directory: "public/assets/earphones/desktop/",
          publicPath: "/assets/earphones/desktop/",
        }),
        newProduct: fields.checkbox({
          label: "New Product",
          description: "Select for this is a new Product",
        }),
        details: fields.text({
          label: "Information",
          multiline: true,
        }),
      },
    }),
  },
});
