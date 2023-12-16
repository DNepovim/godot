import React from "react";
import { client } from "../tina/__generated__/client";
import dynamic from "next/dynamic";

export default async function Page({ params: { slug } }) {
  const data = await client.queries.page({
    relativePath: `index.mdx`,
  });

  // const { data } = useTina({
  //   query: result.query,
  //   variables: result.variables,
  //   data: result.data,
  // });

  return data.data.page.blocks.map((block, i) => {
    const Component = dynamic(() => import(`../blocks/${block.__typename}`));
    return React.createElement(Component, { ...block, key: i });
  });
}
