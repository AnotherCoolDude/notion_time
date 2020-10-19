<template>
  <div class="w-full h-64 rounded bg-purple-300" ref="ganttContainer" ></div>
</template>

<script>
import Gantt from 'frappe-gantt'
import { ref, onMounted } from 'vue'
export default {
    props: {
        items: Array
    },
    setup(props) {
        const ganttContainer = ref(null)
        var gantt = {}

        onMounted(() => {
            gantt = new Gantt(ganttContainer.value, props.items)
            console.log(gantt)
        })

        return {
            ganttContainer
        }
    }
}
</script>

<style>

</style>