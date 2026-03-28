const addNumberToLs=()=>{
    const number=Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number',number);

}

const setobjectToLs=()=>{
    const customer={name:'rohim khalu',porducts:3,price:75}
    const customerJSON=JSON.stringify(customer)
    localStorage.setItem('customer',customerJSON)
}

const readobjectFromls=()=>{
    const customerJson=localStorage.getItem('customer')
    const customer=JSON.parse(customerJson)
    console.log(typeof customer);
}

const getNumberFromLs=()=>{
    const number=localStorage.getItem('number');
    console.log('from saved local storage',number);
}