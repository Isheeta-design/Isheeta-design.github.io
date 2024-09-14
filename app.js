document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll("img");

for( const image of images) {
    fetch("https://www.istockphoto.com/photo/futuristic-digital-blockchain-background-fintech-technology-gm1060950942-283607342?utm_campaign=srp_portrait_photos_40&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2FFintech%2F&utm_medium=affiliate&utm_source=pexels&utm_term=Fintech")
    .then(response => response.json())
    .then(data => {
        image.src = data.message,
    image.width = 100,
    image.height = 100;})
}

}) 