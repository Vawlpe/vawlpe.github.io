<template>
  <div class="carousel">
    <div class="viewport">
      <ol
        class="track"
        :style="[
          `translate: ${offset}%`,
          `width: ${(props.itemsCount * 100) / props.itemsToShow}%`,
        ]"
      >
        <slot />
      </ol>
    </div>

    <button class="nav prev hover:text-violet-400" @click="movePrev">
      <IconsOutlineGreaterThanCircle class="w-10" />
    </button>
    <button class="nav next hover:text-violet-400" @click="moveNext">
      <IconsOutlineGreaterThanCircle class="w-10 rotate-180" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  itemsCount: number
  itemsToShow: number
  itemsToScroll: number
  wrap?: boolean
}>()

const offset = ref(0)
const moveNext = () => {
  if (props.itemsCount <= props.itemsToShow) return
  if (
    offset.value <=
    -((100 / props.itemsCount) * (props.itemsCount - props.itemsToShow))
  ) {
    if (props.wrap) {
      offset.value = 0
    }
  } else offset.value -= (props.itemsToScroll * 100) / props.itemsCount
  if (
    offset.value <=
    -((100 / props.itemsCount) * (props.itemsCount - props.itemsToShow))
  ) {
    offset.value = -(
      (100 / props.itemsCount) *
      (props.itemsCount - props.itemsToShow)
    )
  }
}
const movePrev = () => {
  if (props.itemsCount <= props.itemsToShow) return
  if (offset.value >= 0) {
    if (props.wrap) {
      offset.value = -(
        (100 / props.itemsCount) *
        (props.itemsCount - props.itemsToShow)
      )
    }
  } else offset.value += (props.itemsToScroll * 100) / props.itemsCount
  if (offset.value >= 0) {
    offset.value = 0
  }
}
</script>

<style lang="scss">
.carousel {
  position: relative;
  > .viewport {
    height: 25rem;
    position: relative;
    overflow: hidden;
    > .track {
      transition: translate 500ms;
      position: relative;
      list-style-type: none;
      display: flex;
      height: 100%;
      align-items: center;
      > .slide {
        flex: 1;
        height: 100%;
      }
    }
  }
  > .nav {
    position: absolute;
    top: calc(50% - 1.25rem);
    background-color: rgba(128, 128, 128, 0.5);
    border-radius: 50%;
    border-width: 4px;
    border-color: currentColor;
    transition: scale 300ms, color 300ms;
    &:hover {
      scale: 110%;
    }
    &.prev {
      left: -4rem;
    }
    &.next {
      right: -3rem;
    }
  }
}
</style>
