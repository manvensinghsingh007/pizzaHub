import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'counter',
  initialState: {
    product : [
        
    ],
    cart : [
        {
            "id": 2,
            "qty":1,
            "name": "Double Cheese Margherita",
            "description": "A classic delight loaded with extra 100% real mozzarella cheese",
            "isVeg": true,
            "rating": 5,
            "price": 375,
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
            "size": [{
                "isRadio": true,
                "title": "choose size",
                "items": [{
                        "size": "Regular"
                    },
                    {
                        "size": "Medium"
                    },
                    {
                        "size": "Large"
                    }
                ]
            }],
            "toppings": [{
                "isRadio": true,
                "title": "choose topping(s)",
                "items": [{
                        "name": "Red Pepper"
                    },
                    {
                        "name": "Onion"
                    },
                    {
                        "name": "Grilled Mushroom"
                    },
                    {
                        "name": "Extra Cheese"
                    },
                    {
                        "name": "Black Olive"
                    }
                ]
            }]
        }
    ]
  },
  reducers: {
    getData : (state,action) =>{
        state.product = action.payload
    },
    qtyPlus: (state,action) => {
        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id===action.payload){
                state.cart[i].qty+=1
                return
            }
        }
    },
    qtySub: (state,action) => {
        for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id===action.payload){
                if (state.cart[i].qty>1){
                    state.cart[i].qty-=1
                }
                else{
                    let temp = state.cart.filter((item)=>item.id!==action.payload)
                    state.cart = temp;
                }
            }
        }
    },
    addToCart: (state,action) => {
      state.cart.push(action.payload)
    },
    removeFromCart : (state,action) =>{
        let temp = state.cart.filter((item)=>item.id!==action.payload)
        state.cart = [...temp];
    }
  },
})

// Action creators are generated for each case reducer function
export const { qtyPlus, qtySub, addToCart,removeFromCart, getData } = dataSlice.actions

export default dataSlice.reducer