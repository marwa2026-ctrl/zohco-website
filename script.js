    const card = document.getElementById("card");
    const moreContent = document.getElementById("moreContent");
    const moreContent1 = document.getElementById("moreContent1");
    const toggleButton = document.getElementById("toggleButton");
    const VerticalLine2 = document.getElementById("vertical-line2")
    let isShowMore = false;
    
    toggleButton.addEventListener("click", () => {
        isShowMore = !isShowMore;

        if(isShowMore){
            moreContent.style.display = "block"
            moreContent1.style.display = "block"
            VerticalLine2.style.display = "none"
            toggleButton.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        }
        else{
            moreContent.style.display = "none";
            moreContent1.style.display = "none";
            VerticalLine2.style.display = "block"

            toggleButton.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
        }
    })

    // second dropdown
    const card2 = document.getElementById("card2");
    const moreContent2 = document.getElementById("moreContent2");
    const moreContent4 = document.getElementById("moreContent4");
    const toggleButton2 = document.getElementById("toggleButton2");

    let isShowMore2 = false;
    
    toggleButton2.addEventListener("click", () => {
        isShowMore2 = !isShowMore2;

        if(isShowMore2){
            moreContent2.style.display = "block"
            moreContent4.style.display = "block"
                        VerticalLine2.style.display = "none"

            toggleButton2.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        }
        else{
            moreContent2.style.display = "none";
            moreContent4.style.display = "none";
                        VerticalLine2.style.display = "block"

            toggleButton2.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
        }
    })

    // three dropdown
    const card3 = document.getElementById("card3");
    const moreContent3 = document.getElementById("moreContent3");
    const moreContent6 = document.getElementById("moreContent6");
    const toggleButton3 = document.getElementById("toggleButton3");

    let isShowMore3 = false;
    
    toggleButton3.addEventListener("click", () => {
        isShowMore3 = !isShowMore3;

        if(isShowMore3){
            moreContent3.style.display = "block"
            moreContent6.style.display = "block"
                        VerticalLine2.style.display = "none"

            toggleButton3.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
        }
        else{
            moreContent3.style.display = "none";
            moreContent6.style.display = "none";
                        VerticalLine2.style.display = "block"

            toggleButton3.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
        }
    })

    let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    const slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "flex";
}