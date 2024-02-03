function attachGradientEvents() {

    let area = document.getElementById('gradient');
    area.addEventListener('mousemove', gradientMove);
    area.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let gradientBoxWidth = event.target.clientWidth;
        let mousePosition = event.offsetX / (gradientBoxWidth - 1);
        let percentage = Math.trunc(mousePosition * 100);
        document.getElementById('result').textContent = percentage + '%';
    }

    function gradientOut(event) {
        document.getElementById('result').textContent = '';
    }
}