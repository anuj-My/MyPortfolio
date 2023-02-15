export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "site",
      type: "string",
      title: "Site",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Badges",
      name: "badges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "imgUrl",
      type: "image",
      title: "Image URL",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                    be they blind, color-blind, low-sighted; 
                    alternative text is of great help for those 
                    people that can rely on it to have a good idea of 
                    what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
