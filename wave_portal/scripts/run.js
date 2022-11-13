
const main = async () => {

    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy(
        {value: hre.ethers.utils.parseEther("0.0001"),});

    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let contractBal = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(hre.ethers.utils.formatEther(contractBal));

    await waveContract.getTotalWaves();

    const waveTxn = await waveContract.wave("lambda");
    await waveTxn.wait();

    await waveContract.getTotalWaves();


    const secondWaveTxn = await waveContract.connect(randomPerson).wave("kom");
    await secondWaveTxn.wait();

    contractBal = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(hre.ethers.utils.formatEther(contractBal));


    const WecondWaveTxn = await waveContract.connect(randomPerson).wave("bucha");
    await WecondWaveTxn.wait();

    contractBal = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(hre.ethers.utils.formatEther(contractBal));

    let td2 = await waveContract.connect(randomPerson).AddrWaveBalance();

    await waveContract.getTotalWaves();

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
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