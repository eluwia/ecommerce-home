<template>
    <input
    class="input"
    :class="[
        'input--'+ variant,
        'input--'+ size,
        full ? 'input--full' : '',
    ]"
    />
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
.input {
    border: 1px solid var(--color-border);
    border-radius: 6px;
    padding: 10px;
    font-size: 16px;
    box-sizing: border-box;
}

.input--primary {
    background-color: var(--color-input-bg);
}   

.input--sm {
    padding: 8px 12px;
    font-size: 14px;
}

.input--md {
    padding: 12px 16px;
    font-size: 16px;
}

.input--lg {
    padding: 16px 20px;
    font-size: 18px;
}

.input--full {
    width: 100%;
}
</style>