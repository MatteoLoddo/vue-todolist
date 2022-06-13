const toDo = [
    {
        text:'Fare la spesa',
        done: true
    },
    {
        text:'Fare Benzina',
        done: false
    },
    {
        text:'Portare il cane dal veterianario',
        done: false
    },
]






const appVue = new Vue({
    el: "#app",
    data:{
        listToDo: toDo,
        index : 0

    },

    methods:{
        taskDone(indice){

            if(this.listToDo[indice].done == true){
                this.listToDo[indice].done = false
            }else if (this.listToDo[indice].done == false){
                this.listToDo[indice].done = true
            }
        }
    }
})