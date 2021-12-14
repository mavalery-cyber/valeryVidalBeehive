class TodoListComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('todoListComponent');
        this.container.style.transform = 'translate(' + window.innerWidth + 'px, 0)';
        this.user = null;
    }

    addTodos() {
        this.container.innerHTML = '';
        for (let index = 0; index < this.appManager.selectedUser.todos.length; index++) {
            var todo = this.appManager.selectedUser.todos[index];
            var todoComponent = new TodoComponent(this.container, this.appManager, todo);
        }
    }

    moveIn() {
        super.moveIn();
        this.addTodos();
    }

    moveOut() {
        super.moveOut();
        this.appManager.selectedUser = null;
    }
}