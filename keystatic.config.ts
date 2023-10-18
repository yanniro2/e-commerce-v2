// keystatic.config.ts
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: "json",
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
      path: "src/category/*",
      format: "json",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        Desktop: fields.image({
          label: "Desktop Image",
          description: "Select image for category",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/",
          publicPath: "/desktop/category/",
        }),
      },
    }),
    headphones: collection({
      label: "Headphones",
      slugField: "title",
      path: "src/content/headphones/*",
      format: "json",
      schema: {
        name: fields.text({ label: "Name" }),
        title: fields.slug({ name: { label: "Title" } }),
        product: fields.image({
          label: "Desktop  Product Image",
          description: "Select image for Gallery ",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/headphones/product",
          publicPath: "/desktop/category/headphones/product",
        }),
        max: fields.image({
          label: "Desktop Max Gallery Image",
          description: "Select image for Gallery ",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/headphones/product",
          publicPath: "/desktop/category/headphones/product",
        }),
        min_1: fields.image({
          label: "Desktop Min Gallery Image",
          description: "Select image for Gallery ",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/headphones/product",
          publicPath: "/desktop/category/headphones/product",
        }),
        min_2: fields.image({
          label: "Desktop Min Gallery Image",
          description: "Select image for Gallery ",
          // This will output the images in the "public" directory
          directory: "public/desktop/category/headphones/product",
          publicPath: "/desktop/category/headphones/product",
        }),

        newProduct: fields.checkbox({
          label: "New Product",
          description: "Select for this is a new Product",
        }),
        description: fields.text({
          label: "Product Description",
          multiline: true,
        }),
        price: fields.text({
          label: "Price",
        }),
        quantity: fields.integer({
          label: "Quantity",
        }),
        features: fields.text({
          label: "fetures",
          multiline: true,
        }),
        inthebox: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            quantity: fields.integer({ label: "Quantity" }),
          }),
          {
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        // Image Max , Min 1, 2
      },
    }),
    speakers: collection({
      label: "Speakers",
      slugField: "title",
      path: "src/content/speakers/*",
      format: "json",
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
      format: "json",
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
  singletons: {
    openSource: singleton({
      label: "Open Source",
      path: "src/data/open-source",
      format: "json",
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            description: fields.text({ label: "Description", multiline: true }),
            githubUser: fields.text({ label: "GithHub User" }),
            githubRepo: fields.text({ label: "Github Repo" }),
            status: fields.select({
              label: "Status",
              options: [
                { label: "Active", value: "Active" },
                { label: "Community", value: "Community Maintained" },
                { label: "Experimental", value: "Experimental" },
              ],
              defaultValue: "Active",
            }),
            links: fields.array(
              fields.object({
                name: fields.text({ label: "Name" }),
                url: fields.url({ label: "URL" }),
              }),
              {
                label: "Links",
                itemLabel: (props) => props.fields.name.value,
              }
            ),
          }),
          { itemLabel: (props) => props.fields.name.value }
        ),
      },
    }),
  },
});
