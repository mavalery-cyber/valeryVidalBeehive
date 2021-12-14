class UserComponent extends Component {
    constructor(parent, appManager, user) {
        super(parent, appManager);
        this.container.classList.add('userComponent');
        this.user = user;

        var column1 = div({ 'className': 'userComponent_column1' }, this.container, null);
        var column2 = div({ 'className': 'userComponent_column2' }, this.container, null);
        var column3 = div({ 'className': 'userComponent_column3' }, this.container, null);

        this.avatar = image({ 'className': 'userComponent_avatar', 'src': this.user.avatar }, column1, null);
        this.name = p({ 'innerHTML': this.user.name, 'className': 'userComponent_name' }, column2, null);
        this.email = p({ 'innerHTML': this.user.email, 'className': 'userComponent_email' }, column2, null);
        this.username = p({ 'innerHTML': this.user.username, 'className': 'userComponent_username' }, column2, null);
        this.phone = p({ 'innerHTML': this.user.phone, 'className': 'userComponent_phone' }, column2, null);

        this.postsButton = new UserButtonComponent(column3, appManager, this.user.posts.length, './src/images/postsIcon.svg', this.showPosts.bind(this));
        this.albumButton = new UserButtonComponent(column3, appManager, this.user.albums.length, './src/images/albumIcon.svg', this.showAlbums.bind(this));
        this.todosButton = new UserButtonComponent(column3, appManager, this.user.todos.length, './src/images/todosIcon.svg', this.showTodos.bind(this));
    }


    showPosts() {
        this.appManager.selectedUser = this.user;
        this.appManager.uiManager.showPosts();
    }

    showAlbums() {
        console.log('showAlbums')
    }

    showTodos() {
        this.appManager.selectedUser = this.user;
        this.appManager.uiManager.showTodos(this.user);
    }
}
