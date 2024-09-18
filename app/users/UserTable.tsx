import Link from 'next/link'
import React from 'react'
import { sort } from 'fast-sort'
interface User {
  id: number
  name: string
  email: string
}

const UserTable = async ({ searchParams }: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' })
  const data: User[] = await res.json()

  const sortData = sort(data).asc(searchParams.sortOrder === 'email' ? (u) => u.email : (u) => u.name)

  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th>
            <Link href={'/users?sortOrder=name'}>Name</Link>
          </th>
          <th>
            <Link href={'/users?sortOrder=email'}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortData.map((user: any) => (
          <tr key={user.id}>
            <td>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
