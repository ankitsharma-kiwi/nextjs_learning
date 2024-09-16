import React from 'react'

interface User {
  id: number
  name: string
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: "no-store" })
  // Cache: no-store means it will provide the updated data from the api, not from the cache file system
  // { next: { revalidate: 10 } } means it will revalidate the data after 10 seconds
  
  const data: User[] = await res.json()

  console.log("data", data)
  return (
    <>
      <h1>Users</h1>
      {data.map((user: any) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </>
  )
}

export default page
