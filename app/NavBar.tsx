import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href={'/'} className="mr-5">
        NextJs
      </Link>
      <Link href={'/users'}>Users</Link>
    </div>
  )
}

export default NavBar
