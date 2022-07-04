import { reactive, toRefs, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

interface MousePosition {
  x: number;
  y: number;
}

interface MousePositionReactive {
  x: Ref<number>;
  y: Ref<number>;
}

const useMousePosition = (): MousePositionReactive => {
  const pos: MousePosition = reactive({
    x: 0,
    y: 0,
  });

  const updatePosition = (e: MouseEvent) => {
    pos.x = e.pageX;
    pos.y = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updatePosition);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updatePosition);
  });

  return toRefs(pos);
};

export default useMousePosition;
