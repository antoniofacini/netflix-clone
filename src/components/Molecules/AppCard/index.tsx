import * as S from './styles'
import Image from 'next/image'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import HdRoundedIcon from '@material-ui/icons/HdRounded'

interface AppCardProps {
  cover: string
  genders: Array<string>
  relevance: string
  duration: string
}

const AppCard = (props: AppCardProps) => {
  return (
    <S.AppCardContainer>
      <Image
        src={`/covers/${props.cover}`}
        layout="responsive"
        width="16vw"
        height="9vw"
      />
      <S.Content className="content">
        <S.ContentButtons>
          <div style={{ display: 'flex', height: '30px' }}>
            <PlayCircleFilledWhiteIcon className="iconClass" />
            <AddCircleOutlineIcon className="iconClass" />
            <S.Circle>
              <ThumbUpRoundedIcon className="roundedIconClass" />
            </S.Circle>
            <S.Circle>
              <ThumbDownRoundedIcon className="roundedIconClass" />
            </S.Circle>
          </div>
          <S.ExpandMore>
            <ExpandMoreRoundedIcon className="iconClass" />
          </S.ExpandMore>
        </S.ContentButtons>
        <S.ContentText>
          <S.Relevance>{props.relevance} relevante</S.Relevance>
          <S.Age>16</S.Age>
          <S.Duration>{props.duration} </S.Duration>
          <HdRoundedIcon className="iconClass" />
        </S.ContentText>
        <S.Genders />
        {props.genders.map((gender, key: number) => (
          <S.Gender key={key}>{gender}</S.Gender>
        ))}
      </S.Content>
    </S.AppCardContainer>
  )
}
export default AppCard
