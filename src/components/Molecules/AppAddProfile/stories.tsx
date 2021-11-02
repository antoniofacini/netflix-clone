import { Story, Meta } from '@storybook/react/types-6-0'
import AppAddProfile from '.'

export default {
  title: 'AppAddProfile',
  component: AppAddProfile
} as Meta

export const Basic: Story = (args) => <AppAddProfile {...args} />
