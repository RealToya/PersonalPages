let FaqArray = [];
let FaqElement = document.querySelectorAll(".faq-item")

FaqElement.forEach((element) => {
    element.addEventListener("mouseover", () => OpenFAQ(element)); // => é usado pois não estamos a referenciarmos nos a "this" mas a cada instancia da classe na pagina
});

function OpenFAQ(faqnum) 
{
    console.log(faqnum.innerHTML)
}

