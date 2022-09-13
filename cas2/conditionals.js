// ">" "<" ">=" "<=" "!" "==" "!="  
// const a = 5
// const b = 5

const a = Number(prompt('Vnesi prva vrednost'));
const b = Number(prompt('Vnesi vtora vrednost'));

// if e ako se ispolni uslovot sto e vo malite zagradi da prodolzi odnosno da vrati nekoja vrednost
if(a < b) {
    console.log(a + ' e pomalo od ' + b);
} else if (a > b) {
    console.log(a + ' e pogolemo od ' + b);  // ova ke se izvrsi dokolku gorniot uslov ne e ispolnet
} else {
    console.log (a + " e ednakvo na " + b );  // ova ke se izvrsi dokolku nieden od gornite uslovi ne e ispolnet
};


const broj1 = 7;
const broj2 = 20;

if((broj1 < broj2) && (broj1 < 10)) {
    console.log ('Uslovot e ispolnet, brojot e ednocifren');
};

const username = prompt('Vnesete korisnicko ime: ');
const password = prompt('Vnesete password');

if(!password) {
    console.log ('Ve molime vnesete validen password');  // ako pasvordot e pogresen so ! pretstavuva obratnoto 
};
