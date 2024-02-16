import React, { useEffect, useRef,useState } from 'react';



function useOnScreen(ref:any) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }



  const Portal = () => {
    const targetRef = useRef<any>();
    const isOnScreen = useOnScreen(targetRef);
    const audioRef0 = useRef(new Audio('/')); // Crea un riferimento all'oggetto Audio
    const audioRef = useRef(new Audio('/start.mp3')); // Crea un riferimento all'oggetto Audio
    const audioRef2 = useRef(new Audio('/loop.mp3')); // Crea un riferimento all'oggetto Audio
    const audioRef3 = useRef(new Audio('/endd.mp3')); // Crea un riferimento all'oggetto Audio

    function playMusic() {
      audioRef.current.play();
      audioRef2.current.loop = true; // Imposta il loop sul secondo audio
      audioRef2.current.play();

    }
  
    function stopMusic() {
      audioRef.current.pause(); // Interrompi la riproduzione del suono
      audioRef.current.currentTime = 0; // Riavvolgi il suono al punto iniziale (opzionale)
      audioRef2.current.pause(); // Interrompi la riproduzione del suono
      audioRef2.current.currentTime = 0; // Riavvolgi il suono al punto iniziale (opzionale)
      audioRef3.current.play();

    }
  
    useEffect(() => {
      console.log("Il componente è stato generato.");
  
      if (isOnScreen) {
        playMusic();
      }
  
      return () => {
        console.log("Il componente è stato smontato o un nuovo effetto è stato generato.");
        stopMusic();
      };
    }, [isOnScreen]);
  
    return (
      <div>
        <div className='translate-y-100' ref={targetRef}>
        <div className="vortice-animation">
          
        </div>


        </div>
      </div>
    );
  };
  
  export default Portal;
  