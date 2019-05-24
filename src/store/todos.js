import axios from "axios";
import todos from "../mock/todos";
const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const mytrue = true;
    if (mytrue) {
      commit("setTodos", todos);
    } else {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    }
  }
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
