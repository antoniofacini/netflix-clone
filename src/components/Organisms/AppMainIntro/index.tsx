import { useState, useEffect } from 'react'
import * as S from './styles'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

const AppMainIntro = (props: any) => {
  const [pausedByButton, setPausedByButton] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    scrollPosition > 300 && setPlaying(false)
    pausedByButton == false && scrollPosition < 100 && setPlaying(true)
  }, [scrollPosition])

  return (
    <S.VideoWrapper>
      <ReactPlayer
        playing={playing}
        muted={muted}
        url="videos/deadpool.mp4"
        width="100%"
        height="150%"
      />
      <S.ButtonsContainer>
        {playing ? (
          <PauseIcon onClick={() => {
              setPlaying(!playing) 
              setPausedByButton(true)}} />
        ) : (
          <PlayArrowIcon onClick={() => {
              setPlaying(!playing)
              setPausedByButton(false)
            }} />
        )}
        {muted ? (
          <VolumeOffIcon onClick={() => setMuted(!muted)} />
        ) : (
          <VolumeUpIcon onClick={() => setMuted(!muted)} />
        )}
      </S.ButtonsContainer>
    </S.VideoWrapper>
  )
}

export default AppMainIntro
