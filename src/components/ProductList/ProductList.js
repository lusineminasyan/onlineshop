// import { useEffect } from "react";
// import ProductItem from "../ProductItem/ProductItem"
// import { useSelector,useDispatch } from "react-redux";
// import { productsSelector } from "../../redux/thunks/productsThunk";
// import { useLocation } from "react-router-dom";
// import { getPhones } from "../../redux/thunks/phoneThunk";
// import { getTvs } from "../../redux/thunks/tvThunk";
// import { getNotebooks } from "../../redux/thunks/notebookThunk";

// const ProductList = () => {

//     // const {pathname} = useLocation();
//     // const products = useSelector(productsSelector);
//     // const name = pathname.substring(1);
//     // const data={name: products.name}

//     // console.log(products,"products");
//     // console.log(pathname,'pathname');
//     // console.log(name,"name")
//     // console.log(data,"data")
// //     return (
// //         <div className = "product-list">
// //          { data[name].map( elm =>
// //              <ProductItem 
// //              key =  {elm.id} 
// //              {...elm}
// //              />)}
// //        </div>   
// //        )}
// //    export default ProductList

//     const dispatch = useDispatch();
//    // const phones = useSelector(state => state.phonesSlice.phones);
//     //const notebooks = useSelector(state => state.notebooksSlice.notebooks);
//     const tvs = useSelector(state => state.tvsSlice.tvs);
//     //console.log('phones', phones)

//     useEffect(() => {
//         dispatch(getTvs())
//     }, [dispatch]);
//     return (
//       <div className = "product-list">
//        { tvs.map( elm =>
//            <ProductItem 
//            key =  {elm.id} 
//            {...elm}
//            />)
//        }
//      </div>   
//      )
// }
//  export default ProductList
     

