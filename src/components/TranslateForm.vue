<template>
    <div id="translateForm" class="row">
        <div class="col=md-6 col-md-offset-3">
            <form class="well form-inline" v-on:submit="formSubmit">
                <input class="form-control" type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容">
                <select class="form-control" v-model="language">
                    <option value="zh">Chinese</option>
                    <option value="en">English</option>
                    <option value="kor">Korea</option>
                    <option value="ru">Russia</option>
                    <option value="jp">Jpandene</option>
                </select>
                <input class="btn btn-primary" type="submit" value="翻译">
            </form>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'translateForm',
    data:function () {
        return {
            textToTranslate:"",
            language:""
        }
    },
    methods:{
        formSubmit:function(e){
            //alert(this.textToTranslate);//拿到用户输入的内容
            this.$emit("formSubmit",this.textToTranslate,this.language); //事件注册,传递数据
            e.preventDefault();//取消默认事件
        }
    },
    //vue生命周期 进入页面立即执行
    created:function () {
            this.language = "en";
    }
  }
  </script>
  
  <style>
  </style>