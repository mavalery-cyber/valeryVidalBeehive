class UsersComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('usersComponent');
        this.addUsers();
    }

    addUsers() {
        this.container.innerHTML = '';

        this.appManager.dataManager.users.forEach(user => {
            var user = new UserComponent(this.container, this.appManager, user);
        });
    }
}