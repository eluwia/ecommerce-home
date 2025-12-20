<template>
  <section class="card checkout-shared">
    <div class="card-head">
      <img src="/icons/payment.png" alt="Payment" class="card-icon" />
      <h2 class="card-title">Payment details</h2>
    </div>
    <div class="payment-block">
      <div class="card-container">
        <div class="credit-card-front">
          <div class="front-top">
            <div class="card-chip"></div>
            <div class="card-number-text">0000 0000 0000 0000</div>
          </div>
          <div class="front-bottom">
            <div class="front-col">
              <div class="front-hint">Card holder</div>
              <div class="front-value">Card Holder</div>
            </div>
            <div class="front-col right">
              <div class="front-hint">&nbsp;</div>
              <div class="front-value">MM / YY</div>
            </div>
          </div>
        </div>
        <div class="credit-card-back">
          <div class="card-signature-section"></div>
          <div class="card-cvv-section">
            <div class="cvv-label">CVV</div>
            <div class="cvv-value"></div>
          </div>
        </div>
      </div>
      <div class="form payment-form">
        <div class="field">
          <label class="label">Card Holder Name <span class="required">*</span></label>
          <input disabled class="input" />
          <span class="helper">Full name on card</span>
        </div>
        <div class="field">
          <label class="label">Card Number <span class="required">*</span></label>
          <input disabled class="input" placeholder="Enter digits without spaces" />
          <span class="helper">Enter digits without spaces</span>
        </div>
        <div class="row-2">
          <div class="field">
            <label class="label">Expiry Date <span class="required">*</span></label>
            <input disabled class="input" placeholder="MM / YY" />
          </div>
          <div class="field">
            <label class="label">CVV <span class="required">*</span></label>
            <div class="cvv-wrap">
              <input disabled class="input" placeholder="" />
              <button type="button" class="cvv-help" aria-label="CVV help">
                <img src="/icons/cvv.png" alt="cvv" />
              </button>
            </div>
          </div>
        </div>
        <p class="required-note">* Required fields</p>
        <div class="pay-wrap">
          <button class="btn" type="button" disabled>PAY NOW</button>
        </div>
        <div class="divider"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import './checkout.css';

.payment-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
}

.card-container {
  width: 100%;
  height: 215px;
  border-radius: 6px;
  position: relative;
}

.credit-card-back,
.credit-card-front {
  box-sizing: border-box;
  position: absolute;
  width: 282px;
  height: 184px;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.credit-card-back {
  left: 61px;
  top: 31px;
  padding: 24px 0;
  gap: 16px;
}

.credit-card-front {
  left: 0;
  top: 0;
  padding: 24px;
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
  padding: 0 24px 0 0;
  gap: 8px;
}

.cvv-label,
.front-hint {
  font-size: 14px;
  line-height: 16px;
  color: var(--color-text-tertiary);
}

.cvv-label {
  font-weight: 700;
  text-transform: uppercase;
}

.cvv-value,
.front-value {
  font-size: 16px;
  line-height: 16px;
  color: var(--color-text-secondary);
}

.cvv-value {
  font-weight: 500;
  min-height: 16px;
}

.front-top {
  width: 234px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.card-chip {
  width: 32px;
  height: 24px;
  border-radius: 2px;
  background-image: url("/icons/chip.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-number-text {
  width: 234px;
  height: 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
  gap: 8px;
}

.front-col.right {
  align-items: flex-end;
}

.front-hint {
  font-weight: 400;
}

.front-value {
  font-weight: 500;
}

.form {
  width: 375px;
  padding: 0 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
}

.payment-form {
  padding: 0;
  width: 100%;
}

.helper {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-text-placeholder);
}

.row-2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
}

.row-2 .field {
  width: 151.5px;
}

.row-2 .input {
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
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: grid;
  place-items: center;
}

.cvv-help img {
  width: 16px;
  height: 16px;
  display: block;
}

.required-note {
  margin: 0;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-text-tertiary);
}

.pay-wrap {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.btn {
  width: 100%;
  height: 32px;
  border: 0;
  border-radius: 4px;
  background: #FF27AD;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--color-border);
  margin: 8px 0 0 0;
}

@media (min-width: 1024px) {
  .card {
    grid-row: 3;
    margin-bottom: 0;
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
    gap: 16px;
    order: 1;
  }

  .row-2,
  .required-note {
    width: 100%;
  }

  .row-2 {
    gap: 40px;
  }

  .row-2 .field {
    width: 160px;
  }

  .row-2 .input {
    width: 100%;
  }

  .btn {
    width: 360px;
    height: 32px;
  }
}
</style>
