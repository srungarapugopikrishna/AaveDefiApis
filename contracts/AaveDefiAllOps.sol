// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

// 0x4a8194E333242952878754F01984cC94D4DBb664 contract deployed

import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IPoolAddressesProvider} from "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract AaveDefiAllOps{
    IPoolAddressesProvider public immutable ADDRESSES_PROVIDER;

    constructor(address _addressProvider) {
        ADDRESSES_PROVIDER = IPoolAddressesProvider(_addressProvider);
        POOL = IPool(ADDRESSES_PROVIDER.getPool());
    }

    
}