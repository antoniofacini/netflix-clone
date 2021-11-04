import { Story, Meta } from '@storybook/react/types-6-0'
import AppProfileCard from '.'

export interface CurrentUser {
  profile: {
    id: number
    name: string
  }
}
export default {
  title: 'AppProfileCard',
  component: AppProfileCard
} as Meta

export const Basic: Story<CurrentUser> = (args) => <AppProfileCard {...args} />
