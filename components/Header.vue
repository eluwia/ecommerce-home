<template>
    <header class="header">
        <div class="top-bar">
            <div class="top-bar-content">
              <div class="top-bar-left">
                <button class="top-btn" type="button">
                  <img src="/icons/stores.svg" alt="stores"/>
                  <span>Stores</span>
                </button>

                <button class="top-btn" type="button">
                  <img src="/icons/catalog.svg" alt="catalog"/>
                  <span>Catalog</span>
                </button>
              </div>

              <div class="top-bar-center">
                <span class="awards-text">Watsons Beauty and Personal Care Awards Nominees!</span>
              </div>

              <div class="top-bar-right">
                <span class="phone-text">Call us:(+90) 850 123 45 67</span>
                <button class="phone-icon-btn" type="button">
                  <img src="/icons/phone.svg" alt="phone"/>
                </button>
              </div>
            </div>
        </div>

         <div class="main-bar">
            <div class="main-bar-content">
              <a class="main-bar-logo" href="/">
                <img src="/icons/logo.svg" alt="logo"/>
              </a>
              
              <div class="main-bar-right-part">
                <div class="main-bar-search">
                  <button class="search-icon-btn" type="button">
                    <img src="/icons/search.svg" alt="search"/>
                  </button>
                  <input type="search" placeholder="Write the product or category you are looking for" class="search-input"/>
                </div>

                <div class="user-section">
                  <div class="user-info">
                    <div class="user-greeting-wrapper">
                      <span class="user-greeting-hello">Hello,</span>
                      <span class="user-name">Clara Clara</span>
                    </div>
                    <img class="user-avatar" src="/icons/user-img.jpg" alt="user" />
                    <button class="dropdown-btn" type="button">
                      <img src="/icons/chevron-down.svg" alt="menu" />
                    </button>
                  </div>
                  
                  <div class="divider"></div>
                  
                  <button class="cart-btn" type="button" onclick="window.location.href='/checkout'">
                    <img src="/icons/basket.svg" alt="basket"/>
                    <span class="cart-badge">2</span>
                  </button>
                </div>
              </div>

              <div class="main-bar-icons">
                <button class="icon-btn" type="button">
                  <img src="/icons/search.svg" alt="search"/>
                </button>
                <button class="cart-btn-mobile" type="button" onclick="window.location.href='/checkout'">
  <img src="/icons/basket.svg" alt="basket"/>
</button>
                <button class="icon-btn" type="button" @click="openMenu">
                  <img src="/icons/menu.svg" alt="menu"/>
                </button>
              </div>
            </div>
         </div>

         <nav class="nav-bar">
           <div class="nav-bar-content">
             <a href="#" class="nav-link">CAMPAIGNS</a>
             <a href="#" class="nav-link">PERSONAL CARE</a>
             <div 
               class="nav-link-wrapper"
               @mouseenter="isSkincareDropdownOpen = true"
               @mouseleave="isSkincareDropdownOpen = false"
               @focusin="isSkincareDropdownOpen = true"
               @focusout="handleSkincareFocusOut"
             >
               <a 
                 href="#" 
                 class="nav-link"
                 :aria-haspopup="true"
                 :aria-expanded="isSkincareDropdownOpen"
               >
                 SKIN CARE
               </a>
               <div 
                 v-if="isSkincareDropdownOpen"
                 class="nav-dropdown"
                 role="menu"
               >
                 <NuxtLink to="/skincare" class="nav-dropdown-item" role="menuitem">
                   All Skincare
                 </NuxtLink>
                 <NuxtLink to="/skincare/cleanser" class="nav-dropdown-item" role="menuitem">
                   Facial Treatment
                 </NuxtLink>
                 <NuxtLink to="/skincare/serum" class="nav-dropdown-item" role="menuitem">
                   Hand and Face Care
                 </NuxtLink>
                 <NuxtLink to="/skincare/moisturizer" class="nav-dropdown-item" role="menuitem">
                   Natural Skin Products
                 </NuxtLink>
               </div>
             </div>
             <a href="#" class="nav-link">MAKE-UP</a>
             <a href="#" class="nav-link">MOTHER & BABY</a>
             <a href="#" class="nav-link">MEN CARE</a>
             <a href="#" class="nav-link">HEALTHY LIFE</a>
             <a href="#" class="nav-link">BRANDS</a>
           </div>
         </nav>

    </header>
    <MobileMenu />
</template>

<script setup>
import { ref } from 'vue'
import { useMobileMenu } from '@/composables/useMobileMenu'
import MobileMenu from '@/components/MobileMenu.vue'

const { openMenu } = useMobileMenu()

const isSkincareDropdownOpen = ref(false)

