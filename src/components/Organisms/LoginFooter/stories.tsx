import { Story, Meta } from '@storybook/react/types-6-0'
import LoginFooter from '.'

export default {
  title: 'LoginFooter',
  component: LoginFooter,
  args: {}
} as Meta

export const Basic: Story = (args) => <LoginFooter {...args} />
