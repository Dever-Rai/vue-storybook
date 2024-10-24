import type { Meta, StoryObj } from '@storybook/vue3';

import CheckBox from './CheckBox.vue';

const meta = {
	title: 'Component/CheckBox',
	component: CheckBox,
	tags: ['autodocs'],
	argTypes: {
		isDisabled: {
			description: '버튼의 disabled',
		},
		isBold: {
			description: '버튼의 xl 사이즈에 icon이 있을 경우',
		},
		isSelected: {
			description: '버튼의 xl 사이즈에 icon이 있을 경우',
		},
	},
	args: {
		value: false,
	},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: '체크박스 라벨',
	},
	render: (args) => ({
		components: { CheckBox },
		setup() {
			return { args };
		},
		template: `
			<CheckBox v-bind="args" is-selected="true">{{args.default}}</CheckBox>
			<CheckBox v-bind="args" >{{args.default}}</CheckBox>
			<CheckBox v-bind="args" label="" is-selected="true">{{args.default}}</CheckBox>
			<CheckBox v-bind="args" label="">{{args.default}}</CheckBox>
		`,
	}),
};
