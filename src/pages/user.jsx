import React,{useState,useEffect} from 'react';


function Users(){
    useEffect(()=>{
        fetchUsers();
    },[]);

    const[users,setUsers]=useState([]);

    const fetchUsers = async()=>{
        const data=await fetch(
            'http://127.0.0.1:8000/react/reglogin?format=json'
        );
        const usersList=await data.json();
        console.log(usersList)
        setUsers(usersList)
    }

    return(
        <div>
            {users.map((u,i)=>(
                <h1 key={i}>{u.userid}</h1>
            ))
            }
        </div>
    )
}
export default Users;