#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta('_____________________WELLCOME______________________'));
let myBalance = 10000;
let myPIN = 1124;
async function Atm() {
    let EnterPin = await inquirer.prompt([{
            name: 'Pin',
            type: 'password',
            message: chalk.cyan('enter the PIN .')
        }]);
    if (EnterPin.Pin == myPIN) {
        let methodSelection = await inquirer.prompt([{
                name: 'select_method',
                type: 'list',
                message: chalk.cyan('please select method to perform action'),
                choices: ['Check balance', 'Withdraw', 'Instant withdraw']
            }]);
        if (methodSelection.select_method === 'Check balance') {
            console.log(chalk.green(`your balance is ${myBalance}`));
        }
        else if (methodSelection.select_method === 'Withdraw') {
            let withdrawAmount = await inquirer.prompt([{
                    name: 'withdraw_amount',
                    type: 'input',
                    message: chalk.cyan('please enter an amount you want to withdraw . ')
                }]);
            if (isNaN(withdrawAmount.withdraw_amount)) {
                console.log(chalk.red('please enter amount in valid digit. '));
            }
            else if (withdrawAmount.withdraw_amount > myBalance) {
                console.log(chalk.red('INSUFFICIENT BALANCE !!'));
            }
            else {
                console.log(chalk.green(`PROCESS SUCCESS!!.`));
                console.log(chalk.greenBright('your remainig amount is ', myBalance - withdrawAmount.withdraw_amount));
            }
        }
        else {
            let intantWithdraw = await inquirer.prompt([{
                    name: 'instant_withdraw',
                    type: 'list',
                    message: chalk.cyan('please select an amount .'),
                    choices: ['100000', '50000', '25000', '10000', '5000', '2500', '1000',]
                }]);
            if (intantWithdraw.instant_withdraw > myBalance) {
                console.log(chalk.red('INSUFFICIENT BALANCE !!'));
            }
            else {
                console.log(chalk.green(`PROCESS SUCCESS!!.`));
                console.log(chalk.greenBright('your remainig amount is ', myBalance - intantWithdraw.instant_withdraw));
            }
        }
    }
    else {
        console.log(chalk.red('WRONG PIN !!'));
        console.log(chalk.redBright('please enter pin in valid four digit.'));
        Atm();
    }
}
Atm();
