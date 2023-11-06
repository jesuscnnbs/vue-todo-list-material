import { defineStore } from 'pinia'

const url = 'http://localhost:3001/todos';

export const useTodoStore = defineStore('todoes', {
  state: () => {
    return {
      todoes: [],
    }
  },
  actions: {
    async getTodoes() {
      try{
        const options = {
          method: 'GET',
        }
        const response = await fetch(url, options)
        const test = await response.json();
        this.todoes = test;
      } catch (error) {
        console.log(error)
      }
    },
    async updateTodo(id, newValue) {
      console.log('PUT',id, newValue)
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValue),
      }
      try{
        const response = await fetch(`${url}/${id}`, options)
        console.log("Success:", response);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }
})
