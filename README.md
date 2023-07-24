# Practice1
This repository contains a TON smart contract implemented in FunC. The contract provides several methods for interaction and management. A suite of tests has been written to validate the functionality of this smart contract.

## Contract Methods

The smart contract implements the following primary methods:

- **load_data**: This method loads data from the contract's storage.
- **save_data**: This method saves data to the contract's storage.
- **recv_internal**: This method receives internal messages and add increatment number to value of n.
- **get_current_n_value**: This method retrieves the current value of 'n' from the contract's storage.

## TypeScript Wrapper

A TypeScript wrapper is provided to interact with the contract:

- **sendDeploy**: This method deploys the contract.
- **sendIncrementNValue**: This method sends a message to the contract to increment the value of 'n'.
- **getCurrentNValue**: This method retrieves the current value of 'n' from the contract.

## Testing the Contract

A suite of tests has been written to validate the functionality of this smart contract. These tests are included in the `test.ts` file in this repository. To run the tests, use the following command:

```
npm run test
```

## Contract Usage

The contract is initialized with a value of 'n'. The sendIncrementNValue method can be used to increment the value of 'n' by a specified amount. The getCurrentNValue method can be used to retrieve the current value of 'n'.
## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Requirements
- Node.js with a recent version like v18, verify version with node -v
- IDE with TypeScript and FunC support like Visual Studio Code with the FunC plugin
- Ton Keeper (Ton Wallet)
### Install
```
npm create ton@latest 
npm install
```
### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`

# License
MIT
# FunC_Practice
