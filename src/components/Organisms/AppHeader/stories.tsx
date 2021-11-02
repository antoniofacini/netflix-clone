import { Story, Meta } from '@storybook/react/types-6-0'
import AppHeader from '.'

export interface Props {
  background: string
  height: string
  imageMargin: string
  src: string
  alt: string
  headerHeight: string
  imageHeight: string
  imageWidth: string
}

export default {
  title: 'AppHeader',
  component: AppHeader,
  args: {
    background:
      'linear-gradient(to bottom,rgba(0, 0, 0, 0.5) 0,rgba(0, 0, 0, 0) 100%)',
    src: '/netflix-logo.svg',
    alt: 'Netflix Logo',
    headerHeight: '68px',
    imageHeight: '31px',
    imageWidth: '95px',
    imageMargin: '0 0 0 3%'
  }
} as Meta

export const Basic: Story<Props> = (args) => <AppHeader {...args} />
