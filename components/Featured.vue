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
    <section class="newsletter">
        <div class="newsletter-content">
            <h2 class="newsletter-title">Sign up to our newsletter</h2>
            <p class="newsletter-description">Be the first to hear about the latest offers.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button class="newsletter-button" variant="primary" type="submit">SUBSCRIBE</button>
            </form>
        </div>
    </section>
</template>


<script setup>
    import ProductCard from '@/components/ProductCard.vue'
    
    const getUnit = (p) => {
      const text = `${p.title} ${p.description} ${p.category}`.toLowerCase()
    
      if (
        text.includes('mascara') ||
        text.includes('serum') ||
        text.includes('lotion') ||
        text.includes('oil')
          ) return 'ml'
    
      return 'g'
    }
    
    const [{ data: beautyData }, { data: skinCareData }] = await Promise.all([
      useFetch('https://dummyjson.com/products/category/beauty'),
      useFetch('https://dummyjson.com/products/category/skin-care'),
    ])
    
    const products = computed(() => {
      const beauty = beautyData.value?.products ?? []
      const skin = skinCareData.value?.products ?? []
      const list = [...beauty, ...skin]
    
      return list.slice(0, 4).map((p) => ({
        id: p.id,
        price: `${p.price} TL`,
        brand: p.brand,
        title: p.title,
        weight: p.weight ? `${p.weight} ${getUnit(p)}` : null,
        image: p.thumbnail,
      }))
    })
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

.newsletter {
    width: 100%;
    height: 144px;
    background: #f2f0ff;
    padding: 16px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
}
.newsletter-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}
.newsletter-title {
    margin: 0;
    font-family: var(--font-roboto);
    font-weight: 700;
    font-size: 20px;
    color: #2A2A48;
    line-height: 24px;
}
.newsletter-description {
    margin: 0;
    font-family: var(--font-roboto);
    font-weight: 700;
    font-size: 20px;
    color: #2a2a48;
    line-height: 20px;
}
.newsletter-description {
    margin: 0;
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 14px;
    color: rgba(42, 42, 72, 0.6);
    line-height: 16px;
}
.newsletter-form {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 16px;
}
.newsletter-form input[type="email"] {
    flex: 1;
    height: 48px;
    box-sizing: border-box;
    padding: 0 16px;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 4px;
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 16px;
    color: rgba(42, 42, 72, 0.6);
    line-height: 24px;
    outline: none;
}
.newsletter-form input[type="email"]::placeholder {
  color: rgba(42, 42, 72, 0.6);
}

.newsletter-button {
width: 107px;
height: 48px;
padding: 0 16px;
border:0;
border-radius: 4px;
background: #ff27ad;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-family: var(--font-roboto);
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
color: #fff;
}
</style>