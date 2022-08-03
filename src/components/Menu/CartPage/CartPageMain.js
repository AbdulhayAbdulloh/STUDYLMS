import React,{useState} from 'react';

const order1=[
    {
        Product:'Wirebound Notebook x 2',
        total:'$138.000'
    },
    {
        Product:'Compact Stabler x 1',
        total:'$19.00'
    },
    {
        Product:'Wooden Pencil Yellow x 1',
        total:'$22.00'
    },
    {
        Product:'Subtotal',
        total:'$105.00'
    },
   
]

export default function CartPageMain() {
    const [order,setOrder] = useState(order1)
  return (
      <section id='cart-page-main'>
          <div className='courses-linkes'>
            <span>Home</span><i className='fas fa-chevron-right'></i><span>Shop</span>
            <i className='fas fa-chevron-right'></i><span>Cart Page</span>    
          </div>
          <div className='content'>
              <div className='cart-page-main-uptitle'>
                     <a>Returning customer? Click here to login</a>
                     <a>Have a coupon? Click here to enter your code</a>
              </div>
             <div className='cart-page-main_item'>
                 <div className='cart-page-main_item-left'>
                     <h4>Billing Details</h4>
                     <div className='cart-page-main_item_details1'>
                         <div>
                             <label>First Name *</label>
                             <input type='text' />
                         </div>
                         <div className='details-input2'>
                             <label>Last Name *</label>
                             <input type='text' />
                         </div>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Company Name *</label>
                             <input type='text' />
                     </div>
                     <div className='cart-page-main_item_details1'>
                        <div>
                             <label>Email Address *</label>
                             <input type='text' />
                         </div>
                         <div  className='details-input2'>
                             <label>Phone *</label>
                             <input type='text' />
                         </div>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Country *</label>
                             <input type='text' placeholder='England'/>
                             <i className='fas fa-chevron-down'></i>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Address *</label>
                             <input type='text' placeholder='Street address'/>
                     </div>
                     <div className='cart-page-main_item_details2'>
                             <input type='text' placeholder='Apartment,suite,unit etc.(optional)'/>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Town / City *</label>
                            <input type='text'/>
                     </div>
                     <div className='cart-page-main_item_details1'>
                        <div>
                             <label>State / Country *</label>
                             <input type='text' />
                         </div>
                         <div  className='details-input2'>
                             <label>Postcode / ZIP *</label>
                             <input type='text' />
                         </div>
                     </div>
                     <div className='cart-page-main_item_details1-check'>
                            <input type="text" checked='checked'/>
                            <a>Create an account?</a>
                    </div>

                 </div>
                 <div className='cart-page-main_item-left cart-page-main_item-right'>
                 <h4>Ship to deffarent address </h4>
                     <div className='cart-page-main_item_details1'>
                         <div>
                             <label>First Name *</label>
                             <input type='text' />
                         </div>
                         <div  className='details-input2'>
                             <label>Last Name *</label>
                             <input type='text' />
                         </div>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Company Name *</label>
                             <input type='text' />
                     </div>
                     {/* <div className='cart-page-main_item_details1'>
                        <div>
                             <label>Email Address *</label>
                             <input type='text' />
                         </div>
                         <div>
                             <label>Phone *</label>
                             <input type='text' />
                         </div>
                     </div> */}
                     <div className='cart-page-main_item_details2'>
                            <label>Country *</label>
                             <input type='text' placeholder='England'/>
                             <i className='fas fa-chevron-down'></i>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Address *</label>
                             <input type='text' placeholder='Street address'/>
                     </div>
                     <div className='cart-page-main_item_details2'>
                             <input type='text' placeholder='Apartment,suite,unit etc.(optional)'/>
                     </div>
                     <div className='cart-page-main_item_details2'>
                            <label>Town / City *</label>
                            <input type='text'/>
                     </div>
                     <div className='cart-page-main_item_details1'>
                        <div>
                             <label>State / Country *</label>
                             <input type='text' />
                         </div>
                         <div  className='details-input2'>
                             <label>Postcode / ZIP *</label>
                             <input type='text' />
                         </div>
                     </div>
                     <div className='cart-page-main_item_details3'>
                          <label>Order Notes</label>
                          <textarea />
                     </div>
                 </div>
             </div>
             <div className='cart-page-main-order'>
                 <h4>Your Order</h4>
                 <table>
                    
                        <thead>
                             <tr>
                                    <th>Product</th>
                                    <th>Total</th>
                                </tr>
                        </thead>
                           {order1.map((elem,index)=>{
                            return(
                                <tr>
                                    <td>{elem.Product}</td>
                                    <th>{elem.total}</th>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <th>Shopping</th>
                        <td className='free-charge-td'>
                          <form>
                          <input type="radio"/>x``
                              </form>Free shopping<br/>
                               Flat Rate:<span><b>$10.00</b></span>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th>$105.00</th>
                    </tr>
                    </table>
             </div>
             <div className='cart-page-main_direct-bank'>
                    <div className='cart-page-main_direct-bank_elem1'>
                        <a>Direct Bank Transfer</a>
                        <p> 
                             Make your payment directly into our bank account. Please use your Order
                             ID as the payment reference. Your order won’t be shipped until the funhave cleared in our account.
                        </p>
                
                    </div>  
                    <div className='cart-page-main_direct-bank_elem2'>
                         <a>PayPal</a>
                         <span>What is PayPal?</span>
                    </div>
                    <div className='place-order'>
                            <a>PLACE ORDER</a>
                    </div>
             </div>
          </div>
      </section>
  )
}
