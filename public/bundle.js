const ABIcontract = [];
const addressContract = "0x829212Ca8EF16E6Bd73803eB45fbDea6FCfB0368";

const web3 = new Web3("http://localhost:8545");

const purifiedSmartContract = new web3.eth.Contract(
  ABIcontract,
  addressContract
);

console.log(purifiedSmartContract);

web3.eth.getAccounts().then(console.log);
