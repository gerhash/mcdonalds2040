import React,{useState} from 'react'
import { useSpring,animated,useTransition } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor';

const products = [
    {
        category:"Panini", 
        items:[
            {id:1, title:"Gran Crispy McUfo®",motto:"Crispy McUfo® ti aspetta in Versione Gran!",desc:"Chi ama il  Crispy McUfo® ne prenderebbe volentieri almeno 50, per questo c'è Gran Crispy McUfo®: panino con Carne 100% Aliena da allevamenti marziani, croccante bacon-x2 100% da pancetta lunare, formaggio lunare e inconfondibile salsa Crispy. Come il classico ma più grande",path:""},
            {id:2,title:"LX82 Gran Crispy McUfo® ",motto:"Il vero amore è LX82",desc:"Se ami il Crispy McUfo®, il nuovo LX82 Gran Crispy McUfo® ti lascerà sicuramente con le bocche aperte grazie alla salsa Uranium gusto LX82, oltre agli ingredienti del classico, ovviamente in formato Giga",path:""},
            {id:3,title:"Big Tasty 2040",motto:"A Volte Ritornano",desc:"Dopo ben 20 anni è tornato sul Mercato il Big Tasty, versione 2040...vieni a scoprirlo!",path:""},
            {id:4,title:"OctoChickenBurger",motto:"Una Istituzione",desc:"Tutta la semplicità del petto di Polipo Lunare avvolta in una panatura croccante di pollo, insieme all'insalata glaciale e la salsa Nuclear",path:""},
            {id:5,title:"Filet O'Blob",motto:"Un tuffo nel liquame",desc:"A volte per sorprendere bastano 3 semplici ingredienti: Blob, Blob, Blob. Il Risultato? Un grande classico che unisce il sapore spaziale al gusto unico di McDonald's",path:""},
            {id:6,title:"MarsBurger®",motto:"Un gusto che ti sorprende, un morso dopo l'altro",desc:"100% petto di pollo avvolto in una croccante roccia spaziale, Caciocavallo Saturniano DOP, salsa agrosalatadolce e bacon",path:""},
        ]},
    {
        category:"Bevande",
        items:[
            {id:7, title:"CocaCola-G4®",motto:"Gusto CocaCola, G-4 di potenza!",desc:"Alla spina dispponibile nei formati 0,25L, 0,4L, 0,5L, 1,5L, 12,2L.",path:""},
            {id:8, title:"MoonWater®",motto:"Not a Simple Water!",desc:"Acqua speciale dal principale fiume lunare, disponbiile solo 0,5L.",path:""},
            {id:9, title:"Oxygen",motto:"Freschezza, naturalezza, nostalgia!",desc:"Ormai da anni non è più essenziale, ma è un piacere respirarlo di nuovo, bibita all'Ossigeno puro, formato da 0,5L.",path:""},
            {id:10, title:"Antidote Rad",motto:"Scudo della pelle, sapore di stelle",desc:"Bevanda fresca estiva, sapore tropicale marziano, perfetta per curare radiazioni e ustioni, formato da 0,3L.",path:""},
            {id:11, title:"SHIELD",motto:"Ricordi quel gioco la la...",desc:"50% scudo dopo averla bevuto, sapore blueberry, ottima consistenza, consigliato, formato soltanto 0,5L in giara di vetro",path:""},

        ]
    },
    {
        category:"Patatine",
        items:[{}]
    },
    {
        category:"Sfiziosità",
        items:[{}]
    },
    {
        category:"Dessert & Gelati",
        items:[{}]
    },
    {
        category:"Salse",
        items:[{}]
    }
]



const Menu = () => {
    let firstproduct = products[0].items[0]
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(firstproduct);
    const [isVisible, setIsVisible] = useState(false);

    
   


    
    const handleCategoryClick = (category:any) => {
      setSelectedCategory(category);
    };

    
    const filteredItems = selectedCategory
      ? products.find((product) => product.category === selectedCategory)?.items || []
      : [];

     // Funzione per gestire il clic su un item
    const handleItemClick = (index) => {
        const clickedItem = filteredItems[index];
        // Imposta l'elemento selezionato nello stato
        setSelectedItem(clickedItem);
    };
        
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50px, 0)',
    });
    
    const transitions = useTransition(filteredItems, {
        from: { opacity: 0, transform: 'translate3d(-20px, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 500 },
      });

  return (
    <div className='flex justify-betweem w-full'>
         <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <div className='w-1/3  pl-[30px] pr-[10px] flex flex-col justify-center gap-4'>
            {products.map((product) => (
                <animated.div style={fade} key={product.category} className='text-white'  onClick={() => handleCategoryClick(product.category)}>
                    <h1 className='text-[50px]'>{product.category}</h1>
                    <hr className='border-2 rounded-full border-white' />
                </animated.div>
  ))}
        </div>
        </VisibilitySensor>

        <div className='w-2/3 flex justify-center p-[50px]'>
            <div id="box"  style={{ zIndex: 2 }} className='bg-white shadow-inner-xl w-2/3 border-2 border-[#E29944] rounded-l-2xl'>
                    <div className='h-full w-full flex flex-col justify-center items-center p-[30px]'>
                        <div className='bg-[#E29944] h-1/2 w-full rounded-2xl'>
                                FOTO
                        </div>
                        <div className='flex flex-col items-start h-1/2 w-full p-4'>
                                <h1 className='text-[32px] font-semibold'>{selectedItem.title}</h1>
                                <h2 className='text-[18px] text-[#E29944] font-regular italic'>{selectedItem.motto}</h2>
                                <div className='mt-4' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                                    <p className=''>{selectedItem.desc}</p>
                                </div>
                        </div>
                    </div>
            </div>
            <div  style={{ zIndex: 1 }} className='w-1/3 flex flex-col gap-1'>
            {transitions((style, item, _, index) => (
                <animated.div key={index} style={style} onClick={() => handleItemClick(index)} className='w-full bg-[#E29944] p-4 rounded-r-3xl'>
                <h2 className='text-white text-[18px]'>{item.title}</h2>
                </animated.div>
            ))}
        </div>
            
        </div>

    </div>
  )
}

export default Menu