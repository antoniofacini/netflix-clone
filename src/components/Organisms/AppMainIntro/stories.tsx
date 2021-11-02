import { Story, Meta } from '@storybook/react/types-6-0'
import AppMainIntro from '.'

export default {
  title: 'AppMainIntro',
  component: AppMainIntro
  //   args: {
  //     title: 'title default',
  //     description: 'description default'
  //   }
} as Meta

export const Basic: Story = () => <AppMainIntro />
