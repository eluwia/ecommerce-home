<template>
  <article class="categories-card" :style="bgStyle">
    <div class="categories-card-body">
        <h3 class="categories-card-title">{{ category.title }}</h3>
        <p class="categories-card-description">{{ category.description }}</p>
        <Button class="categories-card-button">
            BROWSE
        </Button>
    </div>
  </article>
</template>

<script setup>
import Button from '@/ui/Button.vue'

const props = defineProps({
    category: {
        type: Object,
        required: true,
    },
})

const bgStyle = computed(() => ({
    backgroundImage: `url(${props.category.image})`,   
}))

</script>

<style scoped>
.categories-card {
    box-sizing: border-box;
    width: 343px;
    height: 232px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid rgba(236,236,236,0.5);
    border-radius: 6px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04);
}
.categories-card-body {
    width:263px;
    height:152px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 6px;
    text-align: center;
}
.categories-card-title {
    margin: 0;
    font-weight: 700;
    font-family: var(--font-roboto);
    font-size: 20px;
    line-height: 24px;
    color: var(--text);
}
.categories-card-description {
    margin: 0;
    font-weight: 400;
    font-family: var(--font-roboto);
    font-size: 14px;
    line-height: 24px;
    color: var(--muted);
}
.categories-card-button {
   width: 89px;
   height: 32px;
   border: 0;
   border-radius: 4px;
   background: var(--secondary);
   cursor: pointer;

   font-family: var(--font-roboto);
   font-weight: 700;
   font-size: 14px;
   line-height: 16px;
   text-transform: uppercase;
   color: #fff;
}

</style>