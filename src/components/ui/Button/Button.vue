<template>
	<button v-bind="prop" @click="onClick">
		<span class="left_icon">
			<slot name="left_icon" />
		</span>
		<slot>버튼</slot>
		<span class="right_icon">
			<slot name="right_icon" />
		</span>
	</button>
</template>

<script setup lang="ts">
interface Props {
	/**
	 * 버튼의 type
	 */
	type?: 'submit' | 'reset' | 'button';
	/**
	 * 버튼 disabled
	 */
	disabled?: boolean;
}

const prop = withDefaults(defineProps<Props>(), {
	type: 'button',
	disabled: false,
});
const emit = defineEmits<{
	/**
	 * 버튼 @click event
	 */
	(e: 'click'): void;
}>();

const onClick = () => {
	emit('click');
};
defineSlots<{
	/**
	 * 버튼 slot 문자
	 */
	default(props: {}): any;
	/**
	 * 버튼의 left icon
	 *
	 * \<template #left_icon>\</template>
	 */
	left_icon(props: {}): any;
	/**
	 * 버튼의 right icon
	 *
	 * \<template #right_icon>\</template>
	 */
	right_icon(props: {}): any;
}>();
</script>

<style lang="scss" scoped>
button {
	cursor: pointer;

	min-width: var(--space-72, 7.2rem);
	height: 5.2rem;

	padding: 0 var(--space-16, 1.6rem);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: var(--font-size-regular, 1.7rem);
	line-height: 2.1rem;
	white-space: nowrap;

	background-color: var(--color-base-white, #fff);
	border-radius: var(--space-4, 0.4rem);

	&:disabled {
		cursor: not-allowed;
	}

	.left_icon {
		margin-left: -0.4rem;
		margin-right: var(--space-4, 0.4rem);

		display: flex;
	}
	.right_icon {
		margin-right: -0.4rem;
		margin-left: var(--space-4, 0.4rem);

		display: flex;
	}
}
</style>
