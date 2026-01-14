let count = 0;
let progress = document.querySelector(".progress-bar");
let per_tex = document.querySelector(".percent");

let inte = setInterval( function () {
    count++;
    if(count <= 100){
        progress.style.width = `${count}%`;
        per_tex.textContent = `${count}%`;
    } else {
        document.querySelector("h2").textContent = "Downloaded Complete";
        clearInterval(inte);
    }
}, 10000 / 100);