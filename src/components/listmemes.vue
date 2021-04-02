<template>
<header>
  <h1>{{ title }}</h1>
</header>
  <div class="total-show">
    <select @change="totalMemes" class="selector">
      <option value="">All</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
    </select>
  </div>
  <div class="row">
  <div v-for="me in meme" :key="me.id">
    <memeBox :me="me" />
  </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import memeBox from "./memeVista";

export default {
  components: {
    memeBox,
  },

  setup() {
    const store = useStore();
    const meme = computed(() => store.state.memes);

    onMounted(() => {
      store.dispatch("getMemes");
    });

    const totalMemes = (e) => {
      store.dispatch("getMemes", {
        total: e.target.value,
      });
    };

    return {
      title: store.state.titleApp,
      meme,
      totalMemes,
    };
  },
};
</script>

<style>
header {
  background-color:#222222;
  color: #fff;
  box-shadow: 0px 4px 1px 0px rgba(0,0,0,0.75);
  margin-top: 0;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
}

h1 {
  text-align: center;
}

.total-show {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.selector {
  border-radius: 6px;
  background-color: #eee;
  cursor: pointer;
  width: 120px;
  height: 25px;
}

.row {
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--background);
}
</style>
