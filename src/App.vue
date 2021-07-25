<template>
  <div id="app">
    <RecordInput />
    <RecordOutput />
  </div>
</template>

<script>
import RecordInput from './components/RecordInput.vue'
import RecordOutput from './components/RecordOutput.vue'

export default {
  name: 'App',
  components: {
    RecordInput,
    RecordOutput
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: #23272b;
}

html,body{
  margin:0;
  padding:0;
  width:100vw;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
