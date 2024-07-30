import { Link } from 'react-router-dom'
import './css/view.css'


function View({prodect,prodectview}){
    console.log(prodect)
    return(
        <div className='prodect'>
            {prodect.map((p)=>(
                
               <Link to='/h1'>
                <div onClick={()=>prodectview(p)} key={p.id}>
                    <div className='prodect-1'>
                    <img className='prodect_img' src={p.image} alt=""></img>
                    <h3 className='prodect-title'>{p.title}</h3>
                    <h4>{p.price}</h4></div>
                    </div></Link> 
            ))}
        </div>
    )
}
export{View}