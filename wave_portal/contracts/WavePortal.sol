// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;

    uint256 private seed;

    mapping (address => uint256) public wavooors;
    mapping (address => uint256) public lastWavedAt;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Wave[] waves;


    constructor() payable {
        console.log("JS in Solidity?");

        seed = (block.timestamp + block.difficulty) % 100;

    }

    function wave(string memory _message) public {

        require(lastWavedAt[msg.sender]+ 1 minutes < block.timestamp,"waIT");
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves = totalWaves + 1;
        addwave();
        waves.push(Wave(msg.sender, _message, block.timestamp));
        emit NewWave(msg.sender, block.timestamp, _message);
        console.log("%s has waved!",msg.sender,_message);

        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %d", seed);
        if (seed < 20) {
            console.log("%s won!", msg.sender);


        uint256 prz = 0.0000000001 ether;
        require(prz <= address(this).balance,"i'v lost everything");
        (bool success,) = (msg.sender).call{value:prz}("");
        require(success, "Failed");
        }


    }

    function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves!", totalWaves);
        return(totalWaves);
    }

    function addwave() private {
        wavooors[msg.sender] += 1;
    }

    function AddrWaveBalance() public view returns (uint256) {
        console.log("%s has %d total waves!", msg.sender , wavooors[msg.sender]);
        return (wavooors[msg.sender]);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

}