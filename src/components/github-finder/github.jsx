import React,{useState,useEffect, use} from 'react'
import User from './Users';
import './github.css';


function GithubProfileFinder() {
    const [username, setUsername] = useState("random");
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
async function fetchgithubProfile() {
    setLoading(true);
    const respone = await fetch(`https://api.github.com/users/${username}`);
    const data = await respone.json();
    // console.log(data);
    if(data){
        setProfile(data);
    }
    setLoading(false);
    setUsername("");

}

useEffect(() => {
    fetchgithubProfile();
    },[]);

if(loading){
    return <div className="loading">Loading...</div>
}

  return (
    <div className="github-profile-container">
        <div className="input-wrapper">
            <input type="text" placeholder="Enter GitHub username" name='search-by-username' 
            value={username} onChange={(event)=>setUsername(event.target.value)}/>
            <button onClick={fetchgithubProfile}>Search</button>
        </div>
        {
            profile !== null ? <User user={profile} /> : <div className="no-profile">No profile found</div>
        }
    </div>
  )
}

export default GithubProfileFinder