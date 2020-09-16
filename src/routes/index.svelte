<script context="module">
  export async function preload(page, session) {
    const a = await this.fetch(
      `https://portfolio-strapi-289321.wl.r.appspot.com/projects?type=fullStack`
    );
    const fullstack = await a.json();

    const b = await this.fetch(
      `https://portfolio-strapi-289321.wl.r.appspot.com/projects?type=frontend`
    );
    const frontend = await b.json();

    const c = await this.fetch(
      `https://portfolio-strapi-289321.wl.r.appspot.com/techs?type=skill`
    );
    const skills = await c.json();

    return { fullstack, frontend, skills };
  }
</script>

<script>
  import { onMount } from "svelte";
  import Tailwind from "../css/Tailwind.svelte";
  import Nav from "../components/Nav.svelte";
  import Welcome from "../components/Welcome.svelte";
  import About from "../components/About.svelte";
  import Skills from "../components/Skills.svelte";
  import Projects from "../components/Projects.svelte";
  import Contact from "../components/Contact.svelte";

  export let fullstack;
  export let frontend;
  export let skills;

  let section = "welcome";

  onMount(() => {
    document.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const screen = window.innerHeight;
      switch (true) {
        case screen * 4 <= scroll && scroll < screen * 5:
          section = "contact";
          break;
        case screen * 3 <= scroll && scroll < screen * 4:
          section = "projects";
          break;
        case screen * 2 <= scroll && scroll < screen * 3:
          section = "skills";
          break;
        case screen <= scroll && scroll < screen * 2:
          section = "aboutMe";
          break;
        case scroll < screen:
          section = "welcome";
          break;
      }
    });
  });
</script>

<Tailwind />

<main>
  <Nav {section} />
  <div class="w-full md:w-3/4 ml-auto">
    <Welcome />
    <About />
    <Skills {skills} />
    <Projects {fullstack} {frontend} />
    <Contact />
  </div>
</main>
