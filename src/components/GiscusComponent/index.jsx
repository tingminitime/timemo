import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function GiscusComponent({
  repo,
  repoId,
  category,
  categoryId,
}) {
  const { colorMode } = useColorMode()

  return (
    <div style={{ paddingTop: '3rem' }}>
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId} // E.g. id of "General"
        mapping="url" // Important! To map comments to URL
        term="Welcome to giscus!"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="zh-TW"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    </div>
  )
}
