<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li class="item selected" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="readme">Ronnie UI</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="header">Header</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="footer">Footer</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="button">Button</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="tag">Tag</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="form">Form</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="navbar">Navbar</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="search">Search</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="messagebox">MessageBox</li>
        <li class="item" @click="select" @mousedown="downfuc" @mouseup="upfuc" data-router="popup">Popup</li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cover: false
    }
  },
  methods: {
    select (evt) {
      let siblings = evt.target.parentNode.children
      for (let i = 0; i < siblings.length; i++) {
        siblings[i].setAttribute('class', 'item')
      }
      evt.target.setAttribute('class', 'item selected')
      console.log(evt)
      // console.log(evt.target.getAttribute('data-router'))
      this.$router.push(evt.target.getAttribute('data-router'))
    },
    downfuc (evt) {
      evt.target.setAttribute('class', 'item cover')
    },
    upfuc () {
      this.cover = false
    }
  }
}
</script>

<style scoped>
#app{
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.nav{
  position:fixed;
  top:0;
  left:0;
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  background: #f0f0f0;
}
.nav > ul {
  width: 100%;
}
.item{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #111;
  text-indent: 30px;
  box-sizing: border-box;
}
.selected{
  border-right: 3px solid #f28300;
}
.cover{
  background: #999;
}
.content{
  position: absolute;
  left: 25%;
  box-sizing: border-box;
  width: 75%;
  height: 100%;
  overflow-y: scroll;
}
</style>
