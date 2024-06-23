
import { useEffect, useState } from 'react'
import './App.css'


function App() 
{

  // useEffects will be by-default called for every render and rerender
  // passing a blank array 

  // let[name,setname] = useState("Piyush")
  // let[age,setage]=useState(20)

  // let [item,setItem] = useState(['item 1', 'item 2', 'item 3',  'item 4',  'item 5'])

  let [users,setusers]= useState([])

  


  // useEffect(()=>
  // {
  //   console.log("first called")
  // },[])

  // useEffect(()=>
  // {
  //   console.log("second called")
  // },[age])

  useEffect(()=>
  {

    fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"})

    .then((response)=>
    {
      return response.json()
    })

    .then((data)=>
    {
      // console.log(data)
      setusers(data);
    })
    .catch((error)=>
    {
      console.log(error)
    })

  })

  

  return (
    <>
    
      {/* // <h1>Welcome {name} {age}</h1>

      // <button onClick={()=>
        {
          setname("modda")
        }}> change Name</button>

      <button onClick={()=>
        {
          setage(21)
        }}> change Age</button>

      <button onClick={()=>
        {

          let copyitem=[...item]//seprate concept
          copyitem.push("item 6")
          setitem(copyitem)

        }}> change Age</button>

      { 
        item.map((e)=>
          {
            return(
              <h1>{e}</h1>
            )
          })
      } */}


      {
          users.map((user)=>
          {
            return (
              <h1>{user.name}</h1>
            )
          })
      }
      
    </>

  )

}

export default App
