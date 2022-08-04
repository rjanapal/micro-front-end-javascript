import faker from 'faker';


const mountCart=(el)=>{
    const cartNumber = `you have <div>${faker.random.number()}</div> items in cart`
    el.innerHTML=cartNumber;
}

if(process.env.NODE_ENV==='development'){
    const el= document.querySelector('#dev-cart');
    if(el){
        mountCart(el);
    }
}

export {mountCart}
