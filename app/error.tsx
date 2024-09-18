'use client'
import React from 'react'

interface Props {
  error: Error
  reset: () => void
}

const CustomErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error)
  return (
    <>
      <div>Unexpect error happen</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  )
}

export default CustomErrorPage