const handleSkincareFocusOut = (e) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    isSkincareDropdownOpen.value = false
  }
}
</script>

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

.top-bar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 32px;
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.top-bar-center {
  display: none;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.top-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;
}

@media (hover: hover) {
  .top-btn:hover {
    opacity: 0.8;
  }
}

.top-btn img {
  width: 18px;
  height: 18px;
  display: block;
}

.top-btn span {
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 24px;
}

.awards-text {
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 20px;
}

.phone-text {
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  display: none;
}

.phone-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
}

.phone-icon-btn img {
  width: 16px;
  height: 16px;
  display: block;
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

.main-bar-search {
  display: none;
}

.main-bar-right-part {
  display: none;
}

.main-bar-icons {
  display: flex;
  align-items: center;
  gap: 32px;
}

.icon-btn,
.cart-btn-mobile {
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
.cart-btn-mobile img {
  width: 32px;
  height: 32px;
  display: block;
}

.cart-btn-mobile img {
  position: relative;
  top: -4px;
}

.nav-bar {
  display: none;
}

.nav-link-wrapper {
  position: relative;
}

.nav-dropdown {
  display: none !important;
}

@media (min-width: 1024px) {
  .top-bar {
    height: 40px;
  }

  .top-bar-content {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .top-bar-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .phone-text {
    display: block;
  }

  .main-bar {
    height: 72px;
  }

  .main-bar-content {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .main-bar-logo {
    flex: none;
  }

  .main-bar-logo img {
    width: 146px;
    height: 28px;
  }

  .main-bar-right-part {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    flex: 1;
    height: 72px;
  }

  .main-bar-search {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    gap: 8px;
    width: 560px;
    height: 42px;
    background: rgba(236, 236, 236, 0.3);
    border-radius: 32px;
    flex: none;
  }

  .search-icon-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }

  .search-icon-btn img {
    width: 16px;
    height: 16px;
  }

  .search-input {
    width: 512px;
    height: 24px;
    border: none;
    background: transparent;
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8493A8;
    outline: none;
    flex: 1;
  }

  .search-input::placeholder {
    color: #8493A8;
  }

  .user-section {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    flex: none;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    gap: 16px;
    width: 198px;
    height: 36px;
    border-radius: 8px;
    flex: none;
  }

  .user-greeting-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 2px;
    width: 106px;
    height: 24px;
    flex: none;
  }

  .user-greeting-hello {
    width: 35px;
    height: 24px;
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8493A8;
    flex: none;
  }

  .user-name {
    width: 69px;
    height: 24px;
    font-family: var(--font-roboto);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #2A2A48;
    flex: none;
  }

  .user-avatar {
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 2px 16px 0px #2A2A480F;
    border-radius: 200px;
    object-fit: cover;
    display: block;
    flex: none;
  }

  .dropdown-btn {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
  }

  .dropdown-btn img {
    width: 18px;
    height: 20px;
    opacity: 0.4;
  }

  .divider {
    width: 0.5px;
    height: 24px;
    background: #ECECEC;
    flex: none;
  }

  .cart-btn {
    position: relative;
    width: 25px;
    height: 72px;
    padding: 0 0 10px 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: none;
  }

  .cart-btn img {
    width: 25px;
    height: 30px;
  }

  .cart-badge {
    display: none;
  }

  .main-bar-icons {
    display: none;
  }

  .nav-bar {
    display: block;
    width: 100%;
    background: #fff;
  }

  .nav-bar-content {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    gap: 0;
  }

  .nav-link-wrapper {
    position: relative;
    flex: 0 0 auto;
  }

  .nav-dropdown {
    display: block !important;
  }

  .nav-link {
    font-family: var(--font-roboto);
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #2A2A48;
    text-decoration: none;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 0 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 4px 4px 0 0;
    flex: 0 0 auto;
    transition: color 0.2s ease;
    position: relative;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--secondary);
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  .nav-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-base);
    box-shadow: var(--shadow-md);
    padding: var(--space-8) 0;
    z-index: 1000;
    margin-top: 0;
  }

  .nav-dropdown-item {
    display: block;
    padding: var(--space-12) var(--space-16);
    font-family: var(--font-roboto);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-base);
    color: var(--color-text-primary);
    text-decoration: none;
    text-transform: none;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  @media (hover: hover) {
    .nav-link:hover {
      color: var(--secondary);
    }

    .nav-link:hover::after {
      transform: scaleX(1);
    }

    .nav-dropdown-item:hover {
      background: var(--color-bg-subtle);
      color: var(--color-secondary);
    }
  }

  .nav-dropdown-item:focus {
    background: var(--color-bg-subtle);
    color: var(--color-secondary);
    outline: 2px solid var(--color-border-focus);
    outline-offset: -2px;
  }
}

</style>