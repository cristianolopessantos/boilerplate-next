import type { Meta, StoryObj } from '@storybook/react'

import Main from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Main> = {
  title: 'Example/Main',
  component: Main,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Main>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Cris',
    description: 'Button'
  }
}
