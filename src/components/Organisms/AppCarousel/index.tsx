import { useState } from 'react'
import * as S from './styles'
import AppCard from '../../Molecules/AppCard'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { MouseEventHandler } from 'react-transition-group/node_modules/@types/react'
import { MovieList } from '../../../lib/utils/movies-asset'

const AppCarousel = (props: { title: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    spacing: 10,
    slidesPerView: 2,
    centered: false,
    loop: true,
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 4
      },
      '(min-width: 1200px)': {
        slidesPerView: 5
      }
    }
  })
  return (
    <S.CssContext>
      <div className="navigation-wrapper">
        {slider && (
          <div className="dots">
            <S.Title>{props.title}</S.Title>
            <div>
              {[...Array(slider.details().size).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx)
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  />
                )
              })}
            </div>
          </div>
        )}
        <S.Div ref={sliderRef} className="keen-slider">
          {MovieList.map(
            ({ cover, genders, duration, relevance }, key: number) => {
              return (
                <S.Slide className="keen-slider__slide " key={key}>
                  <AppCard
                    cover={cover}
                    genders={genders}
                    duration={duration}
                    relevance={relevance}
                  />
                </S.Slide>
              )
            }
          )}
        </S.Div>
        {slider && (
          <>
            <ArrowRight onClick={() => slider.next()} />
            <ArrowLeft onClick={() => slider.prev()} />
          </>
        )}
      </div>
    </S.CssContext>
  )
}

export default AppCarousel

function ArrowLeft(props: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props: { onClick: MouseEventHandler }) {
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}
