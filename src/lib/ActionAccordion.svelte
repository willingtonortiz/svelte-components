<script lang="ts">
  import { animationSlide } from './slide';
  export let buttonText = '';
  export let isOpen = true;
  export let duration = 300;
</script>

<button on:click={() => (isOpen = !isOpen)}>
  <span class:isOpen>▲</span>
  {buttonText}
</button>

<div
  class="accordion-content"
  use:animationSlide={{ isOpen, duration }}
  on:animationEnd={() => {
    console.log('Animation finished');
  }}
>
  <slot />
</div>

<style>
  button {
    display: block;
    width: 100%;
    text-align: left;
    border: 1px solid #333;
    margin: 0;
  }

  span {
    margin-right: 5px;
    display: inline-block;
    transform: rotate(0.25turn);
    transition: transform 0.3s ease;
  }

  .isOpen {
    transform: rotate(0.5turn);
  }

  .accordion-content {
    border: solid 1px #333;
    border-top: 0;
  }
</style>
