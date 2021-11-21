class DataManager {
    constructor (appManager) {
        this.appManager = appManager;
        this.users = [];
    }

    addUser(user){
        this.users.push(user)
    }

    addPost(post){
        for (let i = 0; index < this.users.length; i++) {
            var user = this.users[i];
         
            if(user.id === post.userId){
                user.addPost(post);
                return;
            }
        }
    }
}