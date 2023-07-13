import { defineStore } from "pinia";
import { ref } from "vue";
export const useMessageStore = defineStore("message", () => {
    const message = ref({
        type: "alert-danger",
        data: [],
    });

    function setMessage(data) {
        message.value = Object.assign(message.value, data);
    }

    return { message, setMessage };
});
