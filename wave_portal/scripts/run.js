
const main = async () => {

    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    await waveContract.getTotalWaves();

    const waveTxn = await waveContract.wave();
    await waveTxn.wait();

    await waveContract.getTotalWaves();


    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait();
    const WecondWaveTxn = await waveContract.connect(randomPerson).wave();
    await WecondWaveTxn.wait();

    let td2 = await waveContract.connect(randomPerson).AddrWaveBalance();

    await waveContract.getTotalWaves();
}


const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}

runMain();