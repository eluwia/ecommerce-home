<template>
  <Header />

  <section class="checkout">
    <div class="checkout-container">
      <div class="checkout-top">
        <div class="checkout-breadcrumb">
          <span class="crumb">Homepage</span>
          <span class="separator">›</span>
          <span class="crumb">Shopping Cart</span>
          <span class="separator">›</span>
          <span class="crumb active">Checkout</span>
        </div>
        <h1 class="checkout-title">Checkout</h1>
        <div class="checkout-title-divider"></div>
      </div>

      <aside class="checkout-summary-card">
        <div class="summary-subtitle">
          <h3 class="checkout-summary-title">Shopping cart summary</h3>
        </div>

        <div class="checkout-summary-items">
          <div class="checkout-summary-item-card" v-for="item in cartItems" :key="item.id">
            <div class="checkout-item-thumb">
              <img :src="item.thumbnail" :alt="item.title" />
            </div>

            <div class="checkout-item-body">
              <p class="checkout-item-name">{{ item.title }}</p>

              <div class="checkout-item-footer">
                <p class="checkout-item-price">{{ formatTL(item.price) }}</p>

                <div class="checkout-item-qty">
                  <button class="checkout-qty-btn" type="button" aria-label="Increase quantity">+</button>
                  <span class="checkout-qty-value">1</span>
                  <button class="checkout-qty-btn" type="button" aria-label="Decrease quantity">−</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <input class="input discount-code" placeholder="Discount code" />

        <div class="checkout-summary-lines">
          <div class="checkout-summary-line">
            <span class="line-label">Subtotal</span>
            <span class="line-value">{{ formatTL(subtotal) }}</span>
          </div>

          <div class="checkout-summary-line">
            <span class="line-label">Shipping</span>
            <span class="line-value">{{ formatTL(shippingFee) }}</span>
          </div>

          <div class="checkout-summary-divider"></div>

          <div class="checkout-summary-total">
            <span class="label">Total</span>
            <span class="value">{{ formatTL(total) }}</span>
          </div>
        </div>
      </aside>

      <section class="checkout-card card">
        <div class="checkout-card-head card-head">
          <img src="/icons/shipping.png" alt="Shipping" class="card-icon" />
          <h2 class="card-title">Shipping details</h2>
        </div>

        <div class="checkout-form">
          <div class="field">
            <label class="label">First Name <span class="required">*</span></label>
            <input v-model="firstName" class="input" />
          </div>

          <div class="field">
            <label class="label">Last Name <span class="required">*</span></label>
            <input v-model="lastName" class="input" />
          </div>

          <div class="field">
            <label class="label">Email Address <span class="required">*</span></label>
            <input v-model="email" class="input" />
          </div>

          <div class="field">
            <label class="label">Phone Number <span class="required">*</span></label>
            <input v-model="phone" class="input" placeholder="+90 (5_ _) _ _ _ - _ _ - _ _" maxlength="11" />
          </div>

          <div class="field">
            <label class="label">City <span class="required">*</span></label>

            <div class="select" ref="cityRef">
              <button
                class="select-trigger"
                type="button"
                :aria-expanded="cityOpen ? 'true' : 'false'"
                @click="toggleCity"
              >
                <span class="select-text" :class="{ placeholder: !selectedCity }">
                  {{ selectedCityLabel }}
                </span>
                <span class="select-icon" :class="{ open: cityOpen }"></span>
              </button>

              <div v-if="cityOpen" class="select-menu" role="listbox">
                <button
                  v-for="opt in cityOptions"
                  :key="opt.value"
                  type="button"
                  class="select-option"
                  @click="selectCity(opt.value)"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="field" :class="{ 'is-disabled': !selectedCity }">
            <label class="label">District <span class="required">*</span></label>

            <div class="select" ref="districtRef">
              <button
                class="select-trigger"
                type="button"
                :disabled="!selectedCity"
                :aria-expanded="districtOpen ? 'true' : 'false'"
                @click="toggleDistrict"
              >
                <span class="select-text" :class="{ placeholder: !selectedDistrict }">
                  {{ selectedDistrictLabel }}
                </span>
                <span class="select-icon" :class="{ open: districtOpen }"></span>
              </button>

              <div v-if="districtOpen && selectedCity" class="select-menu" role="listbox">
                <button
                  v-for="opt in districtOptions"
                  :key="opt.value"
                  type="button"
                  class="select-option"
                  @click="selectDistrict(opt.value)"
                >
                  {{ opt.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Address <span class="required">*</span></label>
            <textarea
              v-model="address"
              class="textarea"
              placeholder="Enter neighborhood, street, avenue and other information"
            ></textarea>
          </div>
        </div>
      </section>

      <section class="checkout-card card">
        <div class="checkout-card-head card-head">
          <img src="/icons/payment.png" alt="Payment" class="card-icon" />
          <h2 class="card-title">Payment details</h2>
        </div>

        <div class="payment-block">
          <div class="card-container">
            <div class="credit-card-front">
              <div class="front-top">
                <div class="card-chip"></div>
                <div class="card-number-text">{{ cardNumber || '0000 0000 0000 0000' }}</div>
              </div>

              <div class="front-bottom">
                <div class="front-col">
                  <div class="front-hint">Card holder</div>
                  <div class="front-value">{{ cardHolder || 'Card Holder' }}</div>
                </div>

                <div class="front-col right">
                  <div class="front-hint">&nbsp;</div>
                  <div class="front-value">{{ expiryDate || 'MM / YY' }}</div>
                </div>
              </div>
            </div>

            <div class="credit-card-back">
              <div class="card-signature-section"></div>
              <div class="card-cvv-section">
                <div class="cvv-label">CVV</div>
                <div class="cvv-value">{{ cvv || '' }}</div>
              </div>
            </div>
          </div>

          <div class="checkout-form payment-form">
            <div class="field">
              <label class="label">Card Holder Name <span class="required">*</span></label>
              <input v-model="cardHolder" class="input" />
              <span class="helper">Full name on card</span>
            </div>

            <div class="field">
              <label class="label">Card Number <span class="required">*</span></label>
              <input v-model="cardNumber" class="input" placeholder="Enter digits without spaces" type="text" maxlength="16" @input="formatCardNumber" />
              <span class="helper">Enter digits without spaces</span>
            </div>

            <div class="checkout-row-2">
              <div class="field">
                <label class="label">Expiry Date <span class="required">*</span></label>
                <input v-model="expiryDate" class="input" placeholder="MM / YY" type="text" maxlength="7" @input="formatExpiryDate" />
              </div>

              <div class="field">
                <label class="label">CVV <span class="required">*</span></label>
                <div class="cvv-wrap">
                  <input v-model="cvv" class="input" placeholder="" type="text" maxlength="3" />
                  <button type="button" class="cvv-help" aria-label="CVV help">
                    <img src="/icons/cvv.png" alt="cvv" />
                  </button>
                </div>
              </div>
            </div>

            <p class="checkout-required-note">* Required fields</p>

            <div class="pay-wrap">
              <button 
                class="btn btn--full" 
                :class="{ 'btn--primary': canPay, 'btn--disabled': !canPay }" 
                type="button" 
                :disabled="!canPay"
              >
                PAY NOW
              </button>
            </div>

            <div class="divider"></div>
          </div>
        </div>
      </section>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')

const selectedCity = ref('')
const selectedDistrict = ref('')

const cardHolder = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')

const shippingFee = ref(10.5)

const cityOptions = [
  { value: 'istanbul', label: 'Istanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'izmir', label: 'Izmir' },
]

const districtOptions = [
  { value: 'district1', label: 'District 1' },
  { value: 'district2', label: 'District 2' },
]

const cityOpen = ref(false)
const districtOpen = ref(false)
const cityRef = ref(null)
const districtRef = ref(null)

const toggleCity = () => {
  cityOpen.value = !cityOpen.value
  if (cityOpen.value) districtOpen.value = false
}

const toggleDistrict = () => {
  if (!selectedCity.value) return
  districtOpen.value = !districtOpen.value
  if (districtOpen.value) cityOpen.value = false
}

const selectCity = (val) => {
  selectedCity.value = val
  selectedDistrict.value = ''
  cityOpen.value = false
}

const selectDistrict = (val) => {
  selectedDistrict.value = val
  districtOpen.value = false
}

const findOptionLabel = (options, value) => {
  const found = options.find((o) => o.value === value)
  return found?.label || 'Please select'
}

const selectedCityLabel = computed(() => findOptionLabel(cityOptions, selectedCity.value))
const selectedDistrictLabel = computed(() => findOptionLabel(districtOptions, selectedDistrict.value))

const onDocClick = (e) => {
  const target = e.target
  if (cityRef.value && !cityRef.value.contains(target)) {
    cityOpen.value = false
  }
  if (districtRef.value && !districtRef.value.contains(target)) {
    districtOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
})

const [{ data: beautyData, error: beautyError }, { data: skinCareData, error: skinError }] = await Promise.all([
  useFetch('https://dummyjson.com/products/category/beauty', { key: 'products-beauty' }),
  useFetch('https://dummyjson.com/products/category/skin-care', { key: 'products-skin-care' }),
])

const cartItems = computed(() => {
  if (beautyError.value || skinError.value) {
    return []
  }
  
  const beauty = beautyData.value?.products ?? []
  const skin = skinCareData.value?.products ?? []
  return [...beauty, ...skin].slice(0, 2)
})

const subtotal = computed(() => cartItems.value.reduce((acc, p) => acc + Number(p.price || 0), 0))
const total = computed(() => subtotal.value + Number(shippingFee.value || 0))

const canPay = computed(() => {
  return (
    firstName.value.trim() &&
    lastName.value.trim() &&
    email.value.trim() &&
    phone.value.trim().length <= 11 &&
    phone.value.trim().length > 0 &&
    selectedCity.value &&
    selectedDistrict.value &&
    address.value.trim() &&
    cardHolder.value.trim() &&
    cardNumber.value.length === 16 &&
    expiryDate.value.trim() &&
    cvv.value.length === 3
  )
})

const formatCardNumber = (e) => {
  cardNumber.value = e.target.value.replace(/\D/g, '').slice(0, 16)
}

const formatExpiryDate = (e) => {
  let val = e.target.value.replace(/\D/g, '').slice(0, 4)
  if (val.length >= 2) {
    expiryDate.value = val.slice(0, 2) + ' / ' + val.slice(2, 4)
  } else {
    expiryDate.value = val
  }
}

const formatTL = (n) => `${Number(n || 0).toFixed(2).replace('.', ',')} TL`
</script>

<style scoped>
@import '@/components/checkout/checkout.css';

.checkout {
  font-family: var(--font-roboto);
  background: var(--color-bg);
  overflow-x: hidden;
}

.checkout-container {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.checkout-top {
  background: var(--color-bg-overlay);
  padding: var(--space-16);
}

.checkout-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  align-items: center;
  width: 100%;
  font-family: var(--font-roboto);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-tight);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-8);
}

.crumb {
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-normal);
}

