<template>
  <Teleport to="body">
    <div v-if="isMenuOpen" class="mobile-menu-wrapper">
      <div class="mobile-menu-overlay" @click="closeMenu"></div>

      <aside class="mobile-menu-drawer" role="dialog" aria-modal="true">
        <div class="mobile-menu-topbar">
          <button
            class="mobile-menu-icon-btn"
            type="button"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <img src="/icons/close.svg" alt="" aria-hidden="true" />
          </button>

          <h2 class="mobile-menu-title">Menu</h2>
        </div>

        <div class="mobile-menu-content">
          <nav v-if="menuView === 'root'" class="mobile-menu-items" aria-label="Main menu">
            <div v-for="item in menuItems" :key="item.id" class="mobile-menu-list-item">
              <button
                class="mobile-menu-row"
                type="button"
                @click="item.children ? goSub(item) : closeMenu()"
              >
                <img class="mobile-menu-row-icon" :src="chevronLeftIcon" alt="" aria-hidden="true" />
                <span class="mobile-menu-row-text">{{ item.title }}</span>
              </button>
              <span class="mobile-menu-divider" aria-hidden="true"></span>
            </div>
          </nav>

          <div v-else class="mobile-menu-sub">
            <button class="mobile-menu-sub-pill" type="button" @click="goRoot">
              <span class="mobile-menu-sub-pill-text">{{ activeMenu?.title }}</span>
              <img class="mobile-menu-sub-pill-icon" :src="chevronRightIcon" alt="" aria-hidden="true" />
            </button>

            <nav class="mobile-menu-sub-list" aria-label="Sub menu">
              <button
                v-for="(child, index) in (activeMenu?.children ?? [])"
                :key="index"
                class="mobile-menu-sub-item"
                type="button"
                @click="closeMenu()"
              >
                {{ child }}
              </button>
            </nav>

            <span class="mobile-menu-divider mobile-menu-sub-divider" aria-hidden="true"></span>
          </div>

          <div v-if="menuView === 'root'" class="mobile-menu-user">
            <div v-for="u in userItems" :key="u.id" class="mobile-menu-user-item">
              <button class="mobile-menu-user-row" type="button" @click="closeMenu()">
                <span class="mobile-menu-user-text">{{ u.title }}</span>
                <img class="mobile-menu-user-icon" :src="u.icon" alt="" aria-hidden="true" />
              </button>
              <span class="mobile-menu-divider" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, computed } from 'vue'
import { useMobileMenu } from '@/composables/useMobileMenu'

const {
  isMenuOpen,
  menuView,
  activeMenu,
  menuItems,
  userItems,
  closeMenu,
  goRoot,
  goSub
} = useMobileMenu()

const chevronLeftIcon = computed(() => '/icons/chevron-left.svg')
const chevronRightIcon = computed(() => '/icons/chevron-right.svg')

const onKeydown = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) closeMenu()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.mobile-menu-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: visible;
}

.mobile-menu-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mobile-menu-drawer {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}

.mobile-menu-topbar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  padding: 16px;
  background: #f2f0ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: hidden;
  max-width: 100%;
}

.mobile-menu-icon-btn {
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: none;
}

.mobile-menu-icon-btn img {
  width: 24px;
  height: 24px;
  display: block;
}

.mobile-menu-title {
  margin: 0;
  padding: 0;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  width: 0;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2a2a48;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mobile-menu-content {
  position: relative;
  top: 0;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  box-sizing: border-box;
}

.mobile-menu-items {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  background: #ffffff;
  box-sizing: border-box;
}

.mobile-menu-list-item {
  width: 268px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
}


.mobile-menu-row {
  width: 268px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.mobile-menu-row-icon {
  width: 24px;
  height: 24px;
  flex: none;
}

.mobile-menu-row-text {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2a2a48;
}

.mobile-menu-divider {
  width: 268px;
  height: 1px;
  background: var(--color-border);
  margin: 8px 0 0 0;
  padding: 0;
  border: none;
  outline: none;
  flex-shrink: 0;
  display: block;
  box-sizing: border-box;
}

.mobile-menu-sub {
  width: 300px;
  padding: 16px;
  box-sizing: border-box;
}

.mobile-menu-sub-pill {
  width: 268px;
  height: 40px;
  padding: 8px;
  border: 0;
  cursor: pointer;
  background: rgba(236, 236, 236, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
}

.mobile-menu-sub-pill-text {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2a2a48;
}

.mobile-menu-sub-pill-icon {
  width: 24px;
  height: 24px;
  flex: none;
}

.mobile-menu-sub-list {
  width: 268px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.mobile-menu-sub-item {
  width: 268px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #485363;
}

.mobile-menu-sub-divider {
  margin-top: 16px;
}

.mobile-menu-user {
  width: 300px;
  padding: 16px;
  background: rgba(236, 236, 236, 0.3);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  margin-top: auto;
}

.mobile-menu-user-item {
  width: 268px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mobile-menu-user-row {
  width: 268px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.mobile-menu-user-text {
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  font-family: var(--font-roboto);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #485363;
}

.mobile-menu-user-icon {
  width: 24px;
  height: 24px;
  flex: none;
}

@media (max-width: 1023px) {
  .mobile-menu-wrapper {
    overflow: visible;
  }

  .mobile-menu-drawer {
    width: min(300px, 100vw);
    max-width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-topbar {
    width: 100%;
    max-width: 100%;
    padding: 16px;
    margin-right: 8px;
    box-sizing: border-box;
    align-items: center;
  }

  .mobile-menu-title {
    flex: 1 1 0;
    min-width: 0;
    max-width: calc(100% - 32px - 8px);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
  }

  .mobile-menu-content {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-items {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-list-item {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-row {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-divider {
    width: 100%;
    max-width: 268px;
    height: 1px;
    background: var(--color-border);
  }

  .mobile-menu-sub {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-sub-pill {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-sub-list {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-sub-item {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-user {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-user-item {
    width: 100%;
    max-width: 100%;
  }

  .mobile-menu-user-row {
    width: 100%;
    max-width: 100%;
  }
}
</style>
