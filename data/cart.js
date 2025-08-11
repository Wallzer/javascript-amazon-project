export let cart = JSON.parse(localStorage.getItem('cart')) ;

if (!cart) {
     cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];
}


export function cartSearch(name){

    try{
        for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId===name){
            cart[i].quantity++;
            return true
        }
    }
    }catch(error){
        return false
    }

}

export const cartQuantity = () => {
    let cartQuantityValue = 0
    cart.forEach((item) => {
        cartQuantityValue += item.quantity

    });return cartQuantityValue
}

