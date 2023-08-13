import inquirer from "inquirer";
interface atmData{
    pin:number,
    accType:string,
    
}
const Atm=async()=>{
    const {pin,} =await inquirer.prompt([
        {
            type:'number',
            name:'pin',
            message:'Enter Your Pin'
        },
        {
            type:'list',
            choices:["current",'saving'],
            name:'accType',
            message:'Choose account type'
        }
    ])
    console.log(pin)
    console.log
}

Atm()