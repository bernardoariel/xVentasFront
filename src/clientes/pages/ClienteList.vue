<script setup lang="ts">


const props = defineProps<{title?:string}>()


/* interface Props{
  title: string;
}
const props = defineProps<Props>() */

</script>
<template>
        <h1>{{ props.title  }}</h1>
</template>



<style scoped>

</style>