.crumb.active {
  color: var(--color-secondary);
  font-weight: var(--font-weight-medium);
}

.separator {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--space-16);
  line-height: var(--space-16);
  display: inline-flex;
  align-items: center;
  height: var(--space-16);
}

.checkout-title {
  margin: 0;
  font-family: var(--font-rubik);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-base);
  letter-spacing: -0.2px;
  color: var(--color-text-primary);
}

.checkout-title-divider {
  display: none;
}

.checkout-summary-card {
  background: var(--color-bg);
  border-radius: var(--radius-md);
  padding: var(--space-24);
  margin: 0 0 var(--space-16);
  font-family: var(--font-roboto);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.summary-subtitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  width: 100%;
  margin: 0;
  flex-shrink: 0;
}

.checkout-summary-title {
  margin: 0;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-base);
  color: var(--color-text-primary);
}

.checkout-summary-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  width: 100%;
  flex: 1;
  min-height: 0;
}

.checkout-summary-item-card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 96px;
  background: var(--color-bg);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.checkout-item-thumb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-16);
  width: 116px;
  height: 96px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-base) 0 0 var(--radius-base);
  box-sizing: border-box;
}

.checkout-item-thumb img {
  width: 84px;
  height: 64px;
  object-fit: contain;
}

.checkout-item-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-8);
  gap: var(--space-8);
  width: 227px;
  height: 96px;
  box-sizing: border-box;
  min-width: 0;
  flex: 1;
}

