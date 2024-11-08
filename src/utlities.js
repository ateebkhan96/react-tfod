export const drawRect = (detections, ctx) => {
    detections.forEach(predictions => {
        const [x, y, widht, height] = predictions['bbox'];
        const text = predictions['class'];

        // set Styling
        const color = 'blue'
        ctx.strokeSylt = color
        ctx.font = '20px Arial'
        ctx.fillstyle = color

        // Draw Rectangle and TExt

        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, widht, height)
        ctx.stroke()

    })
}