import React from "react";
import { client } from "../../tina/__generated__/client";
import dynamic from "next/dynamic";

export default async function Page({ params: { slug } }) {
  const { data } = await client.queries.page({
    relativePath: `${slug}.mdx`,
  });

  // const { data } = useTina({
  //   query: result.query,
  //   variables: result.variables,
  //   data: result.data,
  // });

  return data.page.blocks.map((block, i) => {
    const Component = dynamic(() => import(`../../blocks/${block.__typename}`));
    return React.createElement(Component, { ...block, key: i });
  });
}

// const Main = styled.main`
//   min-height: 300vh;
//   padding-top: 3.2em;
// `;
