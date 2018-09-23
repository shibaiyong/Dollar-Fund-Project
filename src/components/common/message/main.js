import Vue from 'vue';
import msgboxVue from './messageBox.vue';

let MessageConstructor = Vue.extend( msgboxVue );
let instance;
const Message = function(options){

  instance = new MessageConstructor({
    data:options
  });
  let parentEle = document.getElementById('app');

  if(document.getElementById('messageContainer')){//避免弹窗组件重复向页面追加。
    let child = document.getElementById('messageContainer');
    parentEle.removeChild(child);
  }
  
  instance.vm = instance.$mount();
  parentEle.appendChild(instance.vm.$el);

  return {
    then:(confirmFun,cancelFun) => {         
      instance.confirmeFun = typeof confirmFun == "function" ? confirmFun : '';
      instance.cancelFun = typeof cancelFun == "function" ? cancelFun : '';
    }
  }

}

export default Message