<template>
  <aside class="summary checkout-shared">
    <div class="summary-header">
      <h3 class="summary-title card-title">Shopping cart summary</h3>
    </div>
    <div class="summary-items">
      <div class="summary-item" v-for="item in items" :key="item.id">
        <div class="item-thumb">
          <img :src="item.thumbnail" :alt="item.title" />
        </div>
        <div class="item-body">
          <p class="item-name">{{ item.title }}</p>
          <div class="item-footer">
            <p class="item-price">{{ formatTL(item.price) }}</p>
            <div class="item-qty">
              <button class="qty-btn" type="button" aria-label="Increase quantity">+</button>
              <span class="qty-value">1</span>
              <button class="qty-btn" type="button" aria-label="Decrease quantity">−</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input class="input" placeholder="Discount code" />
    <div class="summary-lines">
      <div class="summary-line">
        <span class="line-label">Subtotal</span>
        <span class="line-value">{{ formatTL(subtotal) }}</span>
      </div>
      <div class="summary-line">
        <span class="line-label">Shipping</span>
        <span class="line-value">{{ formatTL(shippingFee) }}</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-total">
        <span class="label">Total</span>
        <span class="value">{{ formatTL(total) }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  items: Array,
  subtotal: Number,
  shippingFee: Number,
  total: Number,
  formatTL: Function,
})
</script>

<style scoped>
@import './checkout.css';

.summary {
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  margin: 0 0 16px;
  width: 100%;
}

.summary-header {
  display: flex;
  align-items: center;
  padding: 0;
  height: 32px;
  margin: 0 0 16px 0;
}

.summary-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.summary-item {
  display: flex;
  align-items: flex-start;
  height: 96px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.08);
  border-radius: 6px;
  overflow: hidden;
}

.item-thumb {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  width: 116px;
  height: 96px;
  background: rgba(236, 236, 236, 0.16);
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
}

.item-thumb img {
  width: 84px;
  height: 64px;
  object-fit: contain;
}

.item-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;
  width: 227px;
  height: 96px;
  box-sizing: border-box;
  min-width: 0;
  flex: 1;
}

.item-name,
.item-price {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
}

.item-name {
  font-weight: 500;
  color: var(--color-text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-price {
  font-weight: 400;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.item-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.item-qty {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.qty-btn,
.qty-value {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: var(--color-text-secondary);
}

.qty-btn {
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  background: var(--color-bg-disabled);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-weight: 700;
  line-height: 16px;
  padding: 0;
}

.qty-value {
  width: 10px;
  height: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}

.summary-lines {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-line {
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.line-label,
.line-value {
  font-size: 16px;
  line-height: 16px;
  color: var(--color-text-secondary);
}

.line-label {
  font-weight: 400;
}

.line-value {
  font-weight: 500;
  text-align: right;
}

.summary-divider {
  height: 1px;
  background: var(--color-border);
}

.summary-total {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.summary-total .label,
.summary-total .value {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-text-primary);
}

@media (min-width: 1024px) {
  .summary {
    grid-column: 2;
    grid-row: 2;
    position: sticky;
    top: 24px;
    width: 360px;
    margin: 0;
    padding: 24px;
    border: 1px solid var(--color-border);
    box-shadow: 0px 4px 16px rgba(42, 42, 72, 0.04);
    align-self: start;
  }

  .summary-header,
  .summary-items,
  .summary-item,
  .input,
  .summary-lines,
  .summary-line,
  .summary-divider,
  .summary-total {
    width: 100%;
  }

  .summary-header {
    height: auto;
    margin-bottom: 24px;
  }

  .summary-items {
    margin-bottom: 24px;
  }
}
</style>
