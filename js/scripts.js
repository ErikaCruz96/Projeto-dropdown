//Selecionar elemento
const topBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", function(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > 500){
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
    }
})

topBtn.addEventListener("click", function(e){
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})