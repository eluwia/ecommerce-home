<template>
    <footer class="footer">
      <nav class="footer-accordion" aria-label="Footer links">
        <section
          v-for="item in items"
          :key="item.id"
          class="footer-item"
        >
          <button
            class="footer-trigger"
            type="button"
            :aria-expanded="openId === item.id"
            :aria-controls="`panel-${item.id}`"
            @click="toggle(item.id)"
          >
            <span class="footer-title">{{ item.title }}</span>
            <img
  class="footer-chevron"
  :src="openId === item.id ? '/icons/chevron-up.svg' : '/icons/chevron-down.svg'"
  alt=""
  aria-hidden="true"
/>

          </button>
  
          <div
            class="footer-panel"
            :id="`panel-${item.id}`"
            v-show="openId === item.id"
          >
            <ul class="footer-links">
              <li v-for="link in item.links" :key="link.label">
                <a class="footer-link" :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
  
      <div class="footer-bottom">
        <div class="footer-meta">
          <p class="footer-copy">© WATSONS 2021 ALL RIGHTS RESERVED | A MEMBER OF CK HUTCHISON HOLDINGS</p>
        </div>
        
        <div class="footer-social" aria-label="Social links">
          <a class="social-btn" href="#" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="" aria-hidden="true" />
          </a>
          <a class="social-btn" href="#" aria-label="Twitter">
            <img src="/icons/twitter.svg" alt="" aria-hidden="true" />
          </a>
          <a class="social-btn" href="#" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="" aria-hidden="true" />
          </a>
          <a class="social-btn" href="#" aria-label="YouTube">
            <img src="/icons/youtube.svg" alt="" aria-hidden="true" />
          </a>
          <a class="social-btn" href="#" aria-label="Pinterest">
            <img src="/icons/pinterest.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  </template>

<script setup>
    import { ref } from 'vue'
    
    const openId = ref('shopping') // ekranda Shopping açık görünüyor
    
    const items = [
      {
        id: 'corporate',
        title: 'CORPORATE',
        links: [
          { label: 'About us', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Human resources', href: '#' },
          { label: 'News from us', href: '#' },
        ],
      },
      {
        id: 'shopping',
        title: 'SHOPPING',
        links: [
          { label: 'Order and Payment', href: '#' },
          { label: 'Cancellation and Refund', href: '#' },
          { label: 'Delivery Conditions', href: '#' },
          { label: 'Secure shopping', href: '#' },
        ],
      },
      { 
        id: 'legal', 
        title: 'LEGAL', 
        links: [
          { label: 'Terms of Use', href: '#' },
          { label: 'Privacy Policy', href: '#' },
          { label: 'Membership Agreement', href: '#' },
          { label: 'Distance Selling Contract', href: '#' },
        ],
      },
      { 
        id: 'help', 
        title: 'HELP CENTER', 
        links: [
          { label: 'FAQ', href: '#' },
          { label: 'Contact center', href: '#' },
        ],
      },
      { 
        id: 'contact', 
        title: 'CONTACT US', 
        links: [
          { label: 'Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768 Ümraniye/İstanbul', href: '#', icon: 'location' },
          { label: '0850 755 9987', href: 'tel:08507559987', icon: 'phone' },
          { label: 'info@watsons.com.tr', href: 'mailto:info@watsons.com.tr', icon: 'email' },
        ],
      },
    ]
    
    const toggle = (id) => {
      openId.value = openId.value === id ? null : id
    }
    </script>
    <style scoped>
    .footer {
        background: #fff;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      
      .footer-item {
        border-bottom: 1px solid rgba(236, 236, 236, 1);
      }
      
      .footer-trigger {
        width: 100%;
        height: 48px;
        padding: 0;
        background: transparent;
        border: 0;
        cursor: pointer;
      
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .footer-title {
        font-family: var(--font-roboto);
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.06em;
        color: var(--text);
      }
      
      .footer-chevron {
        width: 16px;
        height: 16px;
        transition: transform 150ms ease;
      }
      
      .footer-panel {
        padding: 0 0 12px 0;
      }
      
      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .footer-link {
        font-family: var(--font-roboto);
        font-weight: 400;
        font-size: 14px;
        color: rgba(42, 42, 72, 0.6);
        text-decoration: none;
        transition: color 0.2s ease;
      }

      @media (hover: hover) {
        .footer-link:hover {
          color: var(--secondary);
        }
      }
      
      .footer-social {
        display: flex;
        justify-content: center;
        gap: 16px;
        padding-top: 8px;
      }
      
      .social-btn {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease;
      }

      @media (hover: hover) {
        .social-btn:hover {
          transform: scale(1.1);
        }
      }
      
      .footer-bottom {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .footer-meta {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      
      .footer-copy {
        margin: 0;
        font-family: var(--font-roboto);
        font-size: 10px;
        color: rgba(42, 42, 72, 0.6);
      }

@media (min-width: 1024px) {
  .footer {
    padding: 48px 0px;
    gap: 32px;
  }

  .footer-accordion {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
  }

  .footer-item {
    border-bottom: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .footer-item:nth-child(1),
  .footer-item:nth-child(2),
  .footer-item:nth-child(3),
  .footer-item:nth-child(4) {
    width: 160px;
  }

  .footer-item:nth-child(5) {
    width: 360px;
  }

  .footer-trigger {
    height: auto;
    cursor: default;
    justify-content: flex-start;
    padding: 0;
  }

  .footer-chevron {
    display: none;
  }

  .footer-title {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .footer-panel {
    display: block !important;
    padding: 0;
  }

  .footer-links {
    gap: 16px;
  }

  .footer-link {
    font-size: 12px;
    line-height: 16px;
  }

  @media (hover: hover) {
    .footer-link:hover {
      color: var(--secondary);
    }
  }

  .footer-bottom {
    width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .footer-meta {
    flex: 1;
    text-align: left;
  }

  .footer-social {
    flex: 1;
    justify-content: flex-end;
    gap: 24px;
    padding-top: 0;
  }

  .social-btn {
    width: 32px;
    height: 32px;
  }

  .footer-copy {
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>      