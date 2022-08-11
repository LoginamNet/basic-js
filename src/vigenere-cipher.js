const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
  };

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    key = key.toUpperCase();
    message = message.toUpperCase();
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    while (key.length <= message.length) {
      key += key;
    };

    for (let i = 0; i < message.length; i++) {

      if (message[i].match(/[A-Z]/gm)) {
        let addr = ((alphabet.length + alphabet.search(message[i]) + alphabet.search(key[i])) % alphabet.length);
        result += alphabet[addr % alphabet.length];
      } else {
        result += message[i];
        key = key.slice(0, i) + message[i] + key.slice(i);
      }
    }

    return this.reverse ? result : result.split('').reverse().join('');
  };
  decrypt(message, key) {
      if (!message || !key) throw new Error(`Incorrect arguments!`);

      key = key.toUpperCase();
      message = message.toUpperCase();
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
  
  
      while (key.length <= message.length) {
        key += key;
      };
  
      for (let i = 0; i < message.length; i++) {
  
        if (message[i].match(/[A-Z]/gm)) {
          let addr = ((alphabet.length + alphabet.search(message[i]) - alphabet.search(key[i])) % alphabet.length);
          result += alphabet[addr % alphabet.length];
        } else {
          result += message[i];
          key = key.slice(0, i) + message[i] + key.slice(i);
        }
      }
  
      return this.reverse ? result : result.split('').reverse().join('');
  };
};

module.exports = {
  VigenereCipheringMachine
};
