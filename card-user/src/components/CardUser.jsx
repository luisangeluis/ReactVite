import React from 'react'

const CardUser = ({ user }) => {
  return (
    <div className='container'>
      <div className="card">
        <img src={user?.picture.large} alt="avatar-user" />
        <div className="card-body">
          <div className="card-title">{user?.name.first}</div>
          <div className="card-text">{user?.email}</div>
          <div className="card-text">{user?.location.country}</div>
        </div>

      </div>
    </div>
  )
}

export default CardUser