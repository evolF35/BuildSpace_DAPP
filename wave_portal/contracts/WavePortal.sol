// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    uint256 totalWaves;

    mapping (address => uint256) public wavooors;

    constructor(){
        console.log("JS in Solidity?");
    }

    function wave() public {
        totalWaves = totalWaves + 1;
        addwave();
        console.log("%s has waved!",msg.sender);
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

}