import { createStore } from "vuex";

export default createStore({
  state: {
    titleApp: "Lista de Memes",
    memes: [],
  },

  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    },
  },

  actions: {
    async getMemes({ commit }, params) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();

        if (!params?.total) {
          commit("setMemes", result.data.memes);
        } else {
          const resultado = [];
          result.data.memes.forEach((meme, index) => {
            if (index <= params.total) resultado.push(meme);
          });
          commit("setMemes", resultado);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
