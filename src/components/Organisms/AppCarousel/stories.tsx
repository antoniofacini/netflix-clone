import { Story, Meta } from '@storybook/react/types-6-0'
import AppCarousel from '.'

export default {
  title: 'AppCarousel',
  component: AppCarousel
  //   args: {
  //     title: 'title default',
  //     description: 'description default'
  //   }
} as Meta

export const Basic: Story = () => <AppCarousel />
