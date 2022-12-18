<script setup lang="ts">
</script>

<template>
  <header class="grid grid-row grid-cols-2 sticky top-0 bg-gray-300/75 text-black-50 rounded-b-md px-4 py-3 z-100 items-center place-items-start mb-2">
    <div class="text-xl">Products</div>
    <nav class="justify-self-end w-full">
      <div class="grid-row grid-cols-2 place-items-end">
        <div class="lg:text-xl font-bold"> Total: $0</div>
        <a href="/card" class=""><button class="a-btn whitespace-nowrap inline-flex justify-center items-center states [--un-bg-opacity:1]
      text-white typography-title-white typography-subtitle-white typography-text-white typography-subtitle-opacity-100
      typography-text-opacity-100 bg-$a-layer-color text-xs rounded-2xl"
                                         tabindex="0" style="--a-layer-color:hsla(var(--a-success),
                                       var(--un-bg-opacity)); --un-ring-color:hsl(var(--a-success));
                                       --a-spacing:1;"><!---->Card (0)<!----></button>
        </a>
      </div>
    </nav>
  </header>

  <main class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-gap-3 pt-4 mb-12">
    <div class="grid grid-col grid-cols-1 content-between bg-gray-100 border-1 border-gray-200 rounded-xl overflow-hidden">
      <a href="/product/1" class="grid-row grid-gap-3 p-1 [&amp;>*]:pointer-events-none">
        <div class="w-full h-48 max-h-48 bg-white p-8 rounded-md">
          <img class="w-full h-full object-contain" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops">
        </div>
        <div class="px-3">
          <div class="font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
          <div class="text-md text-black">$109.95</div>
          <p class="text-sm my-2">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in t... </p>
        </div>
      </a>
    </div>
      <div class="grid-row w-full px-3 pb-3">
        <div class="grid grid-col grid-gap-2 w-full"></div>
        <div class="flex flex-row"></div>


      </div>
  </main>
</template>




<style scoped lang="scss">
</style>
