function draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "green";
    ctx.lineWidth = 2;

    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

const canvas = document.querySelector('#canvas');
if (!canvas.getContext) {
    alert("Canvas não disponível!")
} else {
    draw(canvas.getContext('2d'));
}
