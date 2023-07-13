import { defineStore } from "pinia";
import { ref } from "vue";
import Auth from "../services/Auth";

export const useAuthStore = defineStore("auth", () => {
    const user = ref({});

    const token = ref([]);

    function setToken(data) {
        token.value = data;
    }

    function fetchUser() {
        Auth.Me().then((response) => {
            user.value = response.data;
        });
    }

    function logout() {
        user.value = {};
    }

    return { user, token, fetchUser, setToken, logout };
});
