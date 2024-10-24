<template>
	<label class="check_container" :class="{ isDisabled }" :style="color && `--color: ${color}`">
		<svg v-if="isSelected" :width="22" :height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect :width="22" :height="22" rx="3" fill="#5247C0" />
			<path
				d="M4.8125 10.1063L9.83112 15.125L17.8749 6.875"
				stroke="white"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		<svg v-else :width="22" :height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#C6C6D6" />
		</svg>
		<input type="checkbox" :checked="isSelected" :disabled="isDisabled" @change="handleChangeCheckBox" hidden />
		<div :class="isBold && 'bold'">{{ label }}</div>
	</label>
</template>

<script setup lang="ts">
interface Props {
	label?: string;
	value?: any;
	isBold?: boolean;
	isDisabled?: boolean;
	isSelected?: boolean;
	color?: string;
}

const { label, isBold, isDisabled, isSelected } = defineProps<Props>();
const emit = defineEmits<{
	(e: 'update:value', checked: boolean): void;
}>();

const handleChangeCheckBox = (e: Event) => {
	const target = e.target as HTMLInputElement;
	const checked = target.checked;

	emit('update:value', checked);
};
</script>

<style lang="scss" scoped>
.check_container {
	height: 2.6rem;
	width: fit-content;

	display: flex;
	align-items: center;
	gap: var(--space-8);

	color: var(--color, --color-base-dark);
	font-size: var(--font-size-mid);
	font-weight: var(--font-w-regular);
	line-height: 1.9rem;

	& input[type='checkbox'] {
		position: absolute;
		left: -9999px;
		opacity: 0;
	}

	& div {
		&.bold {
			font-size: var(--font-size-regular);
			font-weight: var(--font-w-semi);
			line-height: 2rem;
		}
	}

	&.isDisabled {
		opacity: 0.5;
	}
}
</style>
