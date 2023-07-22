# Practice1
I have implemented a simple counter program using funC, which allows increasing the contract's counter N by sending a message.
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
