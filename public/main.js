// Clock rotation
$(document).ready(() => {

    // Get Date
    const date = new Date();
    let h = date.getHours() % 12;
    let m = date.getMinutes();
    let s = date.getSeconds();

    // Initialize Clock
    let hA = updateClock($('.first'), Math.round((h * 360) / 12), 0);
    let mA = updateClock($('.second'), Math.round((m * 360) / 60), 0);
    let sA = updateClock($('.third'), Math.round((s * 360) / 60), 0);

    // Update Second
    setInterval(() => {
        sA = updateClock($('.third'), sA, 6);
    }, 1000);

    // Update Minute
    setInterval(() => {
        mA = updateClock($('.second'), mA, 1);
    }, 10000)

    // Update Hour
    setInterval(() => {
        hA = updateClock($('.first'), hA, 1);
    }, 50000);

    // Prevent overflow (Refresh After 6 hrs)
    setTimeout(() => {
        window.location.reload();
    }, 21600000);

});

// Update Time
function updateClock(ref, start, add) {
    start += add;
    ref.css("transform", `rotate(${start}deg)`);
    return start;
}
