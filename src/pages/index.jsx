import React, { useEffect } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.scss'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={styles.banner}>
      <div className={styles['banner-container']}>
        <div>
          <h1 className={styles['banner-title']}>Tim's Dev Notes</h1>
          <p className={styles['banner-subtitle']}>{siteConfig.tagline}</p>
        </div>
        <Link
          className={styles['banner-button']}
          to="/docs/intro"
        >
          <span>前往筆記 </span>
          <span className="material-symbols-outlined">&#xe941;</span>
        </Link>

        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} 前端筆記`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main style={{ minHeight: '1000px' }}>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