.checkout-item-name,
.checkout-item-price {
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-base);
}

.checkout-item-name {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.checkout-item-price {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.checkout-item-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.checkout-item-qty {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-8);
  flex-shrink: 0;
}

.checkout-qty-btn,
.checkout-qty-value {
  font-family: var(--font-roboto);
  font-size: var(--space-16);
  color: var(--color-text-secondary);
}

.checkout-qty-btn {
  box-sizing: border-box;
  width: var(--space-24);
  height: var(--space-24);
  background: var(--color-bg-disabled);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  display: grid;
  place-items: center;
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  padding: 0;
}

.checkout-qty-value {
  width: 10px;
  height: var(--space-24);
  font-weight: var(--font-weight-medium);
  line-height: var(--space-24);
  text-align: center;
}


.checkout-summary-lines {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  flex-shrink: 0;
}

.checkout-summary-line {
  width: 100%;
  height: var(--space-16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
}

.line-label,
.line-value {
  font-size: var(--space-16);
  line-height: var(--space-16);
  color: var(--color-text-secondary);
}

.line-label {
  font-weight: var(--font-weight-normal);
}

.line-value {
  font-weight: var(--font-weight-medium);
  text-align: right;
}

.checkout-summary-divider {
  width: 100%;
  height: 1px;
  background: var(--color-border);
}

.checkout-summary-total {
  width: 100%;
  height: var(--space-24);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-16);
}

.checkout-summary-total .label,
.checkout-summary-total .value {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-base);
  color: var(--color-text-primary);
}

