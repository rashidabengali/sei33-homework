<template>
  <div class="game">
    <h1 id="v-step-0">SPEED TYPE DEMO</h1>
    <!-- Refs are Vue instance properties used to register or indicate a reference to HTML elements or child elements in the template of your application.

    If a ref attribute is added to an HTML element in your Vue template, you’ll then be able to reference that element or even a child element in your Vue instance. You can also access the DOM element directly, too; it is a read-only attribute and returns an object. -->
    <h3 class="v-step-1" id="preventcopy" ref="heading"></h3>
    <textarea class="inputText" placeholder="start typing" v-model="test" v-on:keyup="timer" onpaste="return false" :disabled="isDisabled"/>
    <p class="message">{{message}}</p>
    <p class="v-step-2"> Timer (Seconds) : {{stopwatch}} </p>
    <p class="v-step-3"> Speed (WPM): {{speed}} </p>
    <button data-v-step="6" v-on:click="restart">Restart</button>
    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>

require('vue-tour/dist/vue-tour.css')

var txtgen = require('txtgen')

const Stopwatch = require('statman-stopwatch')
const sw = new Stopwatch()

export default {
  name: 'game',

  data () {
    return {
      steps: [
        {
          target: '#v-step-0',
          content: `Take a tour for <strong>Game Instructions</strong>!`
        },
        {
          target: '.v-step-1',
          content: `Type this sentence accurately below`
        },
        {
          target: '.v-step-2',
          content: `As soon as you start typing, the timer will begin`
        },
        {
          target: '.v-step-3',
          content: `Your typing speed will be displayed here as you keep typing`
        },
        {
          target: '[data-v-step="6"]',
          content: `Play the Game, you'll love it!<br>Click the <strong>Restart</strong> button to score higher.`,
          params: {
            placement: 'top'
          }
        }
      ],
      message: '',
      test: null,
      speed: 0,
      stopwatch: 0,
      t: null,
      isPlaying: false,
      isDisabled: false
    }
  },

  methods: {

    getWPM () {
      return ((this.test.length / 5) / (this.stopwatch / 60)).toFixed()
    },

    displayScore () {
      if (this.$refs.heading.innerText === this.test) {
        sw.stop()
        this.stopwatch = this.getElapsedTime()
        this.message = 'CORRECT!'
        this.speed = this.getWPM()
        clearInterval(this.t)
        this.isDisabled = true
      }
    },

    timer () {
      if (this.isPlaying) {
        // this.speed = this.getWPM()
        this.displayScore()
        return
      }
      this.isPlaying = true
      sw.start()
      this.t = setInterval(() => {
        this.stopwatch = this.getElapsedTime()
      }, 300)
    },

    getElapsedTime () {
      let elapsedTime = Number((sw.time() / 1000).toFixed(1))
      if (!elapsedTime) return 0
      return elapsedTime
    },

    restart () {
      this.stopwatch = 0
      this.speed = null
      this.message = ''
      this.test = ''
      this.isPlaying = false
      this.isDisabled = false
      this.t = null
      this.$refs.heading.innerText = txtgen.sentence()
      sw.reset()
    }
  },

  mounted () {
    this.$refs.heading.innerText = txtgen.sentence()
    this.$tours['myTour'].start()
  }
}
</script>

<style scoped>

  #preventcopy {
    user-select: none;
  }

</style>
