import React from 'react'
import AddToCart from '../Components/AddToCart'

interface User {
  id: number
  name: string
  email: string
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  // Cache: no-store means it will provide the updated data from the api, not from the cache file system
  // { next: { revalidate: 10 } } means it will revalidate the data after 10 seconds

  const data: User[] = await res.json()

  console.log('data', data)
  return (
    <>
      <AddToCart />
      <h1>Users Table</h1>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default page
