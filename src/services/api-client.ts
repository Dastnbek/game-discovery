import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '23f6f7d25c854b9c851aa23c810a6398',

    }
})