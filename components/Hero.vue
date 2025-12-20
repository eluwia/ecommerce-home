<template>
    <section class="hero">
      <button class="hero-nav hero-nav-prev" type="button" aria-label="Previous">
        <img class="hero-nav-icon" src="/icons/left-chevron.png" alt="" aria-hidden="true" />
      </button>
  
      <div class="hero-banner">
        <img src="/images/Hero.svg" alt="hero banner" />
      </div>
  
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-opening">NATURALS BY WATSONS</p>
          <h1 class="hero-title">The new 2021 collection</h1>
          <p class="hero-description">
            Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.
          </p>
        </div>
  
        <Button class="hero-button">SHOP NOW</Button>
  
        <div class="sliders">
          <button class="slider-button-active" type="button"></button>
          <button class="slider-button" type="button"></button>
          <button class="slider-button" type="button"></button>
        </div>
      </div>
  
      <div class="hero-right">
        <img src="/icons/desktop-hero.svg" alt="" />
      </div>
  
      <button class="hero-nav hero-nav-next" type="button" aria-label="Next">
        <img class="hero-nav-icon" src="/icons/right-chevron.png" alt="" aria-hidden="true" />
      </button>
    </section>
  </template>
  
  <script setup>
  import Button from '@/ui/Button.vue'
  </script>
  
  <style scoped>
  .hero {
    width: 100%;
    position: relative;
    background: linear-gradient(163deg, #F2F0FF 0%, rgba(251, 251, 255, 0.9) 45%, #F2F0FF 100%);
    overflow-x: hidden;
  }
  
  .hero-nav,
  .hero-right {
    display: none;
  }
  
  .hero-banner {
    width: 100%;
    height: 295px;
    padding: 16px;
    box-sizing: border-box;
  }
  
  .hero-banner img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .hero-content {
    padding: 16px;
  }
  
  .hero-text {
    margin-bottom: 24px;
  }
  
  .hero-opening {
    margin: 0 0 8px 0;
    font-family: var(--font-roboto);
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #8493a8;
    text-transform: uppercase;
  }
  
  .hero-title {
    margin: 0 0 16px 0;
    font-family: var(--font-rubik);
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: var(--text);
  }
  
  .hero-description {
    margin: 0;
    font-family: var(--font-roboto);
    font-size: 16px;
    line-height: 24px;
    color: var(--muted);
  }
  
  .hero-button {
    width: 100%;
    height: 32px;
    margin-bottom: 12px;
  }
  
  .sliders {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 8px 0 16px;
  }
  
  .slider-button-active {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    border: 0;
    padding: 0;
    background: var(--gray);
    cursor: pointer;
  }
  
  .slider-button {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    border: 0;
    padding: 0;
    background: rgba(132, 147, 168, 0.4);
    cursor: pointer;
  }
  
  @media (min-width: 1024px) {
    .hero {
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
      background: linear-gradient(87.81deg, #F2F0FF 35.04%, rgba(255, 255, 255, 0.67) 53.63%, rgba(252, 252, 255, 0.96) 64.78%, #F2F0FF 90.91%);
      overflow-x: visible;
    }
  
    .hero-banner {
      display: none;
    }
  
    .hero-content {
      width: 580px;
      padding-left: 110px;
    }
  
    .hero-opening {
      font-size: 14px;
    }
  
    .hero-title {
      font-size: 34px;
      line-height: 48px;
      color: #2A2A48;
    }
  
    .hero-description {
      width: 600px;
      color: #485363;
    }
  
    .hero-button {
      width: 140px;
      height: 40px;
      margin-bottom: 40px;
    }
  
    .sliders {
      justify-content: flex-start;
      padding: 0;
    }
  
    .hero-right {
      display: block;
      width: 660px;
      height: 400px;
      padding-right: 80px;
    }
  
    .hero-right img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
    .hero-nav {
      display: flex;
      align-items: center;
      justify-content: center;
  
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
  
      width: 56px;
      height: 56px;
  
      border-radius: 999px;
      border: 0;
      padding: 0;
  
      background-color: rgba(255, 255, 255, 0.35);
  
      cursor: pointer;
      z-index: 20;
      overflow: hidden;
      line-height: 0;
  
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  
      transition: transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease;
    }
  
    .hero-nav-prev {
      left: 32px;
      opacity: 0.35;
    }
  
    .hero-nav-next {
      right: 32px;
      opacity: 1;
    }
  
    .hero-nav-icon {
      width: 40px;
      height: 40px;
      display: block;
      object-fit: contain;
      pointer-events: none;
    }
  
    .hero-nav-prev .hero-nav-icon {
      transform: translateX(-1px);
    }
  
    .hero-nav-next .hero-nav-icon {
      transform: translateX(1px);
    }
  
    .hero-nav-prev:hover {
      transform: translateY(calc(-50% - 2px));
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
      opacity: 0.35;
    }
  
    .hero-nav-next:hover {
      transform: translateY(calc(-50% - 2px));
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
      opacity: 1;
    }
  }
  </style>
  