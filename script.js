const fetchbttn = document.getElementById("fetchPhotos");
const gridContainer = document.querySelector(".grid");
const morePhotosButton = document.getElementById("MorePhotos");
const grayscaleButton = document.getElementById("grayscaleToggle");
const bgc = document.getElementById("background");

async function loadImages() {
    gridContainer.innerHTML = "";

    let randomNum = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(
        "https://picsum.photos/v2/list?page=" + randomNum + "&limit=100"
    );
    const data = await response.json();
    let array = []
    let j = 0
    for (let i = 0; i < 4 + j; i++) {

        let RandomIndex = Math.floor(Math.random() * data.length);
        if (array.includes(data[RandomIndex])) {
            j++
            continue
        }

        array.push(data[RandomIndex])

        const photoWrapper = document.createElement("div");
        photoWrapper.className = "photo";

        const img = document.createElement("img");
        img.src = data[RandomIndex].download_url;

        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.innerHTML = `
            <strong>${data[RandomIndex].author}</strong>
            <a href="${data[RandomIndex].url}">${data[RandomIndex].url}</a>
        `;

        photoWrapper.appendChild(img);
        photoWrapper.appendChild(overlay);
        gridContainer.appendChild(photoWrapper);
    }
}


loadImages();


fetchbttn.addEventListener("click", loadImages);

async function loadMoreImages() {
    let randomNum = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(
        "https://picsum.photos/v2/list?page=" + randomNum + "&limit=100"
    );
    const data = await response.json();
    let array = []
    let j = 0
    for (let i = 0; i < 4 + j; i++) {
        let RandomIndex = Math.floor(Math.random() * data.length);

        if (array.includes(data[RandomIndex])) {
            j++
            continue
        }

        array.push(data[RandomIndex])

        const photoWrapper = document.createElement("div");
        photoWrapper.className = "photo";

        const img = document.createElement("img");
        img.src = data[RandomIndex].download_url;

        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.innerHTML = `
            <strong>${data[RandomIndex].author}</strong>
            <a href="${data[RandomIndex].url}">${data[RandomIndex].url}</a>
        `;

        photoWrapper.appendChild(img);
        photoWrapper.appendChild(overlay);
        gridContainer.appendChild(photoWrapper);
    }
}


morePhotosButton.addEventListener("click", loadMoreImages);

grayscaleButton.addEventListener("change", function () {
    if (this.checked) {
        gridContainer.classList.add("grayscale")
    } else {
        gridContainer.classList.remove("grayscale");
    }
});

bgc.addEventListener("click", function () {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

}
)