<script setup lang="ts">
import { ref } from "vue";

const input = ref("");
</script>

<template>
  <el-card class="box-card mb-1">
    <h3 class="mb-1">Basic</h3>
    <el-input v-model="input" placeholder="Please input" />
  </el-card>

  <el-card class="box-card mb-1">
    <h3 class="mb-1">Disabled Input</h3>
    <el-input v-model="input" disabled placeholder="Please input" />
  </el-card>

  <el-card class="box-card mb-1">
    <h3 class="mb-1">Sizes</h3>
    <div class="mb-1">
      <el-input v-model="input" size="small" placeholder="Please input" />
    </div>

    <div class="mb-1">
      <el-input v-model="input" placeholder="Please input" />
    </div>

    <div class="mb-1">
      <el-input v-model="input" size="large" placeholder="Please input" />
    </div>
  </el-card>
</template>

<style></style>
