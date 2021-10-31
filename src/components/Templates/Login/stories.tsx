import { Story, Meta } from '@storybook/react/types-6-0'
import LoginTemplate from '.'

export default {
  title: 'LoginTemplate',
  component: LoginTemplate,
  args: {
    background: '/background.jpg'
  }
} as Meta

export const Basic: Story = (args) => <LoginTemplate {...args} />
