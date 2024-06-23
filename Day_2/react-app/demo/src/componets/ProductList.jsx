import React, { useEffect, useState } from 'react'
import './ProductList.css'
import Product from './Product'

function ProductList() 
{

    // let products=[

    //     {
    //         id:1,
    //         name:" Roronoa Zoro",
    //         details:"strawaht pirates",
    //         image_Url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/    01/roronoa-zoro.jpg"
    //     },

    //     {
    //         id:2,
    //         name:"Asta",
    //         details:"Demon Hunter king"  ,
    //         image_Url: "https://www.fortressofsolitude.co.za/wp-content/uploads/2022/08/Black-Clover-Season-5-1140x641.jpeg"
    //     },

    //     {
    //         id:3,
    //         name:"Monkey D. Luffy",
    //         details:"Strawaht Pirates Caption",
    //         image_Url: "https://assetsio.reedpopcdn.com/Luffy-Gear-5-eyes-and-smiling.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    //     },


        let [product,setproduct] = useState([])

        useEffect(()=>{

            fetch('https://fakestoreapi.com/products')

            .then((response)=>
            {
                return response.json()
            })

            .then((data)=>
            {
            setproduct(data)
            })
            .catch((error)=>
            {
            console.log(error)
            })


        })


    

    return (

        <section className='product_list'>

            {/* <Product
                name={products[0].name}
                image_Url={products[0].image_Url}
                details={products[0].details}
            /> */}

            {

                product.map((prod)=>
                {

                    return(

                        <Product

                            title={prod.title}
                            image_Url={prod.image}
                            

                        />

                    )

                })

            }


        </section>

)

}

export default ProductList
