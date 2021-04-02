<template>
  <div class="meme">
    <p>{{ me.name }}</p>
    <img :src="me.url" :alt="me.name" />
  </div>
</template>

<script>
export default {
  props: {
    me: Object,
  },
};
</script>

<style>
.meme {
  padding: 2px;
  width: 200px;
  height: 250px;
  background-color: var(--primary);
  margin: 2px;
  border-radius: 4px;
}

.meme:hover {
  background-color: rgb(240, 260, 280);
}

.meme img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 70%;
  background-size: cover;
  overflow: hidden;
}

.meme p {
  width: 100%;
  margin-bottom: 10px;
}
</style>
