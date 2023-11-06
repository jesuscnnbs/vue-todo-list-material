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
    async addTodo(task) {
      const newValue = {
        completed: false,
        task: task
      }
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValue),
      }
      try {
        const response = await fetch(url, options)
        const responseValue = await response.json()
        this.todoes.push(responseValue)
      } catch (error) {
        console.log("Error:", error);
      }
    },
    async updateTodo(id, newValue) {
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newValue),
      }
      try{
        await fetch(`${url}/${id}`, options)
        const itemIndex = this.todoes.findIndex((item) => item.id == id)
        this.todoes[itemIndex] = {
          ...this.todoes[itemIndex],
          completed: newValue.completed,
          task: newValue.task
        } 
      } catch (error) {
        console.log("Error:", error);
      }
    },
    async deleteTodo(id) {
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
      try{
        await fetch(`${url}/${id}`, options)
        const itemIndex = this.todoes.findIndex((item) => item.id == id)
        this.todoes.splice(itemIndex, 1)
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }
})
