import { Story, Meta } from '@storybook/react/types-6-0'
import AppProfileCard from '.'

export default {
  title: 'AppProfileCard',
  component: AppProfileCard
} as Meta

export const Basic: Story = (args) => <AppProfileCard {...args} />
