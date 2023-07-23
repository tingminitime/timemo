import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import { usePopper } from 'react-popper'

import styles from './index.module.scss'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={styles.banner}>
      <div className={styles['banner-container']}>
        <div>
          <h1 className={styles['banner-title']}>My Dev Notes</h1>
          <p className={styles['banner-subtitle']}>{siteConfig.tagline}</p>
        </div>
        <Link
          className={styles['banner-button']}
          to="/docs/intro"
        >
          <span>前往筆記</span>
          <div className={styles['icon-arrow']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} 前端筆記`}
      description="Tim's Dev Notes，記錄在前端學習路上的足跡。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
