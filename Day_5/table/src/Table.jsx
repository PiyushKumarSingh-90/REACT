import {useState, useEffect} from 'react'
import './Table.css'


function Table() 
{

    let [names, setName] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setName(data);
            })
            .catch((err) => { console.log(err); })
    }, [])

    return (
        <>
            <table>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
                {    
                    names.map((user) => {
                        return (<tr><td>{user.name}</td><td> {user.username}</td><td>{user.email}</td><td>{user.website}</td></tr>);
                    })
                }
            </table>
        </>
    )
}

export default Table