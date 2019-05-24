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
    let response;
    if (process.env.NODE_ENV === "development") {
      response = { data: todos };
    } else {
      response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    }
    commit("setTodos", response.data);
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
