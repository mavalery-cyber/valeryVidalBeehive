class AlertComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('alertComponent');
        this.title = p({ 'innerHTML': 'Loading...', 'className': 'alertComponent_title' }, this.container);
        this.container.style.transform = 'translate(0, ' + window.innerHeight + 'px)';
    }

    moveIn(error) {
        // this.container.style.transform = 'translate(0px, 0)';
        this.title.innerHTML = error;
        gsap.to(this.container, { transform: 'translate(0, ' + (window.innerHeight - 80) + 'px)', duration: 0.5, ease: 'power1.inOut', onComplete: this.moveOut.bind(this) });
    }

    moveOut() {
        gsap.to(this.container, { transform: 'translate(0, ' + window.innerHeight + 'px)', duration: 0.5, ease: 'power1.inOut', delay: 2 });
        // this.container.style.transform = 'translate(' + window.innerWidth + 'px, 0)';
    }
}