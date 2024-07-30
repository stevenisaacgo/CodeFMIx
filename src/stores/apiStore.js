import { defineStore } from 'pinia';
import axios from 'axios';

export const useApiStore = defineStore('api', {
    state: () => ({
        data: null,
        loading: false,
        error: null
    }),
    actions: {
        async fetchData() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('https://www.preguntapi.dev/api/categories/{categoria}?level={level}&limit=5');
               /*  https://www.preguntapi.dev/api/categories/javascript?level=facil&limit=5 */
                
                this.data = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
});