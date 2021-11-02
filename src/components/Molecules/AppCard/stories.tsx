import { Story, Meta } from '@storybook/react/types-6-0'
import AppCard from '.'

export default {
  title: 'AppCard',
  component: AppCard
} as Meta

export const Basic: Story = (args) => <AppCard {...args} />
