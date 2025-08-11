export const cart=[];

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
