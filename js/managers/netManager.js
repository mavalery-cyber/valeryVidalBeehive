class NetManager {
    constructor(appManager) {
        this.appManager = appManager;
        // this.url = 'data/data.json';
        this.url = 'https://lacolmena-5f440-default-rtdb.firebaseio.com/data.json'
    }

    loadData() {
        var request = new XMLHttpRequest();
        request.open('GET', this.url);
        request.onreadystatechange = this.onRequestReceived.bind(this);
        request.send();
    }

    onRequestReceived(event) {
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {

                var data = JSON.parse(request.responseText);

                var users = data['users'];
                users.forEach(userData => {
                    var user = new User(userData.id, userData.name, userData.email, userData.username, userData.isOwner, userData.avatar, userData.phone);
                    this.appManager.dataManager.addUser(user);
                });

                var posts = data['posts'];
                for (const key in posts) {
                    const postData = posts[key];
                    var post = new Post(postData.id, postData.title, postData.body, postData.userId);
                    this.appManager.dataManager.addPost(post);
                }

                var comments = data['comments'];
                for (const key in comments) {
                    const commentData = comments[key];
                    var postComment = new PostComment(commentData.id, commentData.body, commentData.name, commentData.postId, commentData.beeId);
                    this.appManager.dataManager.addPostComment(postComment)
                }

                var todos = data['todos'];
                for (const key in todos) {
                    const todoData = todos[key];
                    var todo = new Todo(todoData.id, todoData.title, todoData.userId, todoData.completed);
                    this.appManager.dataManager.addTodo(todo);
                };

                this.appManager.uiManager.showUI();
            }
        }
    }

    saveComment(comment) {
        var url = 'https://lacolmena-2ce00-default-rtdb.firebaseio.com/data/comments/' + comment.id + '.json';
        var request = new XMLHttpRequest();
        request.open('PUT', url);
        request.onreadystatechange = this.onSaveCommentReceived.bind(this);
        request.send(JSON.stringify(comment));
    }

    onSaveCommentReceived(event) {
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {

            }
        }
    }

    savePost(post) {
        var url = 'https://lacolmena-2ce00-default-rtdb.firebaseio.com/data/posts/' + post.id + '.json';
        var request = new XMLHttpRequest();
        request.open('PUT', url);
        request.onreadystatechange = this.onSavePostReceived.bind(this);
        request.send(JSON.stringify(post));
    }

    onSavePostReceived(event) {
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {

            }
        }
    }

    saveTodo(todo) {
        var url = 'https://lacolmena-2ce00-default-rtdb.firebaseio.com/data/todos/' + todo.id + '.json';
        var request = new XMLHttpRequest();
        request.open('PUT', url);
        request.onreadystatechange = this.onSaveTodoReceived.bind(this);
        request.send(JSON.stringify(todo));
    }

    onSaveTodoReceived(event) {
        var request = event.target;
        if (request.readyState === 4) {
            if (request.status === 200) {

            }
        }
    }
}