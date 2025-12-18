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
    background-color: #ff2f92;
    color:white;
}

.btn--secondary {
    background-color: #00a8a8;
    color:white;
}

.btn--ghost {
    background-color: transparent;
    color: #00a8a8;
}

/* button hover for desktop view */

@media (hover: hover) {
    .btn--primary:hover {
        background-color: #e02680;
    }
    .btn--secondary:hover {
        background-color: #008f8f;
    }
    .btn--ghost:hover {
        text-decoration: underline;
    }
}

</style>
