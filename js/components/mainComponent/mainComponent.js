class MainComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('mainComponent');

        this.navbarComponent = new NavBarComponent(this.container, appManager);
        this.componentsContainer = div({ 'className': 'mainComponent_componentsContainer' }, this.container, null);
        this.usersComponent = new UsersComponent(this.componentsContainer, appManager);
        this.fade = div({ 'className': 'mainComponent_fade' }, this.componentsContainer, null);
        this.postListComponent = new PostListComponent(this.componentsContainer, appManager);
        this.todoListComponent = new TodoListComponent(this.componentsContainer, appManager);
        this.formComponet = new FormComponent(this.componentsContainer, appManager);
        this.alertComponent = new AlertComponent(this.container, appManager);
        this.hideFade();
    }

    showFade() {
        gsap.to(this.fade, { opacity: 0.85, duration: 0.25 });
    }

    hideFade() {
        gsap.to(this.fade, { opacity: 0, duration: 0.75 });
    }

    showPosts() {
        this.showFade();
        this.postListComponent.moveIn();
    }

    showTodos() {
        this.showFade();
        this.todoListComponent.moveIn();
    }

    showForm(state, post) {
        this.formComponet.moveIn(state, post);
    }

    hideForm(state) {
        this.navbarComponent.showAddButton();
        this.formComponet.moveOut();

        switch (state) {
            case this.appManager.SHOWING_POSTS:
                this.postListComponent.addPosts();
                break;
            case this.appManager.SHOWING_TODOS:
                this.todoListComponent.addTodos();
                break;
            default:
                break;
        }
    }


    showUsers() {
        this.hideFade();
        this.postListComponent.moveOut();
        this.todoListComponent.moveOut();
    }

    hideBackButton() {
        this.navbarComponent.hideBackButton();
    }

    showBackButton() {
        this.navbarComponent.showBackButton();
    }

    showAlert(error) {
        this.alertComponent.moveIn(error);
    }
}