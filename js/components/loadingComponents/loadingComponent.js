class LoadingComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('loadingComponent');
        this.title = p({ 'innerHTML': 'Loading...', 'className': 'loadingComponent_title' }, this.container);
    }
}