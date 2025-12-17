<template>
    <section class="hero">
        <div class="hero-banner">
            <img src="/images/Hero.svg" alt="hero banner"/>
        </div>

        <div class="hero-content">
            <div class="hero-text">
                <div class="hero-text-top">
                    <p class="hero-opening">
                NATURALS BY WATSONS
            </p>
            <h1 class="hero-title">
                The new 2021 collection
            </h1>
                </div>
                    <p class="hero-description">
                        Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.
                    </p>
            </div>
           
            

            <Button variant="primary" class="hero-button">
                SHOP NOW
            </Button>
        </div>

        <div class="sliders">
            <button class="slider-button-active" type="button"></button>
            <button class="slider-button" type="button"></button>
            <button class="slider-button" type="button"></button>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
    width: 100%;
  display: flex;
  flex-direction: column;

  background:
    linear-gradient(
      225deg,
      rgba(242, 240, 255, 0.00) 0%,
      rgba(242, 240, 255, 0.40) 55%,
      rgba(242, 240, 255, 0.85) 100%
    ),
    linear-gradient(
      156deg,
      #F2F0FF 0%,
      rgba(251, 251, 255, 0.85) 30%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 255, 255, 0.60) 72%,
      #F2F0FF 100%
    );
}



.hero-banner {
    width: 100%;
    height: 295px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-banner img {
    width: 100%;
    height: 100%;
    object-fit:scale-down;
    display: block;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 16px;
    }

.hero-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
}

.hero-text-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    width: 100%;
}

.hero-opening {
    margin: 0;
    font-family: var(--font-roboto);
    font-weight: 700;
    font-size: 12px;
    color: #8493a8;
    line-height: 16px;
    text-transform: uppercase;
}

.hero-title {
    margin: 0;
    font-family: var(--font-rubik);
    font-weight: 700;
    font-size: 24px;
    color: var(--text);
    line-height: 32px;
    letter-spacing: -0.2px;
}

.hero-description {
    margin: 0;
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 16px;
    color: var(--muted);
    line-height: 24px;
}
.hero-button {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    border: none;
    padding: 0 16px;
    font-family: var(--font-roboto);
    background: var(--primary);
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
}

.sliders {
    display: flex;
    align-items: center;
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
}

.slider-button {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    border: 0;
    padding: 0;
    background: rgba(132,147,168,0.4);
}
</style>