class Post {
    constructor(id, title, body, userId) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}