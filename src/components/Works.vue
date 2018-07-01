<template>
  <div class="works">
    <div class="main">
      <h1 class="main__title">{{ works[workIndex].title }}</h1>
      <p class="main__description">{{ works[workIndex].description }}</p>
      <ul class="main__skillList">
        <li v-for="skill in works[workIndex].skills" class="main__skillItem">
          <img :src="require(`@/assets/${skill}`)">
        </li>
      </ul>
    </div>
    <ul class="works__list">
      <li v-for="(work, i) in works" class="works__item">
        <h2>{{ work.title }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      workIndex: 0,
      works: [
        {
          title: 'Work1',
          description: 'HTMLとCSSを使って頑張った！',
          skills: ['html5.png', 'css3.png']
        },
        {
          title: 'Work2',
          description: 'HTMLとCSSとJavaScriptとjQueryを使って頑張った！',
          skills: ['html5.png', 'css3.png', 'javascript.png', 'jquery.png']
        },
        {
          title: 'Work3',
          description: 'HTMLとCSSとSassとVueを使って頑張った！',
          skills: ['html5.png', 'css3.png', 'sass.png', 'vue.png']
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  padding-bottom: 100px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  &__title {
    text-align: center;
    margin-top: 100px;
  }
  &__description {
    margin: 0 auto 20px;
    width: 300px;
    text-align: center;
  }
  &__skill {
    &List {
      display: flex;
      justify-content: center;
    }
    &Item {
      margin: 0 5px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
.works {
  &__list {
    margin: 0 auto;
    width: 500px;
    display: flex;
    justify-content: center;
  }
  &__item {
    border: 1px solid #ddd;
    text-align: center;
    margin: 0 10px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
    float: left;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
