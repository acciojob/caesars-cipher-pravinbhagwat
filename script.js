function rot13(str) {
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) { // check if character is uppercase letter
      decoded += String.fromCharCode((c - 65 + 13) % 26 + 65); // decode using ROT13 algorithm
    } else {
      decoded += str.charAt(i); // non-alphabetic character, pass it on
    }
  }
  return decoded;
}