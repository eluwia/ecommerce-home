<template>
    <section class="featured">
        <div class="section-title">
            <span class="divider" aria-hidden="true"></span>
            <h2 class="title">Featured Products</h2>
            <span class="divider" aria-hidden="true"></span>
        </div>

        <div class="products-grid">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </section>
</template>

<script setup>

import ProductCard from '@/components/ProductCard.vue'
const products = [
    {
        id: 1,
        price: '44,95 TL',
        description: 'Herbal Science Boom Butter Hair Care Oil 190 ml',
        image: '/images/Product-1.svg',
    },
    {
        id: 2,
        price: '42,25 TL',
        description: 'Diadermine Lift + Serum Booster Vitamin C',
        image: '/images/Product-2.svg',
    },
    {
        id: 3,
        price: '29,45 TL',
        description: 'Ashley Joy Strengthening Shampoo 400 ml',
        image: '/images/Product-3.svg',
    },
    {
        id: 4,
        price: '28,95 TL',
        description: 'Herbal Extract Refreshing Shampoo 400 ml',
        image: '/images/Product-4.svg',
    },
]
</script>

<style scoped>
.featured {
    flex-direction: column;
    padding: 16px;
    display: flex;
    gap: 16px;
    margin: 0;
}

.section-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 32px;

    width: 100%;
    height: 24px;
}

.section-title .divider {
    flex-grow: 1;
    height: 1px;
    background: rgba(0, 153, 168, 0.1);
}

.section-title .title {
    margin: 0;
    height: 24px;

    display: flex;
    align-items: center;

    font-family: var(--font-roboto);
    font-style: medium;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: var(--secondary);
}


.products-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
</style>