<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单/易用/便捷</h5>
    <TranslateForm v-on:formSubmit="translateText"></TranslateForm>
    <TranslateOutput v-text="translatesText"></TranslateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm.vue';
import TranslateOutput from './components/TranslateOutput.vue';
import md5 from 'js-md5';
export default {
  name: 'App',
  data:function () {
    return {
      translatesText:""
    }
  },
  components: {
    TranslateForm, TranslateOutput
  },
  methods:{
    translateText:function (text,language) {
      //百度通用翻译api必需参数
      const appid = '20221201001480785'
      const form = 'auto'
      const salt = '1435660288'
      const password = 'PaOxbQCggu4qn6RKjvu1'
      const sign = md5(appid+text+salt+password)
      this.$axios.get(`/api?q=${text}&from=${form}&to=${language}&appid=${appid}&salt=${salt}&sign=${sign}`,{emulateJSON: true})
        .then((response)=>{
          this.translatesText = response.data.trans_result[0]['dst']
          //打印翻译结果
          console.log(response.data.trans_result[0]['dst']);
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
