class loadingComponent extends Component {
    constructor(parent) {
        super(parent);
        this.container.classList.add('loadingComponent');

        this.title = document.createElement('p');
        this.title.innerHTML = 'Loading...';
        this.title.classList.add('loadingComponent_title');
        this.container.appendChild(this.title);
    }
}