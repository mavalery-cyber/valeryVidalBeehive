class UserButtonComponent extends Component {
    constructor(parent, appManager, text, imageSRC, callback) {
        super(parent, appManager);

        this.container.classList.add('userButtonComponent');
        this.container.onclick = callback;
        this.image = image({ 'className': 'userButtonComponent_image', 'src': imageSRC }, this.container, null);
        this.text = p({ 'className': 'userButtonComponent_text' }, this.container);

        if (text > 10) {
            text = '+10';
            this.text.classList.add('userButtonComponent_text_over_ten')
        }

        this.text.innerHTML = text;

        if (text === 0) {
            this.hide();
        }
    }

    hide() {
        this.text.classList.add('hidden');
    }

}