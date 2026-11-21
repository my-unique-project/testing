let position = document.querySelector("#position");
let input = document.querySelector("#input");
let liveimg = document.querySelector("#liveimg");
input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    liveimg.src = URL.createObjectURL(file);
    input.style.display = "none";
})
function x(captureData) {
    position.innerHTML = `Latitute : ${captureData.coords.latitude}<br>Logitude :
    ${captureData.coords.longitude}<br>`
    const dateTime = new Date();
    position.innerHTML += `Current Date : ${dateTime.toLocaleDateString()}<br>`;
    position.innerHTML += `Current Time : ${dateTime.toLocaleTimeString()}<br>`;
}
function y(error) {
    position.innerHTML = `<span style="color:red;"><u>Trun on location service</u></span> | Error code ${error.code}`
}
navigator.geolocation.getCurrentPosition(x, y);
