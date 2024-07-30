
function Cart({cart}){


    return(
<div>
    {cart.map((c)=>(
        <div><h4>{c.title}</h4></div>
    ))}
</div>
    )
}
export {Cart}