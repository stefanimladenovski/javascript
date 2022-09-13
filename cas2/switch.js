// Mleko -40, Leb- 20, Banana- 10, Portokal- 5, Jabolko- 6, Domat -5
// + - * / %

const product = 'Mleko';

switch (product) {
    case 'Mleko': {
        console.log('Cenata na mlekoto e 40 denari.');
        break;
    };
    case 'Leb': {
        console.log('Cenata na lebot e 20 denari.');
        break;
    };
    case 'Banana': {
       console.log('Cenata na bananata e 10 denari.');
       break;
    };
    case 'Portokal':
    case 'Domat': {
        let variable = 'Kupuvam nekolku domati'
        console.log(variable)
        console.log('Cenata na produktot e 5 denari.');
        break;
    };
    case 'Jabolko': {
        console.log('Cenata na jabolkoto e 6 denari.');
        break;
    };
    default: {
        console.log('Nepoznat produkt!');
        break;
    };
};

//   VEZBA 1

const den = 'sreda';

switch(den) {
    case 'ponedelnik':
    case 'vtornik':
    case 'sreda':
    case 'cetvrtok':
    case 'petok': {
        console.log('RABOTEN DEN!');
    break;
    };

    case 'sabota':
    case 'nedela': {
        console.log('VIKEEND!!');
    };

    default: {
        console.log('Nepostoecki den');
    break;
    };  
};

//   VEZBA 2

const s = Number(prompt('Vnesi broj:'));

if(s % 5 === 0) {
    console.log('Brojot e deliv so 5');
} else {
    console.log('Brojot ne e deliv so 5');
}