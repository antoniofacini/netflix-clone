import { Story, Meta } from '@storybook/react/types-6-0'
import Input from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    label: 'Email ou número de telefone',
    type: 'text'
  }
} as Meta

export const Basic: Story = (args) => <Input {...args} />
