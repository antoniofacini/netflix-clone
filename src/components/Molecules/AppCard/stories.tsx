import { Story, Meta } from '@storybook/react/types-6-0'
import AppCard from '.'
interface AppCardProps {
  cover: string
  genders: Array<string>
  relevance: string
  duration: string
}
export default {
  title: 'AppCard',
  component: AppCard,
  args: {
    cover: 'black-panther.jpg',
    genders: ['Action', 'Horror'],
    relevance: '94',
    duration: '1h 35min'
  }
} as Meta

export const Basic: Story<AppCardProps> = (args) => <AppCard {...args} />
