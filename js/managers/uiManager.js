class UIManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.showLoading();
        this.loadingComponent;
    }

    showLoading() { 
        console.log('SHOW LOADING');
        this.loadingComponent = new LoadingComponent(document.body);
    }

    showUI(){
        console.log('SHOW UI');
    }
}