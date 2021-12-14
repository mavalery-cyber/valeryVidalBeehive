class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.showLoading();
        this.loadingComponent;
        this.mainComponent;

        this.state = 0;
    }

    showLoading() {
        this.loadingComponent = new LoadingComponent(document.body, null);
    }

    showUI() {
        // window.setTimeout(() => {
        this.mainComponent = new MainComponent(document.body, this.appManager);
        this.loadingComponent.hide();
        // }, 2000);
    }

    showPosts() {
        this.mainComponent.showBackButton();
        this.state = this.appManager.SHOWING_POSTS;
        this.mainComponent.showPosts();
    }

    showTodos() {
        this.mainComponent.showBackButton();
        this.state = this.appManager.SHOWING_TODOS;
        this.mainComponent.showTodos();
    }

    showUsers() {
        this.mainComponent.hideBackButton();
        this.state = this.appManager.SHOWING_USERS;
        this.mainComponent.showUsers();
    }

    showForm(state, post) {
        this.mainComponent.showForm(state, post);
    }

    hideForm() {
        this.mainComponent.hideForm(this.state);
    }

    onBackButton() {
        switch (this.state) {
            case this.appManager.SHOWING_USERS:
                break;
            case this.appManager.SHOWING_POSTS:
                this.showUsers();
                break;
            case this.appManager.SHOWING_ALBUMS:
                break;
            case this.appManager.SHOWING_TODOS:
                this.showUsers();
                break;
            case this.appManager.SHOWING_POSTS_FORM:
                this.state = this.appManager.SHOWING_POSTS;
                this.hideForm();
                break;
            case this.appManager.SHOWING_COMMENT_FORM:
                this.state = this.appManager.SHOWING_POSTS;
                this.hideForm();
                break;
            case this.appManager.SHOWING_TODOS_FORM:
                this.state = this.appManager.SHOWING_TODOS;
                this.hideForm();
                break;
            default:
                break;
        }
    }

    onNewCommentButton(post) {
        this.state = this.appManager.SHOWING_COMMENT_FORM;
        this.showForm(this.appManager.CREATING_COMMENT, post);
    }

    onAddButton() {
        switch (this.state) {
            case this.appManager.SHOWING_USERS:
                break;
            case this.appManager.SHOWING_POSTS:
                this.state = this.appManager.SHOWING_POSTS_FORM;
                this.showForm(this.appManager.CREATING_POST);
                console.log('Adding post');
                break;
            case this.appManager.SHOWING_ALBUMS:
                break;
            case this.appManager.SHOWING_TODOS:
                this.state = this.appManager.SHOWING_TODOS_FORM;
                this.showForm(this.appManager.CREATING_TODO);
                console.log('Adding todo');
                break;
            default:
                break;
        }
    }

    showAlert(error) {
        this.mainComponent.showAlert(error);
    }
}