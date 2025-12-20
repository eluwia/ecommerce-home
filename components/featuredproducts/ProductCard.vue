<template>
    <article class="product-card">
        <div class="product-card-image">
            <img :src="product.image" :alt="product.title"/>
            
            <div class="product-card-overlay">
                <button class="quick-view-btn">
                    <img src="/icons/eye.svg" alt="" class="quick-view-icon"/>
                    Quick View
                </button>
                <div class="hover-divider"></div>
                <button class="add-hover-btn">
                    <img src="/icons/addBasket.svg" alt="" class="add-hover-icon"/>
                    Add
                </button>
            </div>
        </div>
        
        
        <div class="product-card-body">
  <p class="product-card-price">{{ product.price }}</p>

  <div class="product-card-text">
    <p class="product-card-brand">{{ product.brand }}</p>
    <p class="product-card-title">
      {{ product.title }} <span v-if="product.weight">{{ product.weight }}</span>
    </p>
  </div>
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
  overflow: visible;
  background: #fff;
  height: 399.33px;

  border: 1px solid #ECECEC80;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
}

.product-card-image {
  height: 207.33px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(236, 236, 236, 0.16);
  position: relative;
  overflow: visible;
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
  gap: 0;
}

.product-card-price {
  margin: 0 0 8px 0;
  font-weight: 700;
  font-size: 16px;
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
  color: var(--muted);
}

.product-card-actions .divider {
  display: block;
  width: 100%;
  height: 1px;
  background: #ECECEC80;
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


.product-card-body p {
  margin: 0;
  gap:0;
}

.product-card-brand {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: var(--text);
  line-height: 20px;
}

.product-card-title {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  color: var(--text);
  line-height: 20px;
}

.product-card-overlay {
  position: absolute;
  left: -16px;
  right: -16px;
  bottom: 0;
  height: 48px;
  background: #000000CC;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.quick-view-btn,
.add-hover-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background: transparent;
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.quick-view-btn {
  width: 126px;
}

.add-hover-btn {
  width: 82px;
}

.quick-view-icon,
.add-hover-icon {
  width: 16px;
  height: 14px;
}

.hover-divider {
  width: 0.5px;
  height: 32px;
  background: #ECECEC;
  opacity: 0.2;
}

@media (hover: hover) {
  .product-card:hover .product-card-overlay {
    opacity: 1;
    pointer-events: all;
  }

  .quick-view-btn:hover,
  .add-hover-btn:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

@media (min-width: 1024px) {
  .product-card {
    width: 260px;
    height: 328px;
    overflow: hidden;
  }

  .product-card-image {
    width: 260px;
    height: 184px;
    padding: 16px;
  }

  .product-card-image img {
    max-width: 228px;
    max-height: 152px;
    object-fit: contain;
  }

  .product-card-body {
    width: 260px;
    height: 144px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .product-card-price {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    color: var(--text);
  }

  .product-card-text {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .product-card-brand {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    color: var(--text);
  }

  .product-card-title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 0;
    color: var(--text);
  }

  .product-card-actions {
    display: none;
  }
}


</style>