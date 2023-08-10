import { defineStore } from "pinia";
import { ref } from "vue";
import Catalog from "../services/Catalog";
import { useMessageStore } from "./Message";
import { useCardStore } from "./Card";

export const useCatalogStore = defineStore("catalog", () => {
    const catalog = ref({});

    const message = useMessageStore();
    const card = useCardStore();

    const execute = (product, operation) => {
        switch (operation) {
            case "CREATED":
                addNewProduct(product);
                break;
            case "DELETED":
                removeItem(product);
                break;
            case "UPDATED":
                updateProduct(product);
                break;
            default:
                break;
        }
    };

    const removeItem = (product) => {
        const category = getCategory(product);
        if (category)
            category.product = category.product.filter(
                (item) => item.id != product.id
            );
    };

    const getCategory = ({ category_id }) => {
        return catalog.value.find((category) => category.id == category_id);
    };

    const addNewProduct = (product) => {
        const category = getCategory(product);

        if (category) category.product.push(product);
    };

    const updateProduct = (product) => {
        const category = getCategory(product);

        if (category) {
            const oldProduct = category.product.find(
                (item) => item.id == product.id
            );

            Object.assign(oldProduct, product);

            console.log(card.isProduct(oldProduct));
            if (card.isProduct(oldProduct)) {
                message.setMessagem({
                    data: [
                        `O produto ${oldProduct.name} foi atualizado veja novas informações 
                        Novo Preço: ${product.price}`,
                    ],
                });
            }
        }
    };

    const fethCatalog = () => {
        Catalog.fecthCatalog().then((response) => {
            catalog.value = response.data;
        });
    };

    return { catalog, fethCatalog, execute };
});
