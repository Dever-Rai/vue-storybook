import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

// export const Icon: Story = {
// 	args: { size: 'xl' },
// 	render: (args) => ({
// 		components: { Button },
// 		setup() {
// 			return { args };
// 		},
// 		template: `
// 			<CommonButton v-bind="args">
// 				{{args.default}}

// 			</CommonButton>
// 		`,
// 	}),
// };
