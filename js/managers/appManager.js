class AppManager {
    constructor() {
        console.log('AppManager');
        this.netManager = new NetManager(this);
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.selectedUser = null;

        this.CREATING_POST = 1;
        this.CREATING_COMMENT = 2;
        this.CREATING_TODO = 3;

        this.SHOWING_USERS = 1;
        this.SHOWING_POSTS = 2;
        this.SHOWING_ALBUMS = 3;
        this.SHOWING_TODOS = 4;
        this.SHOWING_POSTS_FORM = 5;
        this.SHOWING_TODOS_FORM = 6;
        this.SHOWING_COMMENT_FORM = 7;

        this.lastPostId = 2000;
        this.lastCommentId = 2000;
    }

    startApp() {
        this.netManager.loadData();
    }

    getNewPostId() {
        this.lastPostId += 1;
        return this.lastPostId;
    }

    getNewCommentId() {
        this.lastCommentId += 1;
        return this.lastCommentId;
    }
}