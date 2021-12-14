class CommentComponent extends Component {
    constructor(parent, appManager, comment) {
        super(parent, appManager);
        this.container.classList.add('commentComponent');
        this.comment = comment;
        this.name = p({ 'innerHTML': comment.name, 'className': 'commentComponent_name' }, this.container, null);
        this.body = p({ 'innerHTML': comment.body, 'className': 'commentComponent_body' }, this.container, null);
    }
}