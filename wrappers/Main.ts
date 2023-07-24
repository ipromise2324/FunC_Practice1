import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from 'ton-core';

export type MainConfig = {
    n: number;
};

export function mainConfigToCell(config: MainConfig): Cell {
    return beginCell().storeUint(config.n,64).endCell();
}

export class Main implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new Main(address);
    }

    static createFromConfig(config: MainConfig, code: Cell, workchain = 0) {
        const data = mainConfigToCell(config);
        const init = { code, data };
        return new Main(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }

    async sendIncrementNValue(provider: ContractProvider, via: Sender,
        opts: {
            value: bigint,
            incrementValue: number
    }) {
        // Create a cell with the increment value
        const body = beginCell().storeUint(opts.incrementValue, 64).endCell();
        console.log('opts.incrementValue', opts.incrementValue);
        // Send the message to the contract
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: body,
        });
    }
    
    async getCurrentNValue(provider: ContractProvider) : Promise<number> {
        const result = await provider.get('get_current_n_value',[]);
        return result.stack.readNumber();
    }
}
