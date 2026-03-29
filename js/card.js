const handleAddproduct=()=>{
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");
    const product=productEl.value ;
    const quantity=quantityEl.value ;

    //function call 
     displayProduct(product,quantity);
     addProductTocart(product,quantity);

    console.log('product add',product,quantity);
    productEl.value=" ";
    quantityEl.value=" ";
}

const getcard=()=>{
    const card={};
    return card;
}

const addProductTocart=(product,quantity)=>{
    const  card=getcard();
    card[product]=quantity;
    console.log('card',card);
}





const displayProduct=(product,quantity)=>{
    const li=document.createElement('li');
    li.innerText=`${product}:${quantity}`
    const ul=document.getElementById('products-container');
    ul.appendChild(li);

}