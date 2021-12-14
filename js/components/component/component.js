class Component {
    constructor(parent, appManager) {
        this.parent = parent;
        this.appManager = appManager;
        this.container = div({}, parent);
    }

    hide() {
        this.container.classList.add('hidden');
    }

    show() {
        this.container.classList.remove('hidden');
    }

    remove() {

    }

    moveIn() {
        // this.container.style.transform = 'translate(0px, 0)';
        gsap.to(this.container, { transform: 'translate(0px, 0)', duration: 0.5, ease: 'power1.inOut' });
    }

    moveOut() {
        gsap.to(this.container, { transform: 'translate(' + window.innerWidth + 'px, 0)', duration: 0.5, ease: 'power1.inOut' });
        // this.container.style.transform = 'translate(' + window.innerWidth + 'px, 0)';
    }
}