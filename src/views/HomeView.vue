<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, toRefs } from "vue";
import useMousePosition from "@/hooks/useMousePosition";

const { x, y } = useMousePosition();
</script>

<template>
  <main>
    <div>
      <div>x: {{ x }}</div>
      <div>y: {{ y }}</div>
    </div>
  </main>
</template>
