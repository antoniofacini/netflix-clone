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
  component: AppCard
} as Meta

export const Basic: Story<AppCardProps> = (args) => <AppCard {...args} />
