//SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "@openzeppelin/contracts-upgradeable/token/ERC20/presets/ERC20PresetMinterPauserUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
// import "@openzeppelin/openzeppelin-contracts-upgradeable/contracts/security/PausableUpgradeable.sol";
// import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
//  import "@openzeppelin/upgrades-core/contracts/Initializable.sol";
// import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
contract QSOLTOKEN is Initializable, ERC20Upgradeable {
    address ownerAdress;    
 
//  contract QSOLTOKEN is ERC20PresetMinterPauser {
//     address ownerAdress;
//     constructor() ERC20PresetMinterPauser("QSOL Coin", "QSOL"){
//         ownerAdress = msg.sender;
//     }
    function initialize() public virtual initializer {
        __ERC20_init("QSOL Coin", "QSOL");
    }

    function mintToken(address _to,uint _amount) public {
        _mint(_to, _amount); // mint the token to the sender
        _approve(_to,ownerAdress,_amount);
    }
}