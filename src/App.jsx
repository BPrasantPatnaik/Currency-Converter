import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Currency from './hooks/Currency'

function App() {

  const [to,setTo]=useState("isr")
  const [from,setFrom]=useState("usr")
  const [valuefrom,setValuefrom]=useState(0)
  const [valueto,setValueto]=useState(0)

  const Swap=()=>
  {
    var temp=valuefrom
    var temp1=from
    setValuefrom(valueto)
    setValueto(temp)
    setFrom(to)
    setTo(temp1)
  }


const CurrencyChangeFrom=(event)=>{

  console.log(event.target.value)
  setFrom(event.target.value)

}
const CurrencyChangeTo=(event)=>{

  console.log(event.target.value)
  setTo(event.target.value)

}

  return (
    <>
      <div className="appearance-none w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}>
        <Input label1="From" To={to} currency={from} value={valuefrom} setValuefrom={setValuefrom} setValueto={setValueto} CurrencyChangeFrom={CurrencyChangeFrom} CurrencyChangeTo={CurrencyChangeTo}/>
        <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={Swap}>
                            Swap
                        </button>
                    </div>
        <Input label1="To" currency={to} value={valueto} setValueto={setValueto} CurrencyChangeFrom={CurrencyChangeFrom} CurrencyChangeTo={CurrencyChangeTo}/>
      </div>

    </>
  )
}

export default App
