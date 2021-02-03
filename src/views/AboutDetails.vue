<template>
<div>
  <h1>VUE Details</h1>
  <h3>{{data1}}</h3>
</div>
</template>

<script>
export default {
    data() {
        return{
            data1: "2"
        }
    },
    mounted() {
        this.data1 = this.$route.params.id 
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>