import { defineStore } from "pinia";
import { ref } from "vue";
export const useMessageStore = defineStore("message", () => {
    const message = ref({
        type: "alert-danger",
        data: [],
    });

    function setMessagem(data) {
        message.value = Object.assign(message.value, data);
    }

    return { message, setMessagem };
});
