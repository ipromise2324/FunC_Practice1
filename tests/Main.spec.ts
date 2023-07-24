import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { Main } from '../wrappers/Main';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Main', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Main');
    });

    let blockchain: Blockchain;
    let main: SandboxContract<Main>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        main = blockchain.openContract(Main.createFromConfig({
            n: 0
        }, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await main.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: main.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and main are ready to use
    });

    it('should increment n value', async () => {
        // Initial value of n
        let nValue = await main.getCurrentNValue();
        console.log('nValue', nValue);
        // expect(nValue).toBe(0);
    
        // Increment n value
        const incrementValue = Math.floor(Math.random() * 100);
        const sender = await blockchain.treasury('sender');
        const incrementResult = await main.sendIncrementNValue(sender.getSender(), {
            value: toNano('0.05'), // You may need to adjust this value
            incrementValue: incrementValue
        });
        
        expect(incrementResult.transactions).toHaveTransaction({
            from: sender.address,
            to: main.address,
            success: true,
        });
        nValue = await main.getCurrentNValue();
        console.log('nValue', nValue);
        expect(nValue).toBe(incrementValue);
    });
    
    

    
});
