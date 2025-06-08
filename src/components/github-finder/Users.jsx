import React from 'react'

function User({user}) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const formattedDate = new Date(created_at)
  return (
    <div className='user'>
      <div className="user-avatar">
        <img src={avatar_url} alt={name || login} className='avatar' />
      </div>
      <div className="user-main">
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">
          <h2>{name || login}</h2>
        </a>
        <p className="user-joined">
          user joined on {`${formattedDate.getDate()} ${formattedDate.toLocaleString('en-us',{
            month: 'short',
          })} ${formattedDate.getFullYear()}`}
        </p>
        <div className="user-stats">
          <div>
            <span className="stat-label">public_repos</span>
            <span className="stat-value">{public_repos}</span>
          </div>
          <div>
            <span className="stat-label">followers</span>
            <span className="stat-value">{followers}</span>
          </div>
          <div>
            <span className="stat-label">following</span>
            <span className="stat-value">{following}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User