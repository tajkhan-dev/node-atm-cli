import inquirer from "inquirer";
const Atm = async () => {
    const { pin } = await inquirer.prompt([
        {
            type: 'number',
            name: 'pin',
            message: 'Enter Your Pin'
        }
    ]);
    console.log(pin);
};
Atm();
