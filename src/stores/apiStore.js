import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: () => ({
        data: null,
        loading: false,
        error: null
    }),
    actions: {
        async fetchData(categoria, level, limit = 5) {
            this.loading = true;
            this.error = null;
            try {
                const url = `https://www.preguntapi.dev/api/categories/${categoria}?level=${level}&limit=${limit}`;
                const response = await axios.get(url);
                this.data = response.data;
                return response.data; // Retorna los datos para mayor flexibilidad
            } catch (error) {
                this.error = error;
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        }
    }
});