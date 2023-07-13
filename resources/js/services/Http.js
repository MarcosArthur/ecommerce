import axios from "axios";
import router from "../routes";
import { useAuthStore } from "../store/Auth";
import { useMessageStore } from "../store/Message";

axios.interceptors.request.use(
    (config) => {
        const authUserStore = useAuthStore();
        const token = authUserStore.token?.access_token;
        if (token) {
            config.headers["Authorization"] = "Bearer " + token;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // console.log(error);
        // console.log(error.response.status);
        // console.log(router.currentRoute.value.name);
        // console.log(router.currentRoute.value.name !== "auth");
        // console.log(error.response.status === 401);

        const authUserStore = useAuthStore();
        const messageStore = useMessageStore();
        // console.log(router.currentRoute.value.name);
        if (
            error.response.status === 401 &&
            router.currentRoute.value.name != "auth"
        ) {
            router.push({ path: "/auth", replace: true });
            authUserStore.setToken([]);
        }

        if (error.response?.status === 422) {
            messageStore.setMessage({ data: error.response.data });
        }

        return Promise.reject(error);
    }
);

export default async (
    base,
    path,
    httpMethod = "get",
    data = {},
    headers = {}
) => {
    let url = `/api/${base}/${path}`;

    const request = await axios({
        url: url,
        method: httpMethod,
        data: data,
        headers: headers,
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return request;
};
