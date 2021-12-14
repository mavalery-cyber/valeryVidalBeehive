class NavBarComponent extends Component {
    constructor(parent, appManager) {
        super(parent, appManager);
        this.container.classList.add('navbarComponent');
        this.backButton = div({ 'className': 'navbarComponent_backButton', 'onclick': this.onBackButton.bind(this) }, this.container, null)
        var icon = image({ 'className': 'navbarComponent_icon', 'src': 'src/images/backIcon.svg' }, this.backButton, null);

        this.addButton = div({ 'className': 'navbarComponent_addButton', 'onclick': this.onAddButton.bind(this) }, this.container, null)
        icon = image({ 'className': 'navbarComponent_icon', 'src': 'src/images/addIcon.svg' }, this.addButton, null);

        this.hideBackButton();
    }

    onBackButton(e) {
        this.appManager.uiManager.onBackButton();
    }

    onAddButton(e) {
        this.addButton.hidden = true;
        this.appManager.uiManager.onAddButton();
    }

    hideBackButton() {
        this.backButton.hidden = true;
        this.addButton.hidden = true;
    }

    showBackButton() {
        this.backButton.hidden = false;
        this.addButton.hidden = false;
    }

    showAddButton() {
        this.addButton.hidden = false;
    }
}