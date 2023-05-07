<script lang="ts">
  export let isToggled = false;
  export let label = '';
  export let style = '';
</script>

<label {style}>
  <input type="checkbox" bind:checked={isToggled} />
  <div class="toggle" />
  {label}
</label>

<style>
  label {
    --width: 40px;
    --height: calc(var(--width) / 2);
    --radius: calc(var(--height) / 2);

    display: flex;
  }

  .toggle {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--radius);
    border: 1px solid #333;
    transition: background-color 0.3s ease-in-out;
    margin-right: 5px;
    background-color: var(--toggleBackgroundColor, tomato);
  }

  .toggle::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: var(--height);
    height: var(--height);
    border-radius: var(--radius);
    background-color: var(--toggleButtonColor, aliceblue);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }

  input {
    display: none;
  }

  input:checked + .toggle {
    background-color: var(--toggleCheckedBackgroundColor, mediumseagreen);
  }

  input:checked + .toggle::after {
    transform: translate3d(100%, 0, 0);
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.3);
  }
</style>
