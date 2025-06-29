class Footer {
    constructor() {
        this.turbulenceFilter = document.getElementById("turbulence-filter");
    }

    waveEffect() {
        TweenMax.to(this.turbulenceFilter, 20, {
            attr: {
                baseFrequency: 0.03,
            },
            repeat: -1, 
            yoyo: true
        });
    }
}

export { Footer };