<script setup lang="ts">
import { computed } from "vue";

const indexActive = computed<string>(
  () => `/${document.location.pathname.split("/")[1]}`
);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header> Logo </el-header>
      <el-container>
        <el-aside width="300px">
          <el-menu
            router
            class="el-menu-vertical-demo"
            :default-active="indexActive"
          >
            <!-- @open="handleOpen" -->
            <!-- @close="handleClose" -->
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Components</span>
              </template>
              <el-menu-item-group title="Basic">
                <el-menu-item index="/button"> Button </el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Form">
                <el-menu-item index="/input">Input</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Other">
                <el-menu-item index="/loading">Loading</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><bell /></el-icon>
              <span>Notification</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Disabled</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.common-layout {
  min-height: 100vh;
}
</style>
