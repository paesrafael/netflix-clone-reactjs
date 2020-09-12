import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

export default function MovieListCard({ title, movies, slug }) {
  const [sliderScrollX, setSliderScrollX] = useState(0)
  const [imageSize, setImageSie] = useState('w300')

  useEffect(() => {
    function imageSizeLoad() {
      if (slug === 'originals') {
        setImageSie('w500')
      }
    }

    imageSizeLoad()
  }, [])

  function handlePrev() {
    let scrollX = sliderScrollX + Math.round(window.innerWidth / 2)

    if (scrollX > 0) {
      scrollX = 0
    }

    setSliderScrollX(scrollX)
  }

  function handleNext() {
    let scrollX = sliderScrollX - Math.round(window.innerWidth / 2)
    let listItems = movies.results.length * 339

    if (window.innerWidth - listItems > scrollX) {
      scrollX = window.innerWidth - listItems
    }

    setSliderScrollX(scrollX)
  }

  return (
    <>
      <h2 className="movie-list-header">
        <a className="movie-list-title" href="//localhost">
          <div className="movie-list-header-title">{title}</div>

          <div className="arrow-row-header">
            <div className="see-all-link">Ver tudo</div>
            <FontAwesomeIcon icon={faAngleRight} className="arrow-row-icon" />
          </div>
        </a>
      </h2>

      <div
        className={`movie-row-container movie-row-container-card ${slug}-row-panels`}
      >
        <div className="movie-row-content slider-hover-trigger-layer">
          <div className="slider">
            {!!sliderScrollX && (
              <span className="handle handle-prev active" onClick={handlePrev}>
                <b className="indicator-icon">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </b>
              </span>
            )}

            <div className="slider-mask show-peek">
              <div
                className="slider-content row-with-x-columns"
                style={{
                  marginLeft: sliderScrollX,
                  width: movies.results.length * 100,
                }}
              >
                {movies.results.map((item) => (
                  <div
                    className={`slider-item slider-item-${item.id}`}
                    key={item.id}
                  >
                    <div className="title-card-container">
                      <div className="title-card">
                        <div className="content">
                          <a href="#">
                            <div
                              className={`box-size-${
                                slug === 'originals' ? '1x2' : '16x9'
                              } box-container box-rounded`}
                            >
                              <img
                                src={`${process.env.REACT_APP_URL_BASE}/${imageSize}${item.poster_path}`}
                                alt={item.name}
                                className="box-image box-image-in-padded-container"
                              />
                              <div className="fallback-text-container">
                                <p className="fallback-text">{item.name}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <span className="handle handle-next active" onClick={handleNext}>
              <b className="indicator-icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </b>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
