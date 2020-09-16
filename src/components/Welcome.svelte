<script>
  import { fade, scale } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import { onMount } from "svelte";

  let loaded = false;

  const getBgUrl = el => {
    const bg = el.style.backgroundImage;
    return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
  };

  onMount(() => {
    var image = document.createElement("img");
    image.src = getBgUrl(document.getElementById("bg"));
    image.onload = () => (loaded = true);
  });
</script>

<section
  id="bg"
  class="relative flex items-center justify-center min-h-screen bg-black
  bg-cover bg-center bg-no-repeat"
  style="background-image: url('https://source.unsplash.com/E0AHdsENmDg')">
  <!-- <div class="absolute inset-0 w-full h-full bg-black bg-opacity-50" /> -->
  {#if loaded}
    <div
      in:scale={{ delay: 300, duration: 2000, start: 1.2 }}
      class="relative flex flex-col items-center justify-center w-11/12 md:w-1/2
      p-8 border border-white bg-black bg-opacity-75 text-white z-10">
      <div class="text-5xl font-hairline">Vincent</div>
      <div class="text-5xl font-hairline">Passanisi</div>
      <div class="text-white text-center text-xl font-hairline my-4">

        <div>Software Engineer from Santa Cruz, CA.</div>
        <div>JavaScript, Go, Python, React, Vue, and more.</div>
      </div>

      <div class="mb-4">
        <a
          class="text-xl font-hairline mr-10 underline"
          href="https://drive.google.com/file/d/1dsJmiuSQQ-tJ52TCxLgL5QhXnVIGRmKe/view?usp=sharing"
          target="_blank">
          View My Resume
        </a>
        <a
          class="text-xl font-hairline underline"
          href="mailto:vpassanisi@gmail.com"
          target="_blank">
          Contact Me
        </a>
      </div>

      <hr class="w-1/2 mb-4" />

      <div class="flex flex-row">
        <a
          class="mr-8"
          href="https://www.linkedin.com/in/vinny-passanisi-7a9966b8/">
          <svg
            class="h-12 w-12"
            width="60px"
            height="60px"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage">
              <g
                sketch:type="MSLayerGroup"
                transform="translate(-720.000000, 0.000000)" />
              <g
                sketch:type="MSLayerGroup"
                transform="translate(-716.000000, 1.000000)"
                stroke="#fff"
                stroke-width="2">
                <g
                  transform="translate(725.004485, 5.500000)"
                  sketch:type="MSShapeGroup">
                  <path
                    d="M35.9955151,27.6266598 C35.9955151,23.8394326
                    33.0511715,20.8297982 29.7726613,20.8297982
                    C27.2676024,20.8297982 25.0529201,20.8297982
                    23.5815904,23.9999995 C23.3099556,24.5852775
                    22.9955155,26.2895184 22.9955155,27.1324171
                    L22.9955155,43.4999995 L15.036777,43.4999989
                    L15.0367767,22.7102582 L15.0367767,12.455873
                    L23.3012671,12.455873 L23.7089346,16.5 L23.8873426,16.5
                    C25.0805776,14.5783603 27.7924258,12.455873
                    32.6850041,12.455873 C38.6490801,12.455873
                    43.9955153,17.1766025 43.9955153,25.8297979
                    L43.9955153,43.4999995 L35.9955151,43.4999995
                    L35.9955151,27.6266598 Z M4.32081087,8.76648024
                    C1.71699591,8.76648024 0.036776724,6.92405932
                    0.036776724,4.64751022 C0.036776724,2.3156217
                    1.7713812,0.525677812 4.42767319,0.525677812
                    C7.08396519,0.525677812 8.71170734,2.31466757
                    8.76609263,4.64751022 C8.76704675,6.92405932
                    7.08491932,8.76648024 4.32081087,8.76648024
                    L4.32081087,8.76648024 Z M0.995515537,43.4999995
                    L0.995515303,12.4558734 L7.98371812,12.4558737
                    L7.98371835,43.4999999 L0.995515537,43.4999995 Z"
                    id="Shape" />
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://twitter.com/VinnyPassanisi">
          <svg
            class="h-12 w-12 mr-8"
            width="60px"
            height="60px"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage">
              <g sketch:type="MSLayerGroup" />
              <g
                sketch:type="MSLayerGroup"
                transform="translate(4.000000, 1.000000)"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <g
                  transform="translate(0.000000, 10.000000)"
                  sketch:type="MSShapeGroup">
                  <path
                    d="M45.710328,7.26461023 C45.710328,7.26461023
                    49.7891594,6.93752192 51.4260032,5.69777149
                    C51.4260032,5.69777149 51.0336919,7.12495455
                    46.1255745,11.6404882 C46.1255745,11.6404882
                    47.7781108,36.0055044 22.5977549,41.9727222
                    C22.5977549,41.9727222 9.82771721,44.7413348
                    0.573996756,37.6789225 C0.573996756,37.6789225
                    10.2610704,39.4282937 15.711181,33.3103948
                    C15.711181,33.3103948 8.68096083,33.3826727
                    6.45746056,26.1034266 C6.45746056,26.1034266
                    9.11189981,26.6853253 10.6895952,25.9576457
                    C10.6895952,25.9576457 2.72627742,24.2817775
                    2.86992375,15.4724441 C2.86992375,15.4724441
                    5.02220441,17.0748093 6.95841203,16.7832475
                    C6.95841203,16.7832475 -0.214247369,10.5930706
                    4.23275317,2.87770677 C4.23275317,2.87770677
                    13.8437788,14.411551 25.7555598,13.7267481
                    C25.5479366,12.9010645 25.4356751,12.0361793
                    25.4356751,11.141893 C25.4356751,5.40743468
                    30.0190793,0.755920455 35.6719848,0.755920455
                    C38.5280117,0.755920455 41.1112314,1.94421879
                    42.9689767,3.85897169 C44.330599,3.88224763
                    47.1310988,3.63601262 49.9279773,1.60365494
                    C49.9279773,1.60487999 50.0885232,3.82589534
                    45.710328,7.26461023 L45.710328,7.26461023 Z"
                    id="Shape" />
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://github.com/vpassanisi?tab=repositories">
          <svg
            class="h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            style="enable-background:new 0 0 256 256;"
            xml:space="preserve">
            <style type="text/css">
              .st0 {
                fill: none;
                stroke: #fff;
                stroke-width: 8;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
              }
            </style>
            <path
              class="st0"
              d="M128.1,222.073"
              style="fill: none; stroke: #fff; stroke-linecap: round;
              stroke-linejoin: round; stroke-miterlimit: 10; stroke-width: 8;" />
            <path
              class="st0"
              d="M130.164,226.986c63.917-3.557,108.667-52.057,97.259-116.5c-9.288-52.47-60.722-87.613-112.739-80.577
              C61.952,37.041,21.39,85.877,27.386,139.004c5.689,47.857,35.128,70.23,59.685,80.335c5.717,2.353,13.401,5.785,15.997,5.229
              c2.596-0.556,1.763-14.95,1.763-21.889c-16,2.459-21.475-3.841-24.875-7.563c-3.857-4.222-6.125-8.563-10.063-14.938
              s-11.063-4.875-11.813-8.563s15-2.688,26.313,11.25c8.188,10.146,16.928,7.089,21.625,4.188c0.154-1.612,0.526-3.775,1.438-6.188
              c0.967-2.557,3.625-4.104,3.208-5.854c-0.417-1.75-21.804-0.577-34-17.667c-8.809-12.344-9.129-26.955-5.667-37.833
              c2.322-7.297,6.196-12.443,8.833-15.417c-1.011-2.162-2.513-6.109-2.583-11.25c-0.076-5.549,1.554-9.796,2.583-12
              c3.492,0.104,8.54,0.644,14.25,2.667c5.469,1.937,9.593,4.542,12.333,6.583c4.975-1.671,12.218-3.489,21.083-3.667
              c10.135-0.203,18.344,1.819,23.667,3.583c2.616-2.336,6.987-5.648,13.167-7.917c4.489-1.648,8.518-2.229,11.5-2.417
              c1.143,2.165,3.075,6.519,3.167,12.332c0.085,5.351-1.426,9.47-2.416,11.664c2.867,3.459,7.394,9.875,9.502,18.995
              c0.751,3.249,4.857,20.981-6.996,36.24c-12.408,15.974-33.06,13.524-33.992,15.73c-0.932,2.206,3.964,6.297,6.266,14.877
              c2.302,8.58,1.327,24.979,1.327,24.979"
              style="fill: none; stroke: #fff; stroke-linecap: round;
              stroke-linejoin: round; stroke-miterlimit: 10; stroke-width: 8;" />
          </svg>
        </a>
      </div>
    </div>
  {/if}
</section>
