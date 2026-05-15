function suodata(tyyppi) {
    const kortit = document.querySelectorAll(".kortti");

    kortit.forEach(kortti => {
        if (tyyppi === "kaikki") {
            kortti.style.display = "block";
        } else if (kortti.classList.contains(tyyppi)) {
            kortti.style.display = "block";
        } else {
            kortti.style.display = "none";
        }
    });
}