import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardStore = defineStore("card", () => {
    const card = ref([]);

    function addItem(item) {
        item.product_id = item.id;
        this.card.push(item);
    }

    const isProduct = ({ id }) => {
        return card.value.find((item) => item.id == id);
    };

    function removeItem(id) {
        let index = card.value.findIndex((element) => element.id == id);
        card.value.splice(index, 1);
    }

    function clearCard() {
        card.value = [];
    }

    return { card, addItem, removeItem, clearCard, isProduct };
});
