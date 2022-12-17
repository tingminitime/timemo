import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

const features = [
  {
    img: '',
    title: '',
    description: '',
  },
  {
    img: '',
    title: '',
    description: '',
  },
  {
    img: '',
    title: '',
    description: '',
  },
  {
    img: '',
    title: '',
    description: '',
  },
  {
    img: '',
    title: '',
    description: '',
  },
  {
    img: '',
    title: '',
    description: '',
  },
]

export default function HomepageFeatures() {
  const cardContainerRef = useRef(null)
  const cardRefs = useRef([])

  function onCardContainerMousemove(e) {
    for (const card of cardRefs.current) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  useEffect(() => {
    cardContainerRef.current.addEventListener(
      'mousemove',
      onCardContainerMousemove
    )

    return () => {
      if (cardContainerRef.current) {
        cardContainerRef.current.removeEventListener(
          'mousemove',
          onCardContainerMousemove
        )
      }
    }
  }, [])

  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.container)}>
        <h2>內容待更新...</h2>
        <div
          className={styles['card-container']}
          ref={cardContainerRef}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
              ref={el => (cardRefs.current[index] = el)}
            >
              <div className={styles['card-content']}>
                <h2>{feature.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
