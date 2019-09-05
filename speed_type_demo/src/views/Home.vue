<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Game from '@/components/Game.vue'

export default {
  name: 'home',
  components: {
    Game
  }
}
</script>
