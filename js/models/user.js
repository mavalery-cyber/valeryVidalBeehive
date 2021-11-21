class User {
    constructor(id, email, name, username, isOwner){
        this.id = id;
        this.email = email;
        this.name = name; 
        this.userName = username; 
        this. isOwner = isOwner;
        this.posts = [];
    }
    addPost(post){
        this.posts.push(post);
    }
}