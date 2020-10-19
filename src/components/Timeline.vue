<template>
  <div class="flex-1 w-full flex flex-col rounded bg-purple-500 ">
      <div v-for="project in projects" :key="project.id" class="p-2 flex flex-col" >
          <div>
            <div class="text-xl text-white m-2">{{ project.name }}</div>
            <div class="text-sm text-white m-2">{{ project.description }}</div>
          </div>
          <!-- <div class="flex flex-row">
            <div v-for="todo in project.todos" :key="todo.id" class="w-32 h-32 rounded bg-teal-300 m-2 p-2">
                <div class="flex flex-col">
                    <div class="text-lg">{{ todo.name }}</div>
                    <div class="text-small">{{ todo.status }} - {{ formatUnix(todo.created) }}</div>
                </div>
            </div>
          </div> -->
          <Gantt :items="ganttItems(project.todos)"></Gantt>
      </div>
  </div>
</template>

<script>
import Gantt from './Gantt.vue';
import projects from '../data/projects';
import { formatUnix } from '../utils';
import { ref } from 'vue'

export default {
    components: {
        Gantt
    },
    setup(){
        
        const ganttItems = (todos) => {
            return todos.map(todo => {
                return {
                id: todo.id,
                name: todo.name,
                start: formatUnix(todo.created, "gantt"),
                end: formatUnix(todo.created, "gantt"),
                progress: 10
                }
            })
        }
        
        return {
            projects,
            formatUnix,
            ganttItems
        }
    }
}
</script>

<style>

</style>