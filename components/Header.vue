<template>
    <header class="header">
        <!-- grey part -->
        <div class="top-bar">
            <div class="top-bar-content">
              <div class="top-bar-content-left">
                <button class="top-btn" type="button">
                  <img src="/icons/stores.svg" alt="stores"/>
                  <span>Stores</span>
                </button>

                <button class="top-btn" type="button">
                  <img src="/icons/catalog.svg" alt="catalog"/>
                  <span>Catalog</span>
                </button>
              </div>

                <button class="top-icon-btn" type="button">
                  <img src="/icons/phone.svg" alt="phone"/>
                </button>
            </div>
        </div>

        <!-- white part -->
         <div class="main-bar">
            <div class="main-bar-content">
              <a class="main-bar-logo" href="/">
                <img src="/icons/logo.svg" alt="logo"/>
              </a>
              <div class="main-bar-content-right">
                <div class="main-bar-icons-left">
                <button class="icon-btn" type="button">
                  <img src="/icons/search.svg" alt="search"/>
                </button>
                <button class="cart-btn" type="button">
                  <img src="/icons/basket.svg" alt="basket"/>
                </button>
              </div>
                <button class="icon-btn" type="button">
                  <img src="/icons/menu.svg" alt="menu"/>
                </button>
              </div>
            </div>
         </div>

    </header>
</template>

<style scoped>

.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(42,42,72,0.06);
}

.top-bar {
  width: 100%;
  height: 32px;
  background: var(--gray);
}

.top-btn span {
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 24px;
}

.top-btn,
.top-icon-btn,
.icon-btn,
.cart-btn {
  font: inherit;
  color: inherit;
}


.top-btn img {
  width: 18px;
  height: 18px;
  display: block;
  flex: 0 0 auto;
  position: relative;
  top: -1px;
}

.top-icon-btn img {
  width: 16px;
  height: auto;
  display: block;
  flex: 0 0 auto;
  position: relative;
}

.top-bar-content {
  display: flex;
  align-items: center;
  padding-left: 26px;
  padding-right: 16px;
  height: 32px;
}

.top-bar-content-left {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  flex: 1
  ;
}

.top-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  
}

.top-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  flex: 0 0 24px;
}


.main-bar {
  width: 100%;
  height: 56px;
  background: white;
}

.main-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  gap: 16px;
}

.main-bar-logo img {
  width: 120px;
  height: auto;
  display: block;
}

.main-bar-content-right {
  display: flex;
  align-items: center;
}

.main-bar-icons-left {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-right: 31px;
}

/* i will add badge to cart button class */
.icon-btn,
.cart-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon-btn img,
.cart-btn img {
  width: 32px;
  height: 32px;
  display: block;
}

.cart-btn img {
  top: -4px;
  position: relative;
  flex: 0 0 auto;
}

@media (min-width: 1024px) {
  .top-bar {
    height: 40px;
  }

  .main-bar {
    height: 72px;
  }
}

</style>