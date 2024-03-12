import { systemAxios } from "@/services/axios.service";

export const state = {
  todos: [],
};

export const getters = {
  todos: (state) => state.todos,
};

export const mutations = {
  setTodos(state, newValue) {
    state.todos = newValue;
  },
};

export const actions = {
  fetchTodos({ commit }) {
    systemAxios.get("http://localhost:3333/api/roles").then((res) => {
      commit("setTodos", res.data.data);
    });
  },
};
