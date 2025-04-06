let FaqArray = [];
let FaqElement = document.querySelectorAll(".faq-item")

FaqElement.forEach((element) => {element.addEventListener("mouseover", () => OpenFAQ(element))}); // => é usado pois não estamos a referenciarmos nos a "this" mas a cada instancia da classe na pagina

function OpenFAQ(faqnum) 
{    
    if (faqnum.getElementsByClassName("faqdescription").length > 0) {
        document.querySelectorAll(".faqdescription").forEach(description => {description.style.display = "none";}); //Dá display none a todos os elementos para depois dar block ao objeto em "Hover"

        faqnum.getElementsByClassName("faqdescription")[0].style.display = "block"; //Utilizando o numero dado por cada elemento aceder ao elemento de display.
    }
}

