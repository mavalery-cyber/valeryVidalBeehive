class DataManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.users = [];
    }

    addUser(user) {
        this.users.push(user)
    }

    addPost(post) {
        for (let i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.id === post.userId) {
                user.addPost(post);
                return;
            }
        }
    }

    addPostComment(postComment) {
        for (let i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.id === postComment.beeId) {
                for (let j = 0; j < user.posts.length; j++) {
                    const post = user.posts[j];
                    if (post.id == postComment.postId) {
                        post.addComment(postComment)
                        return;
                    }
                }
            }
        }
    }

    addTodo(todo) {
        for (let i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.id === todo.userId) {
                user.addTodo(todo);
                return;
            }
        }
    }
}