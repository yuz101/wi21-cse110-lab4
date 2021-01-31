setInterval(logging, 1.0 * 1000);

function logging() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}