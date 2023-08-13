import inquirer from "inquirer";
interface atmData{
    pin:number,
    accType:string,
    options:string,
    cashoptions:number,
    method:string,
    amount:number
    name:string
    
}
const Atm=async()=>{
const balance=100000
    const {pin,options,method,amount,name,cashoptions}:atmData =await inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Enter Your username'
        },
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
        },
        {
          type:'list',
          choices:['check balance','Withdrawal'],
          name:'options',
          message:'choose one option'
        },
        {
            type:'list',
            name:'method',
            choices:['Fast Cash' , 'Manual'],
            message:'choose one option',
            when(answers){
                return answers.options==='Withdrawal'
            }
        },
        {
            type:'number',
            name:'amount',
            message:'enter amount',
            when(answers){
                return answers.method==="Manual"
            }

        
        },
        {
            type:'list',
            name:'cashoptions',
            choices:[10000,20000,30000,50000],
            message:'select one',
            when(answers){
                return answers.method==="Fast Cash"
            }

        
        }
    ])
    if(name&&pin){

    
     if(options==="check balance"){
            console.log(balance)
        }else if(method==='Manual'){
           const remainingBal= balance-amount
            console.log(`Rs ${amount} Cash withdrawed remaining balance is Rs${remainingBal} `)
        
        }else if(method==="Fast Cash"){
            const remainingBal=balance-cashoptions
            console.log(`${cashoptions} withdrawed Your remaining balance is ${remainingBal}`)
        }
    }

}

Atm()