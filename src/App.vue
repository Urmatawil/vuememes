<template>
  <div class="container">
    <listmeme />
  </div>
</template>

<script>
import listmeme from "./components/listmemes";

export default {
  name: "App",
  components: {
    listmeme,
  },
};
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --primary: rgb(200, 220, 240);
  --background: #fff;
}

.dark {
  --background: #222222;
}

html {
  background-color: var(--background);
}

.container {
  background-color: var(--background);
  overflow: hidden;
  text-align: center;
}
</style>
