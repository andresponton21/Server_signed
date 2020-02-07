var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var data = TestContract.methods.withdrawAll().encodeABI();
var rawTx = {
  nonce: '0x02',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x6710',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  data: data
}
var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
.on('receipt', console.log);


