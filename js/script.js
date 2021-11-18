let nome = prompt('Digita il tuo nome')
console.log('il tuo nome', nome);

let cognome = prompt('Digita il tuo cognome')
console.log('il tuo cognome', cognome);

let colore = prompt('Digita il tuo colore preferito')
console.log('il tuo colore preferito', colore);

document.writeln(nome + cognome + colore + ' 21');

document.getElementById('dati-inseriti').innerHTML = nome + cognome + colore + ' 21'