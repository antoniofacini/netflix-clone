import { Story, Meta } from '@storybook/react/types-6-0'
import LoginHeader from '.'

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
  title: 'LoginHeader',
  component: LoginHeader,
  args: {
    background:
      'linear-gradient(to bottom,rgba(0, 0, 0, 0.5) 0,rgba(0, 0, 0, 0) 100%)',
    src: '/netflix-logo.svg',
    alt: 'Netflix Logo',
    headerHeight: '90px',
    imageHeight: '45px',
    imageWidth: '160px',
    imageMargin: '0 0 0 3%'
  }
} as Meta

export const Basic: Story<Props> = (args) => <LoginHeader {...args} />
