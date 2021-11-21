class NetManager {
    constructor(appManager){
        this.appManager = appManager;
        this.url = 'data/data.json';
    }

    loadData(){
       var request = new XMLHttpRequest();
       request.open('GET', this.url);
       request.onreadystatechange = this.onRequestReceived.bind(this);
       request.send();
    }

    onRequestReceived(event) {
        var request = event.target;
        if(request.readyState === 4) {
            if(request.status === 200) {

                var data = JSON.parse(request.responseText);
                
                var users = data['users'];
                users.forEach(userData => {
                   var user = new User (userData.id, userData.name, userData.email, userData.username, userData.isOwner);
                   this.appManager.dataManager.addUser(user);
                });

                var posts = data['posts'];
                posts.forEach(postData => {
                    var post = new Post (postData.id, postData.title, postData.body, postData.userId);
                    this.appManager.dataManager.addPost(post);
                 });
                 console.log(this.appManager.dataManager);
                 this.appManager.uiManager.showUI();
            //UIManager
 
            }
             
        }
    }
} 