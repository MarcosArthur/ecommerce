import { defineStore } from "pinia";
import { ref } from "vue";
import Orders from "../services/Order";
export const useOrdersStore = defineStore("orders", () => {
    const orders = ref({});

    function fetchOrders() {
        Orders.GetOrders().then((response) => {
            orders.value = response.data;
        });
    }

    return { orders, fetchOrders };
});
