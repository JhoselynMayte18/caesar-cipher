var start = prompt('Enter message!!');
// creando la funcion para el cifrado del mensaje con el metodo ascii.
var cipher = function(message) {
  var cipherMessage = '';
  var spaces = 33;
  for (var i = 0; i < message.length; i++) {
    var x = message[i].charCodeAt(0);
    var asciiCode = (x - 65 + spaces) % 26 + 65;
    cipherMessage += String.fromCharCode(asciiCode);
  }

  return cipherMessage;
};
// creando segunda funcion para el descifrado del mensaje con el metodo ascii.
var decipher = function(cipherMessage) {
  var message = '';
  var spaces = 33;
  for (var i = 0; i < cipherMessage.length; i++) {
    var x = cipherMessage[i].charCodeAt(0);
    var asciiCode = (x - 65 + 26 + 26 - spaces) % 26 + 65;
    message += String.fromCharCode(asciiCode);
  }

  return message;
};
console.log('This is your result' + ' ' + cipher(start));
