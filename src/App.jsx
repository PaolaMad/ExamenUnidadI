import { useEffect, useState } from "react"
import Header from "./components/Header"
import Interfaz from "./components/Interfaz";
import Operaciones from "./components/Operaciones";

function App() {

  // const [sumas, setSumas] = useState( JSON.parse(localStorage.getItem('sumas')) ?? [] );
  // const [suma, setSuma] = useState( {} );
  // const [resta, setResta] = useState( {} );
  // const [multiplicacion, setmultiplicacion] = useState( {} );
  // const [division, setDivision] = useState( {} );

  // useEffect(() => {
  //   // console.log('Componente listo o cambio en citas');
  //   localStorage.setItem('suma', JSON.stringify(sumas));
  // },[sumas]);

  return (
    <div className="container mx-auto mt-8">
      <Header/>
      <h2 className="text-2xl text-gray-500 text-center font-bold">A continuacion las operaciones disponibles</h2>

      <div>
        <Operaciones/>
        {/* <Interfaz/> */}
        {/* <suma sumas = {sumas}/> */}
      </div>


    </div>

  )
}

export default App
