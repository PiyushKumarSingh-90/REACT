import './Product.css'

function Product(props)
{
    return (
        <div className="products">

            {/* <h1>{props.name}</h1> */}
            
            <div className='Product'>
                <img  className="img" src={props.image_Url} alt="image " />
            </div>

            <div className='img-details'>
                <h1>{props.title}</h1>
                <h5>{props.details}</h5>
            </div>

        </div>
    )
}
export default Product