import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function GiscusComponent() {
  const { colorMode } = useColorMode()

  return (
    <Giscus
      repo="tingminitime/timemo-giscus-blog"
      repoId="R_kgDOIolnrQ"
      category="Announcements"
      categoryId="DIC_kwDOIolnrc4CTH_u" // E.g. id of "General"
      mapping="url" // Important! To map comments to URL
      term="Welcome to giscus!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh_TW"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  )
}
