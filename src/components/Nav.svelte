<script>
  export let section;

  const scrollTo = X => {
    window.scrollTo(0, X);
  };
</script>

<nav
  class="fixed left-0 min-h-screen w-1/4 bg-dark-gray-900 hidden md:flex
  flex-col items-center justify-center p-10 border-r border-dark-gray-800">
  <button
    class="flex flex-row items-center justify-end text-gray-600 w-full py-2 mt-4
    focus:outline-none transition-text-color duration-300 ease-in-out"
    class:text-white={section === 'welcome'}
    on:click={() => scrollTo(0)}>
    WELCOME
  </button>
  <div class="flex flex-row items-center justify-end w-full">
    <div
      class="border border-welcome transition-width duration-300 ease-in-out w-0"
      class:w-full={section === 'welcome'} />
  </div>
  <button
    class="flex flex-row items-center justify-end text-gray-600 w-full py-2 mt-4
    focus:outline-none transition-text-color duration-300 ease-in-out"
    class:text-white={section === 'aboutMe'}
    on:click={() => scrollTo(window.innerHeight)}>
    ABOUT ME
  </button>
  <div
    class="flex flex-row items-center justify-end w-full transition-width
    duration-300 ease-in-out">
    <div
      class="border border-aboutme transition-width duration-300 ease-in-out w-0"
      class:w-full={section === 'aboutMe'} />
  </div>
  <button
    class="flex flex-row items-center justify-end text-gray-600 w-full py-2 mt-4
    focus:outline-none transition-text-color duration-300 ease-in-out"
    class:text-white={section === 'skills'}
    on:click={() => scrollTo(window.innerHeight * 2)}>
    SKILLS
  </button>
  <div
    class="flex flex-row items-center justify-end w-full transition-width
    duration-300 ease-in-out">
    <div
      class="border border-skills transition-width duration-300 ease-in-out w-0"
      class:w-full={section === 'skills'} />
  </div>
  <button
    class="flex flex-row items-center justify-end text-gray-600 w-full py-2 mt-4
    focus:outline-none transition-text-color duration-300 ease-in-out"
    class:text-white={section === 'projects'}
    on:click={() => scrollTo(window.innerHeight * 3)}>
    PROJECTS
  </button>
  <div
    class="flex flex-row items-center justify-end w-full transition-width
    duration-300 ease-in-out">
    <div
      class="border border-projects transition-width duration-300 ease-in-out
      w-0"
      class:w-full={section === 'projects'} />
  </div>
  <button
    class="flex flex-row items-center justify-end text-gray-600 w-full py-2 mt-4
    focus:outline-none transition-text-color duration-300 ease-in-out"
    class:text-white={section === 'contact'}
    on:click={() => scrollTo(window.innerHeight * 4)}>
    CONTACT
  </button>
  <div
    class="flex flex-row items-center justify-end w-full transition-width
    duration-300 ease-in-out">
    <div
      class="border border-contact transition-width duration-300 ease-in-out w-0"
      class:w-full={section === 'contact'} />
  </div>
</nav>
