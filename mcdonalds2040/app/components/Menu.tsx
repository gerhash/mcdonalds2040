import React,{useState} from 'react'


const products = [
    {
        category:"Panini", 
        items:[
            {title:"Gran Crispy McUfo®",motto:"Crispy McUfo® ti aspetta in Versione Gran!",desc:"Chi ama il  Crispy McUfo® ne prenderebbe volentieri almeno 50, per questo c'è Gran Crispy McUfo®: panino con Carne 100% Aliena da allevamenti marziani, croccante bacon-x2 100% da pancetta lunare, formaggio lunare e inconfondibile salsa Crispy. Come il classico ma più grande",path:""},
            {title:"LX82 Gran Crispy McUfo® ",motto:"Il vero amore è LX82",desc:"Se ami il Crispy McUfo®, il nuovo LX82 Gran Crispy McUfo® ti lascerà sicuramente con le bocche aperte grazie alla salsa Uranium gusto LX82, oltre agli ingredienti del classico, ovviamente in formato Giga",path:""},
            {title:"Big Tasty 2040",motto:"A Volte Ritornano",desc:"Dopo ben 20 anni è tornato sul Mercato il Big Tasty, versione 2040...vieni a scoprirlo!",path:""},
            {title:"OctoChickenBurger",motto:"Una Istituzione",desc:"Tutta la semplicità del petto di Polipo Lunare avvolta in una panatura croccante di pollo, insieme all'insalata glaciale e la salsa Nuclear",path:""},
            {title:"Filet O'Blob",motto:"Un tuffo nel liquame",desc:"A volte per sorprendere bastano 3 semplici ingredienti: Blob, Blob, Blob. Il Risultato? Un grande classico che unisce il sapore spaziale al gusto unico di McDonald's",path:""},
            {title:"MarsBurger®",motto:"Un gusto che ti sorprende, un morso dopo l'altro",desc:"100% petto di pollo avvolto in una croccante roccia spaziale, Caciocavallo Saturniano DOP, salsa agrosalatadolce e bacon",path:""},
        ]},
    {
        category:"Bevande",
        items:[{}]
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

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category:any) => {
      setSelectedCategory(category);
    };
  
    const filteredItems = selectedCategory
      ? products.find((product) => product.category === selectedCategory)?.items || []
      : [];

      
  return (
    <div className='flex justify-betweem w-full'>
        <div className='w-1/3  pl-[30px] pr-[10px] flex flex-col justify-center gap-4'>
            {products.map((product) => (
                <div key={product.category} className='text-white'  onClick={() => handleCategoryClick(product.category)}>
                    <h1 className='text-[50px]'>{product.category}</h1>
                    <hr className='border-2 rounded-full border-white' />
                </div>
  ))}
        </div>

        <div className='w-2/3 flex justify-center p-[50px]'>
            <div className='bg-white shadow-inner-xl w-2/3 border-2 border-[#E29944] rounded-l-2xl'>
                    <div className='h-full w-full flex flex-col justify-center items-center p-[30px]'>
                        <div className='bg-[#E29944] h-1/2 w-full rounded-2xl'>
                                FOTO
                        </div>
                        <div className='flex flex-col items-start h-1/2 w-full p-4'>
                                <h1 className='text-[32px] font-semibold'>Title</h1>
                                <h2 className='text-[18px] text-[#E29944] font-regular italic'>Motto</h2>
                                <div className='mt-4' style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                                    <p className=''>Desc desc desc desc Desc desc desc desc Desc desc desc desc Desc desc desc descDesc desc desc descDesc desc desc descDesc desc desc descDesc desc desc desc</p>
                                </div>
                        </div>
                    </div>
            </div>
            <div className='w-1/3 flex flex-col gap-1'>
                {filteredItems.map((item, index) => (
                    <div key={index} className='w-full bg-[#E29944] p-4 rounded-r-3xl'>
                        <h2 className='text-white text-[18px]'>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Menu