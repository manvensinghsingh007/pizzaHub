import React, { useEffect } from "react";
import "./foodcont.css";
import FoodBox from "./FoodBox";
import PaymentSect from "./PaymentSect";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";


function FoodCont() {
  const [cat,setCat] = useState("all")
  const allProducts=useSelector((state)=>state.data.product)
  const [products,setProducts] = useState(allProducts)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (cat==="all"){
      setProducts(allProducts)
      return
    }
    if (cat==="veg"){
      let temp = allProducts.filter((item)=>item.isVeg===true)
      setProducts(temp)
      return
    }
    let temp = allProducts.filter((item)=>item.isVeg===false)
    setProducts(temp)
  },[cat])
  
  return (
    <>
      <div className="foodcontainer">
        <div className="left-side">
          <div className="cards">
            <div className="all">
              <div className="varieties">
                <div className="var-btn" onClick={()=>setCat("all")}>All</div>
                <div className="var-btn" onClick={()=>setCat("veg")}>Veg</div>
                <div className="var-btn" onClick={()=>setCat("nveg")}>Non Veg</div>
              </div>
            </div>

            <main>
              {
                products.map((pizza)=>(
                  <FoodBox props={pizza} key={pizza.id}/>
                ))
              }
            </main>
          </div>
        </div>
        <div className="right-side">
          <PaymentSect />
        </div>
      </div>
    </>
  );
}

export default FoodCont;