.checkout-card {
  width: 100%;
  padding: 0 0 var(--space-16);
  box-sizing: border-box;
}

.checkout-card-head {
  width: 100%;
  height: 64px;
}

.checkout-form {
  width: 100%;
  padding: 0 var(--space-16) var(--space-8);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
}

.payment-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-16);
  padding: 0 var(--space-16);
  box-sizing: border-box;
}

.card-container {
  width: 100%;
  height: 215px;
  border-radius: var(--radius-md);
  position: relative;
}

.credit-card-back,
.credit-card-front {
  box-sizing: border-box;
  position: absolute;
  width: 282px;
  height: 184px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
}

.credit-card-back {
  left: 61px;
  top: 31px;
  padding: var(--space-24) 0;
  gap: var(--space-16);
}

.credit-card-front {
  left: 0;
  top: 0;
  padding: var(--space-24);
  gap: 32px;
  z-index: 2;
}

.card-signature-section {
  width: 282px;
  height: 38px;
  background: var(--color-border);
}

.card-cvv-section {
  width: 282px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 var(--space-24) 0 0;
  gap: var(--space-8);
}

.cvv-label,
.front-hint {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-tight);
  color: var(--color-text-tertiary);
}

.cvv-label {
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}

.cvv-value,
.front-value {
  font-size: var(--space-16);
  line-height: var(--space-16);
  color: var(--color-text-secondary);
}

.cvv-value {
  font-weight: var(--font-weight-medium);
  min-height: var(--space-16);
}

.front-top {
  width: 234px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-16);
}

.card-chip {
  width: 32px;
  height: var(--space-24);
  border-radius: var(--radius-sm);
  background-image: url("/icons/chip.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-number-text {
  width: 234px;
  height: var(--space-24);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  line-height: var(--space-24);
  color: var(--color-text-secondary);
}

.front-bottom {
  width: 234px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.front-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-8);
}

