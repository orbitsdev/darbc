<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);

const closeOnClickOutside = (event) => {
  if (document.getElementById("logout-dropdown").contains(event.target)) {
    console.log('dasdas');

    isOpen.value = !isOpen.value;
  } else {
    if (isOpen.value == true) {
      isOpen.value = false;
    }
  }
};

onMounted(() => {
  document.addEventListener("click", closeOnClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeOnClickOutside);
});
</script>

<template>
  <section class="z-10">
    <aside class=" flex justify-between ">
      <div class="flex items-center ">
        <div class="logo flex mr-2">
          <img src="/assets/darbc.png" alt="" class="h-16 w-16" />
        </div>
        <div class="">
          <p
            class="leading-0 p-0 m-0 font-rubik font-extrabold text-4xl dr-text-purple-900"
          >
            DARBC
          </p>
          <p class="font-rubik p-0 m-0 leading-3 font-medium dr-text-purple-100">
            Land Management
          </p>
        </div>
      </div>
      <div
        :class="['flex items-center relative rounded-lg cursor-pointer pl-4  transition-all ease-in-out ', isOpen ? 'bg-gray-300 ' : '' ]"
        id="logout-dropdown"
        @click="toggle"
      >
        <div class="logo flex mr-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="h-11 w-11 rounded-full"
          />
        </div>

        <div class="relative flex">
          <div class="mr-2">
            <p class="leading-0 p-0 m-0 font-rubik font-medium uppercase">
              Maria Teresisa
            </p>
            <p :class="['font-rubik p-0 m-0 text-sm leading-3  ', isOpen ? 'tett-white': 'dr-text-purple-100']">
              Land Admin
            </p>
          </div>
          <div class="w-8 h-8 font-rubik items-center flex justify-center">
            <i class="fa-solid fa-caret-down mr-2 text-lg"></i>
          </div>
        </div>

        <div
          v-show="isOpen"
          class="absolute right-0 z-10 mt-48 w-48 origin-bottom-right rounded-md bg-gray-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
        >
          <!-- Active: "bg-gray-100", Not Active: "" -->
          <a
            href="#"
            class="block px-4 py-2 text-sm font-gray-900 font-rubik hover:bg-gray-400 hover:scale-x-110 rounded-lg transition-all ease-inoute font-base"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            >Your Profile</a
          >

          <a
            href="#"
            class="block px-4 py-2 text-sm font-gray-900 font-rubik hover:bg-gray-400 hover:scale-x-110 rounded-lg transition-all ease-inoute font-base"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-1"
            >Settings</a
          >

          <a
            href="#"
            class="block px-4 py-2 text-sm font-gray-900 font-rubik hover:bg-gray-400 hover:scale-x-110 rounded-lg transition-all ease-inoute font-base"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-2"
            >Sign out</a
          >
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped></style>
