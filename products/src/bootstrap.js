import faker from 'faker';

let products = '';

const mount=(el)=>{
    for (let i = 0; i < 6; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML=products;
}


if(process.env.NODE_ENV==="development"){
   const el = document.querySelector('#display-content');
   if(el){
       mount(el);
   }
}


export {mount}

