/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import { HtmlClassNameProvider } from '@docusaurus/theme-common'
import { DocProvider } from '@docusaurus/theme-common/internal'
import DocItemMetadata from '@theme/DocItem/Metadata'
import DocItemLayout from '@theme/DocItem/Layout'
import type { Props } from '@theme/DocItem'

import GiscusComponent from '@site/src/components/GiscusComponent'
import useIsBrowser from '@docusaurus/useIsBrowser'

export default function DocItem(props: Props): JSX.Element {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`
  const MDXComponent = props.content
  const isBrowser = useIsBrowser()
  let isCurrentUrlBlog = false
  if (isBrowser) {
    isCurrentUrlBlog = window.location.pathname === '/docs'
  }
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
        {!isCurrentUrlBlog && (
          <GiscusComponent
            repo="tingminitime/timemo-giscus-doc"
            repoId="R_kgDOIolpeg"
            category="Announcements"
            categoryId="DIC_kwDOIolpes4CTH_i"
          ></GiscusComponent>
        )}
      </HtmlClassNameProvider>
    </DocProvider>
  )
}
