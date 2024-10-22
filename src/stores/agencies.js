import { defineStore } from 'pinia';
import { getAll, deleteById, create, show, update } from "./../services/agenciesService"
import { ref } from 'vue';

export const useAgenciesStore  = defineStore('agencies', {
  state: () => {
    return {
      agenciesList: ref([]),
      agenciesById: ref({}),
      totalPages: ref(0),
      totalItems: ref(0),
      currentPage: ref(1),
      loading: false,
      response: ref({})
    };
  },
  getters: {
    getAgenciesList(state) {
      return state.agenciesList
    },
    getAgenciesById(state) {
      return state.agenciesById
    },
    getTotalPages(state) {
      return state.totalPages
    },
    getTotalItems(state) {
      return state.totalItems
    },
    getCurrentPage(state) {
      return state.currentPage
    },
  },
  actions: {
    async agenciesGetAll(limit, page){
      this.loading = true
      try {     
        this.response.value = await getAll(limit, page)
        this.agenciesList = this.response.value.agencies
        this.totalPages = this.response.value.totalPages
        this.totalItems = this.response.value.totalItems
        this.currentPage = this.response.value.currentPage
        this.loading = false
        } catch (error) {
            this.loading = false
            throw error
        }
    },

    async createAgencies(param){
      this.loading = true
      try {     
        this.response.value = await create(param)
        this.loading = false
        } catch (error) {
            this.loading = false
            throw error
        }
    },
    async deleteById(id){
      this.loading = true
      try {     
        this.response.value = await deleteById(id)
        this.loading = false
        } catch (error) {
            this.loading = false
            throw error
        }
    },
    async agenciesShow(id){
      this.loading = true
      try {     
        this.response.value = await show(id)
        this.agenciesById = this.response.value.agencies
        this.loading = false
        } catch (error) {
            this.loading = false
            throw error
        }
    },

    async agenciesUpdate(id, params){
      this.loading = true
      try {     
        this.response.value = await update(id, params)
        this.loading = false
        return this.response.value.agencies
        } catch (error) {
            this.loading = false
            throw error
        }
    }
  },
});
