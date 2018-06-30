export const generateIncomeChart = (
    elementCanvas,
    incomeData
) => {
    const canvasWidth = elementCanvas.clientWidth;
    const canvasHeight = elementCanvas.clientHeight;
    const context = elementCanvas.getContext('2d');
    const highestValue = incomeData.sort((function (dataFirst, dataSecond) {
        return dataFirst.income < dataSecond.income;
    }))[0].income;

    const gridIncrement = highestValue / 5;

    // drawing the grid lines
    let gridValue = 0;

    while (gridValue <= highestValue) {
        let gridY = canvasHeight * (1 - gridValue / highestValue) + 10;
        drawLine(
            context,
            0,
            gridY,
            canvasWidth,
            gridY,
            '#f6a821'
        );
        // writing grid markers
        context.save();
        context.fillStyle = 'black';
        context.font = '10px Arial';
        context.fillText(gridValue, 10, gridY - 2);
        context.restore();

        gridValue += gridIncrement;
    }

    console.log(['generateIncomeChart', elementCanvas, incomeData, canvasHeight, canvasWidth, highestValue]);
};


function drawLine(ctx, startX, startY, endX, endY, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.restore();
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
    ctx.restore();
}
