import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const data: any = localStorage.getItem('count');
  useEffect(() => {
    if (parseInt(data) > 0) {
      setCount(parseInt(data))
    } else {

    }
  }, [])

  const handleClick = async () => {
    setCount(count + 1)
    var valor = count + 1
    await localStorage.setItem('count', valor.toString())

  }

  const handleClean = () => {
    localStorage.clear();
    setCount(0)
  }

  return (
    <div className="w-screen bg-slate-800 h-screen flex items-center justify-center">
      <div className=" bg-slate-600 text-white flex flex-col items-center justify-center rounded-3xl h-auto py-6 px-2"  >
        <h3 className='text-4xl'>Contador de Erros de Ambiente: </h3>
        <div className='flex items-center xsm:flex-wrap xsm:justify-center'>
          <h5 className='text-4xl mt-2' > Total {count}  de Erros. </h5>
          <button onClick={handleClick} className='bg-sky-600 mt-4 rounded-full text-2xl p-3 md:ml-4 xsm:ml-1'>Deu Merda</button>
        </div>
        <button className='bg-rose-900 mt-4 rounded-full text-2xl p-3 md:ml-4 xsm:ml-1' onClick={handleClean}>Limpa Contador</button>
      </div>
    </div>
  )
}

export default App
