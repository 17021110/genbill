<template>
    <div class="app-layout tw-relative">
      <div class="app-container tw-h-full" >
        <div class="tw-w-full tw-h-[80px] tw-fixed tw-top-[0px] tw-bg-[#fff] tw-shadow-sm tw-flex tw-justify-between tw-items-center">
          <div class="tw-py-3 tw-px-6">
            <img class="tw-h-[60px]" alt="logo" :src="Logo"/>
          </div>
        </div>
        <div class="screen"><slot></slot></div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from "vue";
import Logo from "@/assets/images/logo.png"
  
  </script>
  
  <style scoped lang="scss">
  .app-container {
    transition: ease-in-out 0.5s;
    background-color: #f5f7fe;
    height: 100vh;
    overflow: auto;
    padding-top: 80px;
  }
  
  .screen {
    max-width: 100%;
    width: 100%;
  }

  </style>
  