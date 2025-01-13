import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
      

      <div className="section-center featured-center">
        {tours.map((t) => {
          return (
            <article className="tour-card">
            <div className="tour-img-container">
            <img src={t.image} className="tour-img" alt="" />
            <p className="tour-date">{t.date}</p>
            </div>
            <div className="tour-info">
            <div className="tour-title">
              <h4>{t.title}</h4>
            </div>
            <p>
              {t.info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {t.location}
              </p>
              <p>{t.duration}</p>
              <p>{t.location2}</p>
            </div>
            </div>
            </article>
          )
        })}


      </div>
    </section>
  )
}

export default Tour