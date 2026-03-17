import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Chart from '../components/Chart'
import SignalBox from '../components/SignalBox'
import LiquidityMap from '../components/LiquidityMap'

export default function Dashboard(){

  const [data,setData] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    if(localStorage.getItem("auth") !== "true"){
      router.push('/login')
    }
  },[])

  async function load(){
    let r = await fetch('/api/signal')
    let d = await r.json()
    setData(d)
  }

  useEffect(()=>{
    load()
    setInterval(load, 300000)
  },[])

  if(!data) return <p>Loading...</p>

  return(
    <div className="container">

      <Chart/>
      <SignalBox data={data}/>
      <LiquidityMap zones={data.liquidity}/>

    </div>
  )
}
