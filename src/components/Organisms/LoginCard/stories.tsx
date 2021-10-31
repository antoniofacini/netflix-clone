import { Story, Meta } from '@storybook/react/types-6-0'
import LoginCard from '.'

export default {
  title: 'LoginCard',
  component: LoginCard
  //   args: {
  //     title: 'title default',
  //     description: 'description default'
  //   }
} as Meta

export const Basic: Story = () => <LoginCard />
