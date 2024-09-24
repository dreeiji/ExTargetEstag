function inverterString(string) {
  var novaString = "";

  for (var i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }

  return novaString;
}

// Solicita ao usuário que insira uma string
const stringOriginal = prompt("Digite uma palavra ou frase:");
const stringInvertida = inverterString(stringOriginal);

alert(
  "String original: " +
    stringOriginal +
    "\n" +
    "String invertida: " +
    stringInvertida
);
