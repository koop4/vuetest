import { mapGetters, mapActions } from "vuex";
import Todos from "@/components/Todos.vue";

export default {
  name: "home",
  components: {
    Todos
  },
  methods: { ...mapActions(["fetchTodos"]) },
  computed: { ...mapGetters(["allTodos"]) },
  created() {
    this.fetchTodos();
  }
};
