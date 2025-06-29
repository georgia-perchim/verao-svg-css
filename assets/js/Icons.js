class Icons {
    constructor() {
        this.listIcons = document.querySelectorAll('.icon');
    }

    animationIcons() {
        TweenMax.to(this.listIcons, 0.6, {scale: 0.95, repeat: -1, yoyo: true});
    }
}

export { Icons };