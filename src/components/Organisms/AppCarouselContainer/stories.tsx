import { Story, Meta } from '@storybook/react/types-6-0'
import AppCarouselContainer from '.'

export default {
  title: 'AppCarouselContainer',
  component: AppCarouselContainer
  //   args: {
  //     title: 'title default',
  //     description: 'description default'
  //   }
} as Meta

export const Basic: Story = () => <AppCarouselContainer />
