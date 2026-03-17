export default function LiquidityMap({zones}){

  return (
    <div className="card">
      <h3>🧲 Liquidity</h3>
      {zones.map((z,i)=>(
        <p key={i}>Zone: {z}</p>
      ))}
    </div>
  )
}
