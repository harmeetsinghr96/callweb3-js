const Web3 = require("web3");
const fs = require("fs");
const path = require('path');

class InitWeb3 {
  constructor(
    _infura,
    _contractAddress,
    _mainContractABI,
    _tokenContractAddress,
    _tokenContractABI
  ) {

    this.web3Instance = new Web3(_infura);
    this.mainContractObj = new this.web3Instance.eth.Contract(
      _mainContractABI,
      _contractAddress
    );

    if (_tokenContractAddress) {
      this.tokenContractObj = new this.web3Instance.eth.Contract(
        _tokenContractABI,
        _tokenContractAddress
      );
    }

    /*
     * Writing JSON files (ABIS) 
     */
    this.writeJSONfile(_mainContractABI, _tokenContractABI);
  }

  writeJSONfile(_mainContractABI, _tokenContractABI) {
    if (_tokenContractABI) {
      const p = path.resolve(__dirname, "abis", "tokenContractABI.json");
      fs.readFile(p, "utf8", (err, data) => {
        fs.writeFile(p, JSON.stringify(_tokenContractABI), "utf8", (err, data) => {});
      });
    }

    const p = path.resolve(__dirname, "abis", "contractABI.json");
    fs.readFile(p, "utf8", (err, data) => {
      fs.writeFile(p, JSON.stringify(_mainContractABI), "utf8", (err, data) => {});
    });
  }
}

module.exports = InitWeb3;
