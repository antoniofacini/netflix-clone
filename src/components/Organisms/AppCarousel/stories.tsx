import { Story, Meta } from '@storybook/react/types-6-0'
import AppCarousel from '.'

export interface Carousel {
  title: string
}

export default {
  title: 'AppCarousel',
  component: AppCarousel,
  args: {
    title: 'Filmes'
  }
} as Meta

export const Basic: Story<Carousel> = (args) => <AppCarousel {...args} />
