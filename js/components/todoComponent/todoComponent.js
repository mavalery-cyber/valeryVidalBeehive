class TodoComponent extends Component {
    constructor(parent, appManager, todo) {
        super(parent, appManager);
        this.container.classList.add('todoComponent');
        this.todo = todo;
        this.checkButton = div({ 'className': 'todoComponent_checkButton' }, this.container, null);
        this.checkButton.onclick = this.toggleComplete.bind(this);
        this.title = p({ 'innerHTML': this.todo.title, 'className': 'todoComponent_title' }, this.container, null);
        this.updateUI()
    }

    toggleComplete() {
        this.todo.completed = !this.todo.completed;
        this.appManager.netManager.saveTodo(this.todo);
        this.updateUI();
    }

    updateUI() {
        this.todo.completed ? this.checkButton.classList.add('todoComponent_checkButton_completed') : this.checkButton.classList.remove('todoComponent_checkButton_completed');
    }
}