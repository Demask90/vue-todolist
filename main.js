Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        selectedStatus: '',
        tasks: [
            {
                title: 'Fare spesa',
                done: false,
            },
            {
                title: 'Fare compiti',
                done: true,
            },
        ],
    },
    methods: {
        
        submitTask(){
            let newObject = {
                title : this.newTask,
                done: false
            };


            if (this.newTask != '') {
                this.tasks.push(newObject);
                this.newTask = "";
            }
        },
        removeTask(i){
            this.tasks.splice(i, 1)
            
        },
        changeStatus(element, i){
            console.log(this.tasks[i].done)
            this.tasks[i].done = !this.tasks[i].done;
        },
        removeAllTasks(){
            if(confirm('Cancellare tutte le task?') == true){
                this.tasks = [];
            }
        }
    },
    computed: {
        computed_tasks: function() {

            console.log(this.selectedStatus);
            let selectionValue = this.selectedStatus;
            let filteredList = [];

            if(selectionValue == 'true'){
                console.log(this.tasks)
                filteredList = this.tasks.filter((task)=>{
                    return task.done == true;
                })
            }else if(selectionValue == 'false'){
                filteredList = this.tasks.filter((task)=>{
                    return task.done == false;
                })
            }else{
                return this.tasks
            }

            console.log(filteredList)
            return filteredList;

        }
            
          
        
    }
})