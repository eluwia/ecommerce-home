<template>
  <section class="card checkout-shared">
    <div class="card-head">
      <img src="/icons/shipping.png" alt="Shipping" class="card-icon" />
      <h2 class="card-title">Shipping details</h2>
    </div>
    <div class="form">
      <div class="field">
        <label class="label">First Name <span class="required">*</span></label>
        <input disabled class="input" />
      </div>
      <div class="field">
        <label class="label">Last Name <span class="required">*</span></label>
        <input disabled class="input" />
      </div>
      <div class="field">
        <label class="label">Email Address <span class="required">*</span></label>
        <input disabled class="input" />
      </div>
      <div class="field">
        <label class="label">Phone Number <span class="required">*</span></label>
        <input disabled class="input" placeholder="+90 (5_ _) _ _ _ - _ _ - _ _" />
      </div>
      <div class="field is-disabled">
        <label class="label">City <span class="required">*</span></label>
        <div class="select">
          <button class="select-trigger" type="button" disabled>
            <span class="select-text placeholder">Please select</span>
            <span class="select-icon"></span>
          </button>
        </div>
      </div>
      <div class="field is-disabled">
        <label class="label">District <span class="required">*</span></label>
        <div class="select">
          <button class="select-trigger" type="button" disabled>
            <span class="select-text placeholder">Please select</span>
            <span class="select-icon"></span>
          </button>
        </div>
      </div>
      <div class="field">
        <label class="label">Address <span class="required">*</span></label>
        <textarea disabled class="textarea" placeholder="Enter neighborhood, street, avenue and other information"></textarea>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import './checkout.css';

.form {
  width: 375px;
  padding: 0 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
}

.select {
  width: 100%;
  position: relative;
}

.select-trigger {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-disabled);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: not-allowed;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-text-primary);
  outline: none;
  opacity: 0.5;
}

.select-text {
  width: 279px;
  height: 24px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-text.placeholder {
  color: var(--color-text-placeholder);
}

.select-icon {
  width: 24px;
  height: 24px;
  flex: none;
  background-image: url("/icons/chevron-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px 14px;
}

@media (min-width: 1024px) {
  .card {
    grid-row: 2;
  }

  .form {
    display: grid;
    grid-template-columns: 360px 360px;
    column-gap: 40px;
    row-gap: 16px;
    padding: 0;
    width: 100%;
  }

  .field:nth-child(7) {
    grid-column: 1 / -1;
  }

  .select,
  .select-trigger {
    width: 100%;
  }
}
</style>
