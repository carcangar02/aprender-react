import { useState } from 'react'

export function TwCard ({userName, inicialIsFollowing, children}) {
    const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)
   
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
     ? 'tw-card-btn is-following'
     : 'tw-card-btn'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }




    return( 
    <article className='tw-card'>
        <header className='tw-card-header'>
            <img className='tw-card-avatar'alt= "Avatar de midudev" src = {`https://unavatar.io/${userName}`}/>
            <div className='tw-card-info'>
                <strong className='tw-card-infoUserAlias'>{children}</strong>
                <span className='tw-card-infoUserName'>@{(userName)}</span>
            </div>
        </header>

        <aside className='tw-card-btnbox'>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-card-text'>{text}</span>
                <span className='tw-card-stopFollowing'>Dejar de seguir</span>
            </button>
        </aside>
      </article>
      )
}