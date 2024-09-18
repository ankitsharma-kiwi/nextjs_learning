'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const UserTable = ({ data, searchParams }: any) => {
    const [sortData, setSortData] = useState<any[]>([]);

    useEffect(() => {
        if (searchParams.sortOrder === 'name') {
            const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
            setSortData(sortedData);
        } else if (searchParams.sortOrder === 'email') {
            const sortedData = [...data].sort((a, b) => a.email.localeCompare(b.email));
            setSortData(sortedData);
        } else {
            setSortData(data);
        }
    }, [searchParams, data]);

    return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
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