.front-col.right {
  align-items: flex-end;
}

.front-hint {
  font-weight: var(--font-weight-normal);
}

.front-value {
  font-weight: var(--font-weight-medium);
}

.payment-form {
  padding: 0;
  width: 100%;
}

.checkout-row-2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
}

.checkout-row-2 .field {
  width: 151.5px;
}

.checkout-row-2 .input {
  width: 151.5px;
}

.cvv-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.cvv-wrap .input {
  padding-right: 44px;
}

.cvv-help {
  position: absolute;
  right: 12px;
  border: 0;
  background: transparent;
  padding: 0;
  width: var(--space-24);
  height: var(--space-24);
  cursor: pointer;
  display: grid;
  place-items: center;
}

.cvv-help img {
  width: var(--space-16);
  height: var(--space-16);
  display: block;
}

.checkout-required-note {
  margin: 0;
  width: 100%;
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-base);
  color: var(--color-text-tertiary);
}

.pay-wrap {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.btn--disabled {
  background-color: var(--color-bg-disabled);
  color: var(--color-text-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

.btn--disabled:hover {
  background-color: var(--color-bg-disabled);
}

@media (min-width: 1024px) {
  .checkout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .checkout-container {
    max-width: 1160px;
    width: 100%;
    padding: 32px 0;
    display: grid;
    grid-template-columns: 760px 360px;
    gap: 40px;
    align-items: start;
  }

  .checkout-top {
    grid-column: 1 / -1;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    padding: var(--space-24);
    background: var(--color-bg-overlay);
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-16);
  }

  .checkout-breadcrumb {
    width: 100%;
    max-width: 1160px;
    margin: 0;
  }

  .checkout-title {
    width: 100%;
    max-width: 1160px;
    margin: 0;
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-loose);
  }

  .checkout-title-divider {
    display: block;
    width: 100%;
    max-width: 1160px;
    height: 1px;
    background: var(--color-border);
    margin-top: var(--space-16);
  }

  .checkout-summary-card {
    grid-column: 2;
    grid-row: 2;
    position: sticky;
    top: var(--space-24);
    width: 360px;
    margin: 0;
    padding: var(--space-24);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    align-self: start;
  }

  .summary-subtitle,
  .checkout-summary-items,
  .checkout-summary-item-card,
  .input,
  .checkout-summary-lines,
  .checkout-summary-line,
  .checkout-summary-divider,
  .checkout-summary-total {
    width: 100%;
  }

  .summary-subtitle {
    flex-shrink: 0;
  }

  .checkout-summary-items {
    flex: 1;
    min-height: 0;
  }

  .checkout-card {
    grid-column: 1;
    width: 760px;
    padding: 0;
    margin-bottom: 32px;
  }

  .checkout-card:first-of-type {
    grid-row: 2;
  }

  .checkout-card:last-of-type {
    grid-row: 3;
    margin-bottom: 0;
  }

  .checkout-card-head {
    width: 100%;
    height: auto;
    padding: 0;
    background: transparent;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-16);
  }

  .checkout-card:first-of-type .checkout-form {
    display: grid;
    grid-template-columns: 360px 360px;
    column-gap: 40px;
    row-gap: var(--space-16);
    padding: 0;
  }

  .checkout-card:first-of-type .field {
    width: 100%;
  }

  .checkout-card:first-of-type .field:nth-child(7) {
    grid-column: 1 / -1;
  }

  .payment-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
    padding: 0;
  }

  .card-container {
    width: 360px;
    height: 360px;
    flex-shrink: 0;
    order: 2;
  }

  .payment-form {
    width: 360px;
    padding: 0;
    gap: var(--space-16);
    order: 1;
  }

  .checkout-row-2 {
    width: 100%;
    gap: 40px;
  }

  .checkout-row-2 .field {
    width: 160px;
  }

  .checkout-row-2 .input {
    width: 100%;
  }

  .checkout-required-note {
    width: 100%;
  }
}
</style>
