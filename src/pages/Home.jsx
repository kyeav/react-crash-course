import React, { useEffect, useState } from "react"
import axios from "axios"
import User from "../components/User"
import { Link } from "react-router-dom"

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers()
        }, 2000)
    }, [])

    // const pixels = "3px"

    function renderUsers() {
        return users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
                <User
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username}
                />
            </Link>
        ))
    }

    function renderSkeletonLoading() {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {users.length ? renderUsers() : renderSkeletonLoading()}
            {/* {users.map((user) => (
                <div key={user.id} style={{ border: `${pixels} solid black` }}>
                    <div>{user?.id}</div>
                    <div>{user?.name}</div>
                    <div>{user?.email}</div>
                    <div>{user?.username}</div>
                </div>
            ))} */}

            {/* {users.length > 0
                ? <h1>{users[0]?.name}</h1>
                // {users.length > 0 ? users[0].name : null}
                : <h1>Loading...</h1>
            } */}
        </div>
    )
}

export default Home