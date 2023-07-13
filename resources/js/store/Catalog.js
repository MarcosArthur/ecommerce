import { defineStore } from "pinia";
import { ref } from "vue";
import Catalog from "../services/Catalog";

export const useCatalogStore = defineStore("catalog", () => {
    const catalog = ref([]);

    function fethCatalog() {
        Catalog.fecthCatalog().then((response) => {
            catalog.value = response.data;
        });
    }

    return { catalog, fethCatalog };
});
