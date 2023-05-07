<script>
  import Toggle from '$lib/Toggle.svelte';
  import BetterAccordion from '$lib/ActionAccordion.svelte';

  let isToggled = false;
  let duration = 300;

  function updateDuration() {
    duration = 1000;
  }
</script>

<div>
  <h1>Toggle</h1>

  <Toggle bind:isToggled label="Beta" />

  <Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor:red" />
</div>

<div>
  <h1>BetterAccordion</h1>

  <button on:click={updateDuration}>Update duration</button>

  <BetterAccordion buttonText="Title" {duration}>
    <div style="padding: 1rem">
      <BetterAccordion buttonText="Title" {duration}>
        <div style="padding: 1rem">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eveniet quae
            quas veritatis! Cumque et itaque modi nostrum quo!
          </span>
        </div>
      </BetterAccordion>

      <BetterAccordion buttonText="Title" {duration}>
        <div style="padding: 1rem">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eveniet quae
            quas veritatis! Cumque et itaque modi nostrum quo!
          </span>
        </div>
      </BetterAccordion>

      <BetterAccordion buttonText="Title" {duration}>
        <div style="padding: 1rem">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta eveniet quae
            quas veritatis! Cumque et itaque modi nostrum quo!
          </span>
        </div>
      </BetterAccordion>
    </div>
  </BetterAccordion>
</div>

{#if isToggled}
  <p>Toggle is on</p>
{:else}
  <p>Toggle is off</p>
{/if}
