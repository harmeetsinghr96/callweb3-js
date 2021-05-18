const Web3 = require('web3');

class InitWeb3 {

    constructor(_infura, _contractAddress, _mainContractABI, _tokenContractAddress, _tokenContractABI) {

        this.web3Instance = new Web3(_infura);
        this.mainContractObj = new this.web3Instance.eth.Contract(_mainContractABI, _contractAddress);

        if (_tokenContractAddress) {
            this.tokenContractObj = new this.web3Instance.eth.Contract(_tokenContractABI, _tokenContractAddress);
        }

   }    
}

module.exports = InitWeb3;