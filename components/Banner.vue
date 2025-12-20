<template>
<section class="banner">
   <img class="banner-bg" src="/images/Banner.png" alt="banner-bg" />
   <div class="banner-content">
    <div class="banner-img-container">
  <div class="banner-topText">
    <p class="banner-title">EN SEVDİĞİNİZ ÜRÜNLER</p>
    <p class="banner-secondary-title">TEK TIKLA KAPINIZDA!</p>
  </div>

  <div class="banner-bottomText">
    <p class="banner-discount">60 %</p>
    <p class="banner-discount-text">DISCOUNT</p>
  </div>

  <button class="banner-button">SHOP NOW</button>
</div>

<img class="banner-img1" src="/images/Nivea.svg" alt="banner-icon1" />
<img class="banner-img" src="/images/Nivea-2.svg" alt="banner-icon" />

</div>    
</section>
</template>

<style scoped>

.banner {
  width: 100%;
  height: 514px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(0deg, rgba(19, 138, 150, 0.3), rgba(19, 138, 150, 0.3)),
    linear-gradient(88.28deg, rgba(16, 160, 174, 0.3) 14.56%, rgba(98, 214, 225, 0.3) 56.19%, rgba(21, 166, 181, 0.3) 98.69%);
}

.banner-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.banner-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  z-index: 0;
  pointer-events: none;
}

.banner-img1 {
  position: absolute;
  top: 15px;
  left: 54px;
  width: 250px;
  height: 248px;
  z-index: 2;
  pointer-events: none;
}

.banner-img {
  position: absolute;
  top: 356px;
  left: 140px;
  width: 251px;
  height: 141px;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
}

.banner-img-container {
  position: absolute;
  width: 242px;
  height: 238px;
  top: 244px;
  left: 54px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 32px;
  box-sizing: border-box;
  background: #fff;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.banner-img-container p {
  margin: 0;
}

.banner-topText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.banner-bottomText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding: 0;
}

.banner-title {
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #00106b;
}

.banner-secondary-title {
  font-family: var(--font-roboto);
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #00106b;
}

.banner-discount {
  font-family: var(--font-rubik);
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  color: #00106b;
}

.banner-discount-text {
  font-family: var(--font-rubik);
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #00106b;
}

.banner-button {
  width: 105px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 4px;
  background: #0099a8;
  cursor: pointer;
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  font-family: var(--font-roboto);
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
}

@media (min-width: 1024px) {
  .banner {
    height: 400px;
  }

  .banner-content {
    width: 1160px;
    height: 400px;
    margin: 0 auto;
    padding: 0;
    position: relative;
  }

  .banner-img-container {
    position: absolute;
    width: 274px;
    height: 246px;
    left: 435px;
    top: 51px;
    border-radius: 40px 0px;
    padding: 32px;
    gap: 12px;
    z-index: 1;
  }

  .banner-img1 {
    position: absolute;
    width: 296px;
    height: 294px;
    left: 659px;
    top: 60px;
    transform: none;
    z-index: 2;
    pointer-events: none;
  }

  .banner-img {
    position: absolute;
    width: 519px;
    height: 292px;
    left: 10px;
    top: 70px;
    transform: none;
    z-index: 2;
    pointer-events: none;
  }

  .banner-title {
    font-size: 16px;
    line-height: 16px;
  }

  .banner-secondary-title {
    font-size: 20px;
    line-height: 24px;
  }

  .banner-discount {
    font-size: 48px;
    line-height: 44px;
    margin-bottom: -8px;
  }

  .banner-discount-text {
    font-size: 34px;
    line-height: 38px;
  }

  .banner-button {
    width: 105px;
    height: 32px;
    font-size: 14px;
    line-height: 16px;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
  }
}

  
</style>