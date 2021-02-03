<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ meni }}</h2>
    <h2>{{ sampleData }}</h2>
    <h2>{{ displayName }}</h2>
    <button @click="changeValue">click</button>

    <h1>{{componentData}}</h1>
    <!-- <h3 v-for="data in componentData" :key="data.id">{{data.name}}</h3> -->

    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      meni: '2',
      componentData: "no data"
    };
  },
  computed: {
    sampleData() {
      return this.$store.state.sampleData;
    },
    displayName() {
      return this.$store.state.name;
    },
    displayApiData(){
      return this.$store.state.apiData
    }
  },
  methods: {
    changeValue  () {
      this.meni = '2213';
      this.$store.dispatch('changeName');
      const res = this.$store.dispatch("apiData");
      console.log(res);
      this.componentData = this.$store.state.apiData
    },
  },
  beforeCreate() { console.log('beforeCreate'); },
  created() { console.log('created');
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      this.meni = response.data;
    }); },
  beforeMount() { console.log('beforeMount'); },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() { console.log('beforeUpdate'); },
  updated() { console.log('updated'); },
  beforeDestroy() { console.log('beforeDestroy'); },
  destroyed() { console.log('destroyed'); },

};
</script>

<style scoped>
.about {
  background: black;
}
</style>
