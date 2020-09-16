<script>
  import { fade } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import Project from "./Project.svelte";

  export let fullstack;
  export let frontend;

  let selected = "fullstack";
  let show = true;
</script>

<section
  class="min-h-screen bg-dark-gray-900 pt-8 border-b border-dark-gray-800">
  <div class="text-5xl font-hairline text-white text-center">Projects</div>
  <hr class="mx-auto w-1/5 mb-4" />
  <div class="max-w-lg mx-auto">
    <div class="w-full flex flex-row items-center justify-center mb-4">
      <button
        class="text-gray-600 text-xl font-thin h-full px-4 focus:outline-none
        transition-text-color duration-500 ease-in-out"
        class:text-white={selected === 'fullstack'}
        on:click={() => {
          if (selected === 'fullstack') return;
          selected = 'fullstack';
          show = false;
        }}>
        Full Stack
      </button>
      <button
        class="text-gray-600 text-xl font-thin h-full px-4 focus:outline-none
        transition-text-color duration-500 ease-in-out"
        class:text-white={selected === 'frontend'}
        on:click={() => {
          if (selected === 'frontend') return;
          selected = 'frontend';
          show = false;
        }}>
        Frontend
      </button>
    </div>

    {#if selected === 'fullstack' && show}
      <div
        transition:fade={{ duration: 500, easing: quartInOut }}
        on:outroend={() => (show = true)}
        class="flex flex-wrap">
        {#each fullstack as project}
          <Project {project} />
        {/each}
      </div>
    {:else if selected === 'frontend' && show}
      <div
        transition:fade={{ duration: 500, easing: quartInOut }}
        on:outroend={() => (show = true)}
        class="flex flex-wrap">
        {#each frontend as project}
          <Project {project} />
        {/each}
      </div>
    {/if}
  </div>
</section>
