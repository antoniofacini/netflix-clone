import { Story, Meta } from '@storybook/react/types-6-0'
import LoginFooter from '.'

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
  title: 'LoginFooter',
  component: LoginFooter,
  args: {}
} as Meta

export const Basic: Story<Props> = (args) => <LoginFooter {...args} />
