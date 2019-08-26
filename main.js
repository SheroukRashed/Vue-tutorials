Vue.component('my-list', {
    props: ["doggy"],
    template: '<li>{{doggy.text}}</li>'
})

var app = new Vue({
    el: "#app",
    data: { 
        product: "Socks",
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        items: ["cat", "dog", "rat"],
        emps: [{name: "ali"}, {name: "carla"}],
        dogs: [
            { id: 0, text: 'Jack' },
            { id: 1, text: 'Puck' },
            { id: 2, text: 'LOLO' }
          ],
        count: "0",
        empName: ""
    },
    methods: {
        reverse: function(){
            this.product = this.product.split('').reverse().join('');
        },
        addEmpName: function(){
            this.emps.push({name: this.empName});
            this.empName="";
        },
    }
})

