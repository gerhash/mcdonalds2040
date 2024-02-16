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
            {id:7, title:"CocaCola-G4®",motto:"Gusto CocaCola, G-4 di potenza!",desc:"Alla spina dispponibile nei formati 0.25L, 0.5L, 1.5L, 12.0L",path:""},
            {id:8, title:"MoonWater®",motto:"Not a Simple Water!",desc:"Acqua speciale dal principale fiume lunare, disponbiile solo 0.5L.",path:""},
            {id:9, title:"Oxygen",motto:"Freschezza, naturalezza, nostalgia!",desc:"Ormai da anni non è più essenziale, ma è un piacere respirarlo di nuovo, bibita all'Ossigeno puro, formato da 0.5L.",path:""},
            {id:10, title:"Antidote Rad",motto:"Scudo della pelle, sapore di stelle",desc:"Bevanda fresca estiva, sapore tropicale marziano, perfetta per curare radiazioni e ustioni, formato da 0.3L.",path:""},
            {id:11, title:"SHIELD",motto:"Ricordi quel gioco la la...",desc:"50% scudo dopo averla bevuto, sapore blueberry, ottima consistenza, consigliato, formato soltanto 0.5L in giara di vetro",path:""},

        ]
    },
    {
        category:"Patatine",
        items:[
            {id:12, title:"Patatine Mars® Regular",motto:"Classiche ed Inimitabili!",desc:"Perfette per uno Snack, da gustare da sole o accompagnate da una delle nostre salse. Patate tagliate interamente a Parallelepipedi!",path:""},
            {id:13, title:"Patatine Mars® TITAN",motto:"Senza che menu Sarebbe?",desc:"Le riconosci subito, anche con tutti e 7 gli occhi chiusi! Sono Lunghe, dorate, Euclidiane, Quadridimensionali...goditele con tutte le salse! PORZIONI DA VERO TITANO***",path:""},
            {id:14, title:"Le Ricche Mars® + MoonQueso®",motto:"Gli amanti del Queso Lunare sono serviti!",desc:"Le patatine di sempre più tutto il gusto del salsa calda MoonQueso®, lasciati tentare dalle golosissime!",path:""},
            {id:15, title:"Le Ricche Mars® + MoonQueso® + Asteroids®",motto:"Asteroids® stanno bene su TUTTO!",desc:"Le patatine di sempre più tutto il gusto del salsa calda MoonQueso® + extra Asteroids®, lasciati tentare dalle golosissime!",path:""},
        ]
    },
    {
        category:"Sfiziosità",
        items:[
            {id:16, title:"Stranger McMars®",motto:"Con cosa sono fatti!(NESSUNO LO SA)",desc:"Tenere crocchette di ?????? impanato/a. Buonissime da sole, squisite con le salse, radiottive con le bibite, sono un Grande Classico a cui è difficile resistere. Le puoi gustare come vuoi, da solo o in compagnia, anche se probabilmente le mangerai tutte solo.",path:""},
            {id:17, title:"Panzarotti Ripieni Vintage®",motto:"Un classico Sud Italiano, da oltre 100 anni",desc:"Un cuore caldo e filante per farti vivere i ricordi terrestri, 100% nostalgici, pomodoro e mozzarella sono un piacere per il palato.",path:""},
            {id:18, title:"McSnack®",motto:"Uranio Tascabile",desc:"Ormai la merenda dei lavoratori, dalla scoperta dell'uranio commestibile è una grarantita carica di energie e fonte disumana di proteine, ;D",path:""},
            {id:18, title:"Asteroids®",motto:"Impossibile Resistere!",desc:"Con il loro gusto unico, la loro croccantezza e la qualità delle Rocce Spaziali, le Asteroids ti conquisteranno",path:""},

        ]
    },
    {
        category:"Dessert & Gelati",
        items:[
            {id:19, title:"McFlurry® Uranio",motto:"Un vortice pericoloso",desc:"Il gusto unico di McFlurry® in una nuova versione super golosa, con Uranio e granella croccante. Tieniti pronto ad un gelato NUCLEARE.",path:""},
            {id:20, title:"McFlurry® Water",motto:"Vintage e Gustoso",desc:"Da quando l'acqua è stata sostituita come fonte di vita primaria...nessuno ha più voluto saperne, ma quanto è buona l'ACQUA? Disponibile McFlurry® gusto ACQUA pura di sorgente!",path:""},
            {id:21, title:"Ice Cream Silicium",motto:"Chi resiste al Silicio",desc:"Gelato al Silicio fatto con 100% Silicio, combinazione golosa tra O2 e Silicio ti farà sciogliere ad ogni cucchiaiata.",path:""},
            {id:22, title:"Ice Cream Asteroids®",motto:"Pioggia di Meteoriti!",desc:"Classico Gelato con tempesta di Meteore! Ti cadranno i dent per la croccantezza delle Rocce Spaziali...",path:""},
            {id:23, title:"Cono",motto:"Semplicemente Irresistibile",desc:"Il Cono McDonalds è così da sempre: semplice,cremoso e irresistibile. Una golosa spirale di gelato al fiordilatte, fatto con latte intero 100% marziano, su una cialda croccante, per chi ha sempre voglia di gelato.",path:""},
            {id:24, title:"Donut Asteroids®",motto:"Il più goloso",desc:"Un dolce donut con una Pioggia di Rocce Lunari Asteroids® sopra, irresistibili",path:""},
            {id:25, title:"Donut Fragolona",motto:"La Felicità",desc:"Un dolce donut con una glassatura di zucchero rosa e Fragolona sopra.",path:""},

        ]
    },
    {
        category:"Salse",
        items:[
            {id:26, title:"Ketchup",motto:"Dolcezza inconfondibile",desc:"Alleato indiscusso delle nostre patatine, il nostro ketchup accompagnerà tutta la bontà dei tuoi Menu Preferiti.",path:""},
            {id:27, title:"Maionese",motto:"Sapore Cremoso",desc:"Delicata, Cremosa, Irresistibile. La nostra maionese divide tutti: c'è chi li adora con le patatine, chi con gli Strangers McMars®, chi con tutti i nostri altri prodotti",path:""},
            {id:28, title:"Salsa Crispy McBacon® Vintage",motto:"Il gusto del panino nostalgico più amato di sempre",desc:"Era leggenda, finalmente è tornata la salsa più amata dai Crispy lover e non solo, cosa aspetti? Corri a provarla!",path:""},
            {id:29, title:"Agrosalatadolcepiccante",motto:"Armonia di sapori",desc:"Dolce, salata e piccante allo stesso momento, nata per i più confusi dell'universo, ti stupirà quando la assaggerai con le Patatine, l'hai già provata?",path:""},
            {id:30, title:"Nuclear",motto:"Intensa e mortale",desc:"Vuoi dare un tocco di sapore extra e rischio al tuo piacere? Non perdere la nostra salsa Nuclear a base di Uranio!",path:""},
            {id:31, title:"Mexicana",motto:"¡Picante como la vida misma!",desc:"Nuestra salsa mexicana es como un mariachi en tu paladar: ¡te hace bailar, te hace sudar y te deja con ganas de más! Prepárate para una explosión de sabores que te hará exclamar '¡Ay, caramba!' en cada bocado. ¡Pero cuidado! Como un buen chisme, una vez que la pruebas, ¡no podrás mantenerla en secreto! ¡Que viva el sabor de México en cada salsa!",path:""},

        ]
    }
]



