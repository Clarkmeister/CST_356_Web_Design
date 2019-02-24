<template>
  <div> 
        <span v-on:click='goToHome'>Home</span>
        <span v-on:click='goToPersons'>Persons</span>
        <span v-on:click='goToStudents'>Students</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHome: function() {
      this.$router.push({path: 'home'})
    },
    goToPersons: function() {
      this.$router.push({path: 'persons'})
    },
    goToStudents: function() {
      this.$router.push({path: 'students'})
    }
  }
}
</script>

<style>

span {
  color: white;
  font-family:'Courier New', Courier, monospace;
  font-size: 18pt;
  background-color: darkblue;
}

body {
  margin: 0;
  background-color: steelblue;
}

h1 {
  color: white;
  text-align: center
}

</style>
