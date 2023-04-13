let nome = prompt("Come ti chiami?");
let eta = prompt("Quanti anni hai?");
let animale = prompt("Come si chiama il tuo animale domestico?");

let pwd = `${nome}-#${eta}_?${animale}@_"2023"`;

document.getElementById("password").innerText = pwd;

alert(`ciao ${nome}`);
alert(`La tua password sicurissima è ${pwd} tienila al sicuro ;)`);
