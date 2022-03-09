export const findPrice = (ingredients)=>{
    console.log(ingredients);
    let price = 10000;

    if(ingredients.includes('Pollo')){
        price += 2000;
    }
    if(ingredients.includes('Peperoni')){
        price += 1500;
    }
     price += ingredients.length*3000;
    console.log(price);
     return price
}