const Menu = () => {
    let firstproduct = products[0].items[0]
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(firstproduct);
    const [isVisible, setIsVisible] = useState(false);
    const [itemIndex, selectedItemIndex] = useState(0);
    
   


    
    const handleCategoryClick = (category:any) => {
      setSelectedCategory(category);
    };

    
    const filteredItems = selectedCategory
      ? products.find((product) => product.category === selectedCategory)?.items || []
      : [];

     // Funzione per gestire il clic su un item
    const handleItemClick = (index) => {
        const clickedItem = filteredItems[index];
        selectedItemIndex(index);
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
         <VisibilitySensor onChange={(isVisible:any) => setIsVisible(isVisible)}>
        <div className='w-1/3  pl-[30px] pr-[10px] flex flex-col justify-center gap-4'>
            {products.map((product) => (
                <animated.div style={fade} key={product.category} className='text-white cursor-pointer'  onClick={() => handleCategoryClick(product.category)}>
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
                <animated.div key={index} style={style} onClick={() => handleItemClick(index)}   className={`w-full bg-[#E29944] p-4 rounded-r-3xl cursor-pointer ${itemIndex === index ? '' : ''}`}>
                <h2 className='text-white text-[18px]'>{item.title}</h2>
                </animated.div>
            ))}
        </div>
            
        </div>

    </div>
  )
}

export default Menu