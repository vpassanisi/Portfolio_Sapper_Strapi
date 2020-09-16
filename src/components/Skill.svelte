<script>
  export let skill;
</script>

<a
  class="bg-dark-gray-700 transition-bg-color duration-300 ease-in-out
  hover:bg-dark-gray-600 border text-white p-2 m-2 rounded w-32"
  href={`${skill.link}`}
  target="_blank">
  <div class="text-center font-thin text-xl mb-2">{skill.name}</div>
  <div
    class="h-10 w-full bg-contain bg-center bg-no-repeat"
    style={`background-image: url('${skill.icon}')`} />
</a>
