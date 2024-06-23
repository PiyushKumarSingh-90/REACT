import { useState } from 'react'
import './CreateProduct.css'

function CreateProduct()
{


    let [Product,setProduct] = useState({})

        function HandleInput()
        {
            // console.log(event)

            let copyProduct = {...Product}
            copyProduct[event.target.name] = event.target.value

            //shortcut for the upper algo

            // let copyProduct = {...Product,[event.target.name]:event.target.value} 
            setProduct(copyProduct)

            // console.log(Product)
        }


        function HandleSumit()
        {
            event.preventDefault()
            console.log(Product)

            fetch("url",{
                method:"POST",
                body:JSON.stringify(Product),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then((respone)=>{})
            .catch((err)=>{})
        }

        


    return(
        <section  className='form-parent' >

            <form className="form" onSubmit={HandleSumit} >

                <h1>Add Product</h1>

                    {name}
                <input className="inp" name="name" type="text" placeholder='Product Name' 
                    onChange={HandleInput}/>

                <input  className="inp"  name="price" type="text" placeholder='Product price' onChange={HandleInput} />

                <input className="inp" name="category"  type="text" placeholder='Product category' onChange={HandleInput} />

                <input className="inp"  name="Quantity" type="number" placeholder='Product Quantity' onChange={HandleInput} />

                <input className="inp"  name="Decription" type="text" placeholder='Product Decription' onChange={HandleInput} />

                <button  type="submit" className="btn">Add</button>

            </form>

        </section>
    )
}

export default CreateProduct