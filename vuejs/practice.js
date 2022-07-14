const  vueee = new Vue({
    el: '#main',
    data: {
           title: 'an qua oc cho rat ngon',
          countnumber: 0,
          doc: '', 
    },

});

setTimeout(() =>{
    vueee.title = 'qua oc cho an nhu cut'
},3000);