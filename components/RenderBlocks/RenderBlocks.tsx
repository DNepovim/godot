import React from "react"
import { blockDefs, BlocksDefs } from "../../blocks/blocks"
import { BlockTemplates } from "../../blocks/blockTemplates"

export const RenderBlocks: React.FC<{ blocks: BlocksDefs[] }> = ({
  blocks,
}) => (
  <>
    {blocks
      .filter((block) => !!block)
      .map(({ template, fields }, i) =>
        React.createElement(blockDefs[template as BlockTemplates].component, {
          ...fields,
          key: i,
        })
      )}
  </>
)
