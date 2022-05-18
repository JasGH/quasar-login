import { api } from "src/boot/axios";
import { Cookies } from 'quasar'




export function onStart({ commit, getters }, ssrContext) {
    const cookies = process.env.SERVER
        ? Cookies.parseSSR(ssrContext)
        : Cookies // otherwise we're on client
    let token = cookies.get('token');
    if (token) {
        api.defaults.headers.common['Authorization'] = "Bearer " + token;
        commit('login', token);
    }
    else {
        commit("logout");
    }
}
