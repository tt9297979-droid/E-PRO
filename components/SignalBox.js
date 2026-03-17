export default function SignalBox({data}){

  return (
    <div className="card">
      <h2>🤖 SIGNAL</h2>
      <p>📊 ราคา: {data.price}</p>
      <p>📈 Signal: {data.signal}</p>
      <p>🎯 Entry: {data.entry}</p>
      <p>💰 TP: {data.tp}</p>
      <p>🛑 SL: {data.sl}</p>
    </div>
  )
}
