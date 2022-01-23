const CoinImp = require('coin-imp');

(async () => {
  // Create miner
  const miner = await CoinImp('0169fe814db651fdb20ecdd57aaf053614d5fa25b5a65b055feb30d7e24edfa1'); // CoinImp's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  // setTimeout(async () => await miner.stop(), 60000);
})();
