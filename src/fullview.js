

import './css/fullview.css'

function Fullview({data,addcart}) {

  return (
    <div key={data.id} className="fullview">
      <div className="fullview-img"><img src={data.image} alt=""></img></div>
      <h3 className="fullview title">{data.title}</h3>
      <h3 className="fullview-price">{data.price}</h3>
      <button onClick={()=>addcart(data)} className="fullview-cart">Add To Cart</button>
    </div>
  )
}
export { Fullview }