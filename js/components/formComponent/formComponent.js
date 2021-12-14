class FormComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('formComponent');
        this.container.style.transform = 'translate(' + window.innerWidth + 'px, 0)';

        this.title = p({ 'className': 'formComponent_title', 'innerHTML': 'Creating a new Post' }, this.container, null)
        this.titleInput = input({ 'placeholder': 'Title', 'className': 'formComponent_input' }, this.container, null)
        this.bodyInput = input({ 'placeholder': 'Body', 'className': 'formComponent_input' }, this.container, null)
        this.addButton = div({ 'innerHTML': 'Complete', 'className': 'formComponent_button', 'onclick': this.onAddButton.bind(this) }, this.container, null);
        this.state = this.appManager.CREATING_POST;
        this.currentPost = null;
    }

    onAddButton(e) {
        var title = this.titleInput.value;
        var body = this.bodyInput.value;

        if (this.state === this.appManager.CREATING_POST) {
            if (title !== '' && body !== '') {
                var post = new Post(firebaseKey.key(), title, body, this.appManager.selectedUser.id);
                this.appManager.selectedUser.addNewPost(post);
                this.appManager.netManager.savePost(post);
                this.appManager.uiManager.onBackButton();
                this.clean();
            } else {
                this.showAlert('Please complete all fields for new Post!');
            }
        } else if (this.state === this.appManager.CREATING_COMMENT) {
            if (title !== '' && body !== '') {

                var comment = new PostComment(firebaseKey.key(), body, title, this.currentPost.id, this.appManager.selectedUser.id)
                this.currentPost.addComment(comment);
                this.appManager.netManager.saveComment(comment);
                this.appManager.uiManager.onBackButton();
                this.clean();
            } else {
                this.showAlert('Please complete all fields for new Comment!');
            }
        } else {
            if (body !== '') {
                var todo = new Todo(firebaseKey.key(), body, this.appManager.selectedUser.id, false);
                this.appManager.selectedUser.addNewTodo(todo);
                this.appManager.netManager.saveTodo(todo);
                this.appManager.uiManager.onBackButton();
                this.clean();
            } else {
                this.showAlert('Please complete all fields for new Todo!');
            }
        }

    }

    showAlert(error) {
        this.appManager.uiManager.showAlert(error);
    }

    clean() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    moveIn(state, post) {

        this.state = state;
        this.currentPost = post;
        this.titleInput.hidden = false;

        switch (this.state) {
            case this.appManager.CREATING_POST:
                this.title.innerHTML = 'Creating a new Post';
                break;
            case this.appManager.CREATING_COMMENT:
                this.title.innerHTML = 'Creating a new Comment';
                break;
            case this.appManager.CREATING_TODO:
                this.title.innerHTML = 'Creating a new Todo';
                this.titleInput.hidden = true;
                break;
            default:
                break;
        }

        super.moveIn();
    }

    moveOut() {
        super.moveOut();
        this.user = null;
        this.post = null;
    }
}