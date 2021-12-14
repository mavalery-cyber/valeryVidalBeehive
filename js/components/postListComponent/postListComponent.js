class PostListComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('postListComponent');
        this.container.style.transform = 'translate(' + window.innerWidth + 'px, 0)';
    }

    addPosts() {
        this.container.innerHTML = '';
        for (let index = 0; index < this.appManager.selectedUser.posts.length; index++) {
            var post = this.appManager.selectedUser.posts[index];
            var postComponent = new PostComponent(this.container, this.appManager, post);
        }
    }

    moveIn() {
        super.moveIn();
        this.addPosts();
    }

    moveOut() {
        super.moveOut();
        this.appManager.selectedUser = null;
    }
}