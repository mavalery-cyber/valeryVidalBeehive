class AppManager {
    constructor(){
        console.log('AppManager');
        this.netManager= new NetManager(this);
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
    }

    startApp() {
        this.netManager.loadData();
    }
}