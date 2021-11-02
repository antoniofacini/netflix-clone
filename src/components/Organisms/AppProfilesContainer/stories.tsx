import { Story, Meta } from '@storybook/react/types-6-0'
import AppProfilesContainer from '.'

export default {
  title: 'AppProfilesContainer',
  component: AppProfilesContainer
} as Meta

export const Basic: Story = (args) => <AppProfilesContainer {...args} />
