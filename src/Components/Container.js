import React,{useEffect} from "react";
import "./container.css";
import TopSect from "./TopSect";
import FoodCont from "./FoodCont";
import { useSelector ,useDispatch} from "react-redux";
import { Loader } from "react-full-page-loader-overlay";
import axios from "axios";
import { getData } from "../redux/dataSlice";


function Container() {
  const products=useSelector((state)=>state.data.product)
  const dispatch = useDispatch();
  console.log(products)

  useEffect(()=>{
    const fetchData =async()=> {
      const res=await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      console.log(res.data)
      dispatch(getData(res.data))
    }
    fetchData();
  },[])

  return (
    <>
      {
        products.length===0 ? 
        <Loader show={true}  /> :
        <div className="container">
          <TopSect />
          <FoodCont />
        </div>
      }
    </>
  );
}

export default Container;
