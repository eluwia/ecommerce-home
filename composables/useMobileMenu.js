import { ref } from 'vue'

const isMenuOpen = ref(false)
const menuView = ref('root')
const activeMenu = ref(null)

export const useMobileMenu = () => {
  const menuItems = [
    { id: 'campaigns', title: 'Campaigns' },
    { id: 'personal-care', title: 'Personal Care' },
    {
      id: 'skin-care',
      title: 'Skin Care',
      children: ['Facial Treatment', 'Hand and Face Care', 'Natural Skin Products']
    },
    { id: 'makeup', title: 'Make - up' },
    { id: 'mother-baby', title: 'Mother & Baby' },
    { id: 'healthy-life', title: 'Healthy Life' },
    { id: 'brands', title: 'Brands' }
  ]

  const userItems = [
    { id: 'profile', title: 'My profile', icon: '/icons/profile.svg' },
    { id: 'orders', title: 'Order history', icon: '/icons/order.svg' },
    { id: 'help', title: 'Help center', icon: '/icons/help.svg' },
    { id: 'logout', title: 'Log out', icon: '/icons/logout.svg' }
  ]

  const openMenu = () => {
    isMenuOpen.value = true
    menuView.value = 'root'
    activeMenu.value = null
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    menuView.value = 'root'
    activeMenu.value = null
  }

  const goRoot = () => {
    menuView.value = 'root'
    activeMenu.value = null
  }

  const goSub = (item) => {
    if (item?.children) {
      menuView.value = 'sub'
      activeMenu.value = item
    }
  }

  return {
    isMenuOpen,
    menuView,
    activeMenu,
    menuItems,
    userItems,
    openMenu,
    closeMenu,
    goRoot,
    goSub
  }
}
