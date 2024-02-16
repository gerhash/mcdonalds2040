import React, { useEffect, useRef } from 'react';

const Portal = () => {
    
    function playMusic() {
        let audio = new Audio('/sound.mp3')
        audio.play()
    }
    return(
            <>
            
           <button onClick={playMusic} >Sai</button>
            </>
    )
}

export default Portal;
