<template>
    <header class="header">
        <!-- grey part -->
        <div class="top-bar">
            <div class="top-bar-content">
              <div class="top-bar-content-left">
                <button class="top-btn" type="button">
                  <img src="/icons/stores.png" alt="stores"/>
                  <span>Stores</span>
                </button>

                <button class="top-btn" type="button">
                  <img src="/icons/catalog.png" alt="catalog"/>
                  <span>Catalog</span>
                </button>
              </div>

                <button class="top-icon-btn" type="button">
                  <img src="/icons/phone.png" alt="phone"/>
                </button>
            </div>
        </div>

        <!-- white part -->
         <div class="main-bar">
            <div class="main-bar-content">
              <a class="main-bar-logo" href="/">
                <img src="/icons/logo.png" alt="logo"/>
              </a>
              <div class="main-bar-content-right">
                <button class="icon-btn" type="button">
                  <img src="/icons/search.png" alt="search"/>
                </button>
                <button class="cart-btn" type="button">
                  <img src="/icons/basket.png" alt="basket"/>
                </button>
                <button class="icon-btn" type="button">
                  <img src="/icons/menu.png" alt="menu"/>
                </button>
              </div>
            </div>
         </div>

    </header>
</template>

<style scoped>

.header {
  background: #fff;
  box-shadow: 0 4px 16px rgba(42,42,72,0.04);
}

.top-bar {
  width: 100%;
  height: 32px;
  background: #505357;
}

.top-btn span {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}

.top-btn img {
  width: 18px;
  height: 14px;
  display: block;
}

.top-icon-btn img {
  width:24px;
  height: 24px;
  display: block;
}

.top-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
}

.top-bar-content-left {
  display: flex;
  align-items: center;
  gap: 24px;
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
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
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
  gap: 32px;
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
  width: 20px;
  height: 20px;
  display: block;
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