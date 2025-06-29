class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.card1 = document.querySelector('.card-1');
        this.card2 = document.querySelector('.card-2');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 25) {
            this.card1.style.transform = `translate(${((-posicao) + 25) / 10}%)`;
            this.card2.style.transform = `translate(${(posicao - 25) / 10}%)`;
        }
    }
}

export { Cards };