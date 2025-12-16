<template>
    <header class="header">
        <!-- grey part -->
        <div class="top-bar">
            <div class="top-bar-content"></div>
        </div>

        <!-- white part -->
         <div class="main-bar">
            <div class="main-bar-content"></div>
         </div>

    </header>
</template>

<script setup>

</script>

<style scoped>

.header {
  background: white;
}

.top-bar {
  width: 100%;
  height: 32px;
  background: #505357;
}

.main-bar {
  width: 100%;
  height: 56px;
  background: white;
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