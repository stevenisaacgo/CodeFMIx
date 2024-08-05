import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore('apiStore', {
    state: () => ({
        data: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchQuizData(category, difficulty, limit = 1) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`https://www.preguntapi.dev/api/categories/${category}`, {
                    params: { level: difficulty, limit },
                });
                this.data = response.data;
            } catch (err) {
                this.error = err.response ? err.response.data : err.message;
                console.error('Error fetching quiz data:', this.error);
            } finally {
                this.loading = false;
            }
        },
    },
});