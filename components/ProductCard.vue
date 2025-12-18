<template>
    <article class="product-card">
        <div class="product-card-image">
                <img :src="product.image" :alt="product.title"/>
    </div>
    <div class="product-card-body">
        <p class="product-card-price">
            {{ product.price }}
        </p>
        <p class="product-card-description">
            {{ product.description }}
        </p>
    </div>
    <div class="product-card-actions">
        <span class="divider" aria-hidden="true"></span>
        <div class="actions-wrapper">
            <Button variant="primary" class="add-btn">
                <span class="btn-content">
                    <img class="btn-icon" src="/icons/addBasket.svg" alt="cart"/>
                    <span class="btn-text">ADD</span>
                </span>
            </Button>
        </div>
    </div>
    </article>
    
</template>

<script setup>
import Button from '@/ui/Button.vue'

defineProps({
    product: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  height: 399.33px;

  border: 1px solid var(--smoke);
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04);
}

.product-card-image {
  height: 207.33px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card-image img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
}

.product-card-body {
    height: 128px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-card-price {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: var(--text);
}

.add-btn-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: var(--text);
}


.product-card-description {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--muted);
}

.product-card-actions .divider {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--smoke);
  flex-shrink: 0;
}


.actions-wrapper {
  width: 100%;
  height: 64px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card-actions {
  display: flex;
  flex-direction: column;
}
.add-btn {
  width: 131.5px;
  height: 32px;
  border-radius: 4px;
}
.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-icon {
  width: 16px;
  height: 16px;
  display: block;
}

.product-card-image {
  background: rgba(236, 236, 236, 0.16);
}


</style>