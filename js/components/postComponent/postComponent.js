class PostComponent extends Component {
    constructor(parent, appManager, post) {
        super(parent, appManager);
        this.container.classList.add('postComponent');
        this.post = post;
        this.title = p({ 'innerHTML': this.post.title, 'className': 'postComponent_title' }, this.container, null);
        this.body = p({ 'innerHTML': this.post.body, 'className': 'postComponent_body' }, this.container, null);

        this.addButton = div({ 'innerHTML': 'Add New Comment', 'className': 'postComponent_button', 'onclick': this.onAddButton.bind(this) }, this.container, null);

        if (this.post.comments.length > 0) {
            this.commentsContainer = div({ 'className': 'postComponent_commentContainer' }, this.container, null);

            this.post.comments.forEach(comment => {
                var commentComponent = new CommentComponent(this.commentsContainer, appManager, comment)
            });
        }
    }

    onAddButton() {
        this.appManager.uiManager.onNewCommentButton(this.post);
    }
}
