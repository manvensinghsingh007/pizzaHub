import React,{ useState} from "react";
import "./modal.css";
import { FaTimes } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/dataSlice";


function FoodBox({props}) {
  const [modal, setModal] = useState(false);
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const dispatch = useDispatch();
  console.log(toppings)

  const notify = () => {
    toast.success('Item has been added to cart', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      toggleModal()
  }

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <div>
      {modal && (
                <section className="modal animate">
                    <div onClick={toggleModal} className="overlay"></div>
                    <article className="modal-content">
                        <div className="rep-cont">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="rep-img" alt="sales rep"/>
                            <h3>Add to cart</h3>
                        </div>
                        <div className="modal-form">
                        <p>{props.description}</p>
                          <span style={{fontSize:"20px",fontWeight:"bolder"}}><label name="size">{props.size[0].title} : </label></span>
                          {/* size */}
                          {
                            props.size[0].items.map((size)=>(
                              <>
                                <input type="radio" name="size" value={size.size} onChange={(e)=>setSize(e.target.value)}/>
                                <label for="size"> {size.size} </label>
                              </>
                            ))
                          }
                          <br />
                          <span style={{fontSize:"20px",fontWeight:"bolder"}}><label name="addon">{props.toppings[0].title} :</label></span>
                          <br />
                          {/* topping */}
                          {
                            props.toppings[0].items.map((topping)=>(
                              <>
                                <input type="checkbox" 
                                  name="topping" 
                                  value={topping.name} 
                                  onChange={(e)=>setToppings((prev)=>
                                    prev.includes(e.target.value) ?
                                    prev.filter((item) => item !== e.target.value) :
                                    [...prev,e.target.value]
                                  )}/>
                                <label for="topping"> {topping.name} </label>
                                <br />
                              </>
                            ))
                          }
                        </div>
                        <button onClick={()=>dispatch(addToCart({...props,qty:1,currSize:size,currToppings:toppings}), notify())} className="add-to-cart">Add to cart</button>
                        <button className="close-modal" onClick={toggleModal}>
                            <FaTimes />
                        </button>

                    </article>
                </section>
            )}
      <div className="details">
        <img src={props.img_url} alt="" className="details-img" />
        <div className="food-name" style={{height:"14%",overflowY:"hidden"}}>
          <h2>{props.name}</h2>
        </div>

        <div className="food-details">
          <div style={{fontWeight:"bolder"}}>
            <p>
              Price: {props.price}
            </p>
            <p>{props.rating}/5</p>
          </div>
        </div>

        <div className="cart-btn">
          
          <button onClick={toggleModal} className="btn">Add to cart</button>
          <span style={{paddingLeft:"10%",fontSize:"small"}}>{props.isVeg ? <span style={{color:"green"}}>VEG</span> : <span style={{color:"red"}}>NON-VEG</span>}</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FoodBox;
