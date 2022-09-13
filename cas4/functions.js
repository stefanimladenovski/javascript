//  DEKLARACIJA --- se definira funkcijata i se vnatre vo nea

function helloWorld (parametar1, parametar2) {
    //  funkciite primaat parametri kako promenlivi koi se definirani vo malite zagradi
    // vo golemite zagradi ili ovie {}  body ili telotot na funkcijata kade sto stoi kodot 
    const zbir = parametar1 + parametar2;
    // alert(zbir);
    // alert("Hello world")
    
    return zbir
}

//   POVIK --- se povikuva funkcijata so vrednostite na parametrite, dokolkku stavime poveke vrednosti od kolku sto imame parametri, tie sto se visok se ignoriraat

// helloWorld(12, 55, 89, 8, 3);
console.log(helloWorld(12, 55, 89, 8, 3));

const value = helloWorld(8, 12);
console.log(value);


// ARROW FUNCTION 
const changeText = () => {
    //  DOM object
    const element = document.getElementById('title');
    element.textContent = element.textContent + "My first excercise with functions";
    const list = document.createElement("ul");

    const listItem = document.createElement("li");
    listItem.textContent = "HELLO WORLD";

    list.appendChild(listItem);

    element.appendChild(list);
};