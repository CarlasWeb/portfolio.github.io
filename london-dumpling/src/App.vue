<template>
  <div id="app">
    <MainImg />
    <About/>
    <Menus/>
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import MainImg from './components/MainImg.vue'
import About from './components/About.vue'
import Menus from './components/Menus.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    MainImg,
    About,
    Menus,
    Gallery,
    Contact,
    Footer
  },
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  color: #C3C3C3;
  
}

.bg-color {
    background-color: #2D323E;
}

h1 {
  
  font-size: 6vw;
}

.parallax {
        background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    }
</style>
