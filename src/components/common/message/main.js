import Vue from 'vue';
import msgboxVue from './messageBox.vue';

let MessageConstructor = Vue.extend( msgboxVue );
let instance;
const Message = function(options){
  instance = new MessageConstructor({

  });
  instance.vm = instance.$mount();
  Object.assign(instance,options)
  document.body.appendChild(instance.vm.$el);

  return {
    then:(confirmFun,cancelFun) => {         
      instance.confirmeFun = typeof confirmFun == "function" ? confirmFun : '';
      instance.cancelFun = typeof cancelFun == "function" ? cancelFun : '';
    }
  }
}

export default Message