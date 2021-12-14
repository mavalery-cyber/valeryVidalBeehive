class User {
    constructor(id, name, email, username, isOwner, avatar, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.isOwner = isOwner
        this.avatar = avatar;
        this.phone = phone;
        this.posts = [];
        this.albums = [];
        this.todos = [];
    }

    addNewPost(post) {
        this.posts.unshift(post);
    }

    addNewTodo(todo) {
        this.todos.unshift(todo);
    }

    addPost(post) {
        this.posts.push(post);
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }
}