import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    content: 'Entrar',
    color: '#e50914'
  }
} as Meta

export const Basic: Story = (args) => (
  <Button content={args.content} color={args.color} />
)
