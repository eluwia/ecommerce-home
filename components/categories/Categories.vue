<template>
    <section class="categories">
        <div class="categories-title">
            <span class="divider" aria-hidden="true"></span>
            <h2 class="title">Featured categories</h2>
            <span class="divider" aria-hidden="true"></span>
        </div>
        <div class="categories-content">
            <CategoriesCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </section>
</template>

<script setup>
import CategoriesCard from '@/components/categories/CategoriesCard.vue'

const categories = [
  {
    id: 'personal',
    title: 'Personal Care',
    description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
    image: '/images/Personal-Care.jpg',
  },
  {
    id: 'skincare',
    title: 'Skin Care',
    description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
    image: '/images/Skincare.jpg',
  },
  {
    id: 'makeup',
    title: 'Make - Up',
    description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
    image: '/images/Makeup.jpg',
  },
  {
    id: 'motherbaby',
    title: 'Mother & Baby',
    description: 'Lorem ipsum dolor sit amet consectetur elit aliquam',
    image: '/images/Mother-Baby.jpg',
  },
]


</script>
<style scoped>
.categories {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
}

.categories-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.categories-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
    height: 24px;
}
.categories-title .divider {
    flex-grow: 1;
    height: 1px;
    background: rgba(0, 153, 168, 0.1);
}
.categories-title .title {
    margin: 0;
    display: flex;
    font-family: var(--font-roboto);
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--secondary);
}

@media (min-width: 1024px) {
  .categories {
    padding: 40px 0px;
    max-width: 760px;
    margin: 0 auto;
    gap: 40px;
  }

  .categories-title {
    height: 32px;
  }

  .categories-title .title {
    font-size: 24px;
    line-height: 32px;
  }

  .categories-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}
</style>