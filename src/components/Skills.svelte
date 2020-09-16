<script>
  import Skill from "./skill.svelte";

  export let skills;
</script>

<section
  class="min-h-screen bg-dark-gray-900 border-b border-dark-gray-800 pt-8">
  <div class="flex flex-col justify-center max-w-screen-md w-11/12 mx-auto">
    <h1 class="text-5xl font-hairline text-white text-center">Skills</h1>
    <hr class="w-1/3 mx-auto mb-8" />
    <div class="flex flex-wrap content-start justify-center">
      {#each skills as skill}
        <Skill {skill} />
      {/each}
    </div>
  </div>
</section>
