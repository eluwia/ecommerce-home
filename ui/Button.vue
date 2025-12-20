<template>
    <button
    class="btn"
    :class="[
        'btn--'+ variant,
        'btn--'+ size,
        full ? 'btn--full' : '',
    ]"
    >
        <slot />
    </button>
</template>

<script setup>
    defineProps({
        variant: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'md',
        },
        full: {
            type: Boolean,
            default: false,
        },
    });
</script>

<style scoped>

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
}

.btn--full{
    width: 100%;
}

.btn--sm {
    padding: 8px 12px;
    font-size: 14px;
}

.btn--md {
    padding: 12px 16px;
    font-size: 16px;
}

.btn--lg {
    padding: 16px 20px;
    font-size: 18px;
}

.btn--primary {
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
}

.btn--secondary {
    background-color: var(--color-secondary);
    color: var(--color-text-inverse);
}

.btn--ghost {
    background-color: transparent;
    color: var(--color-secondary);
}

/* button hover for desktop view */

@media (hover: hover) {
    .btn--primary:hover {
        background-color: var(--color-primary-hover);
    }
    .btn--secondary:hover {
        background-color: var(--color-secondary-hover);
    }
    .btn--ghost:hover {
        text-decoration: underline;
    }
}

</style>
