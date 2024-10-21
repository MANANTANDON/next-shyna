import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// export const fetchInfo = () => {
//   return notion.databases.query({
//     database_id: process.env.NOTION_DB_ID!,
//     filter: {
//       property: "info",
//       status: {
//         equals: "True",
//       },
//     },
//   });
// };

export const fetchPages = () => {
  return notion.databases.query({
    database_id: process.env.NOTION_DB_ID!,
    filter: {
      property: "status",
      status: {
        equals: "Published",
      },
    },
  });
};

export const fetchAllArticles = (startCursor, size) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DB_ID!,
    filter: {
      property: "status",
      status: {
        equals: "Published",
      },
    },
    start_cursor: startCursor,
    page_size: size,
  });
};

export const fetchBySlug = async (slug: string) => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID!,
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return res.results[0] as PageObjectResponse | undefined;
};

export const fetchPageBlocks = async (pageId: string) => {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });
  return res.results as BlockObjectResponse[];
};
