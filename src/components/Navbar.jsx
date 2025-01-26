import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Navbar = () => {
  return (
   
         <div className='navbar'>
        <div className="right-side">

        <img className='netflix-logo'src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" />
       <div className='navbar-li'>
       <ul>
       
        
        <li>Home</li>
        <li>Series</li>
        <li>Films</li>
        <li>My list</li>
       </ul>
       </div>
    </div>
    <div className="left-side">
<div>
   
    
</div>
    </div>
        </div>
    
  )
}

export default Navbar


 {/* <Stack direction="row" >
      <Avatar sx={{ bgcolor: `#D81F26` }} variant="square">
        A
      </Avatar>
    </Stack> */}