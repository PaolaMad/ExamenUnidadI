import { useState, useEffect } from 'react';


const Suma = ( {sumas, setSumas} ) => {

    const [valor01, setValor01] = useState();
    const [valor02, setValor02] = useState();

    const hanldeSubmit = (e) => {
        e.preventDefault();
    }

    useEffect( () => {
        if(Object.keys(sumas).length > 0) {
            setValor01();
            setValor01();      
          } 
    },[sumas] );


    return (
        <div>
            <h2 className='text-2xl text-gray-500 text-center'>
                Suma
            </h2>

            <form className='mt-5' onSubmit={hanldeSubmit}>

                <div>
                    <label
                        className="block text-gray-700 uppercase"
                        htmlFor="valor01">Ingrese el primer Valor</label>
                    <input
                        value={valor01}
                        onChange={(e) => setValor01(e.target.value)}
                        className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
                        type="valor01" id="valor01" placeholder="Ejem 1,2,3..." />
                </div>

                <div>
                    <label
                        className="block text-gray-700 uppercase"
                        htmlFor="valor02">Ingrese el primer Valor</label>
                    <input
                        value={valor02}
                        onChange={(e) => setValor02(e.target.value)}
                        className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
                        type="valor02" id="valor02" placeholder="Ejem 1,2,3..." />
                </div>

                <input
                     type="submit"
                     className="bg-gray-500 w-full p-3 text-white uppercase font-bold hover:bg-gray-700 cursor-pointer transition-colors"
                />


            </form>

        </div>
    )
}

export default Suma