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
  constructor(type) {
    this.type = true;
    if (type == false) this.type = false;
  }
  encrypt() {
    try {
      let messagearr = arguments[0].toUpperCase().split('');
      let keyword = arguments[1].toUpperCase();
      let abc = '';
      for (let i = 65; i <= 90; i++) {
        abc += String.fromCodePoint(i);
      }
      let ABC = abc.split('');

      while (keyword.length < arguments[0].length) {
        keyword += keyword;
      }
      keyword = keyword.slice(0, arguments[0].length).split('');

      let res = [];
      for (let i = 0, j = 0; i < messagearr.length; i++) {
        if (/[A-Z]/.test(messagearr[i])) {
          let MIndex = ABC.indexOf(messagearr[i]);
          let KIndex = ABC.indexOf(keyword[j]);

          let a = MIndex + KIndex;
          let CIndex = a % 26;
          res.push(ABC[CIndex]);
          j++;
        }
        else {
          res.push(messagearr[i]);
        }
      }

      if (!this.type) {
        return res.reverse().join("");
      }
      else return res.join("");
    } catch (error) {
      throw new Error(error);
    }
  }

  decrypt() {
    try {
      let encryptedMessagearr = arguments[0].toUpperCase().split('');
      let keyword = arguments[1].toUpperCase();
      let abc = '';
      for (let i = 65; i <= 90; i++) {
        abc += String.fromCodePoint(i);
      }
      let ABC = abc.split('');

      while (keyword.length < arguments[0].length) {
        keyword += keyword;
      }
      keyword = keyword.slice(0, arguments[0].length).split('');

      let res = [];
      for (let i = 0, j = 0; i < encryptedMessagearr.length; i++) {
        if (/[A-Z]/.test(encryptedMessagearr[i])) {
          let CIndex = ABC.indexOf(encryptedMessagearr[i]);
          let KIndex = ABC.indexOf(keyword[j]);

          if (CIndex < KIndex) {
            let MIndex = 26 + (CIndex - KIndex);
            res.push(ABC[MIndex]);
          }
          else {
            let MIndex = (CIndex - KIndex) % 26;
            res.push(ABC[MIndex]);
          }
          j++;

        }
        else res.push(encryptedMessagearr[i]);
      }
      if (!this.type) {
        return res.reverse().join("");
      }
      else return res.join("");
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
