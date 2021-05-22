# callweb3-js
This package is using web3 and web3 has been initialized just use common function from this package.

## Installation (NPM)

npm i --save callweb3js

## How it works..

There are two functions that has been used in this package.

### (1) - init();

 /*
     * Function: InIt()
     * @param {*} _infura // Curreant Provider - Set Network // Mainnet, rinkeby
     * @param {*} _contractAddress // Contract Address that has to be init
     * @param {*} _mainContractABI // Main Contract ABI JSON FILE
     * @param {*} _tokenContractAddress  // Token contract if any
     * @param {*} _tokenContractABI // Token contract ABI file (JSON) if any
     * @returns Initialized Web3
*/

### (2) - callContract;

  /*
     * Function: callContract
     * @param {*} contractType // ERC or CONTRACT
     * @param {*} name // Function name in ABI
     * @param {*} params // ALways be in Array ["0x00", "100", ....]
     * @param {*} privateKey // User Wallet Private Key
     * @param {*} callType // CALL or SEND
     * @returns Transaction Reciept or Error
  */