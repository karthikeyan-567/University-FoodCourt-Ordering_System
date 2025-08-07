import React from 'react'
import Cartitem from '../components/Cartitems' 
import '../cart.css'

function Cart() {

  let nonveg ="🟥";
  let veg ="🟢";
  return (
    <div className='cart-bg '>
     <div className="w-100 bg-warning py-1 text-dark">
  <marquee classNmae="fw-bold text-dark" style={{width: "80", fontSize: "18px"}}>
    🍕 Order soon to avail Coupon Code: "Treatkudra" — Grab your cravings, fill your table, and let happiness follow the bill! 🎁 Fast orders get extra surprises!
  </marquee>
</div>

    
        <div className='cart__container'>
        
       
       
        <div className='order-qt'>
           <h1 className='text-success bg-light  p-3 ' style={{width:"fit-content" , borderRadius:"30px 10px" , boxShadow:"2px 2px 10px black"}}>Order Checkout </h1>
                 <h1 className=' text-muted rounded-pill '>Appdiye oru plate happiness vaangitu ponga :) </h1>
           <h5 className='text-warning ' style={{marginTop:"20px"}}>Craving? ’s fix that! --- Order now, thank yourself later.</h5>
        </div>
         <table class="table user-detail">
  <thead>
    <tr>
      <th scope="col">Name </th>
      
      <td scope="col">User </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Order No.</th>
      <td>231</td>
      
      
    </tr>
    <tr>
      <th scope="row">Table No.</th>
      <td>10</td>
    
    </tr>
    <tr>
      <th scope="row">Order total     </th>
      <td>*</td>
      
      
    </tr>
  </tbody>
</table>
 </div>
 <section className='cart-con' >
    <h4 className='text-dark  px-3  py-2 ' style={{width:"fit-content " , position:"relative" , left:"10px" , top:"10px" , borderRadius:"10px" , }}>Location : <span className='fs-5'> Arcot chennai 600...</span></h4>
  <div>
   <Cartitem item_name="Biriyani" item_qty= {1 } item_type={nonveg}/>
   <Cartitem item_name="Idli sambar " item_qty={ 1} item_type={veg}/>

   
  </div>
 </section> 
    
    </div>
  )
}

export default Cart
