import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import {  qtyPlus, qtySub,removeFromCart } from "../redux/dataSlice";
import {AiOutlinePlus } from 'react-icons/ai'


function PaymentSect() {
  const carts=useSelector((state)=>state.data.cart)
  const [total,setTotal] = useState(0)
  const dispatch = useDispatch();

  useEffect(()=>{
    let sum=0;
    for(let i=0;i<carts.length;i++){
      sum+=carts[i].qty*carts[i].price
    }
    setTotal(sum)
  },[carts])

  return (
    <>
      <div className="payment">
        <div className="name">
          <h4>Item</h4>
          <p>Qty</p>
          <p>Price</p>
        </div>

        <div className="price">

        {
          carts.length !==0 ?
          carts.map((item)=>(
          <article>
            <div className="pay">
              <div>
                <b>{item.name}</b>
              </div>
              <p className="qty-box"><button style={{color:"white",border:"none",background:"none",fontSize:"24px",marginRight:"5px"}} onClick={()=>dispatch(qtySub(item.id))}>-</button>{item.qty}<button style={{color:"white",border:"none",background:"none",fontSize:"22px",marginLeft:"5px"}} onClick={()=>dispatch(qtyPlus(item.id))}>+</button></p>
              <p>Rs.{item.price*item.qty}</p>
            </div>

            <div className="pay">
              <input className="order-input" placeholder="Input Order Note" ></input>
              <span className="trash-box" title="delete" onClick={()=>dispatch(removeFromCart(item.id))}><FaTrashAlt /></span>
            </div>
          </article>
          ))
          :
          <article>
            <b style={{textAlign:"center"}}>Cart Empty</b>
          </article>
        }

          <figure>
            <div className="last">
              <p className="space">Discount</p>
              <p>Total</p>
            </div>
            <div className="last">
              <p className="space">Rs.0</p>
              <p>Rs.{total}</p>
            </div>
          </figure>




        </div>
      </div>
    </>
  );
}

export default PaymentSect;
