import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@project-name-ui/next'

export default {
   title: 'Button',
   component: Button,
   args: {
      children: 'Example'
   }
} as Meta

export const Primary: StoryObj = {
}