export default function handler(req,res){

  let price = 2160 + Math.random()*10
  let buy = Math.random() > 0.5

  res.json({
    price: price.toFixed(2),
    signal: buy ? "BUY" : "SELL",
    entry: price.toFixed(2),
    tp: (buy ? price+10 : price-10).toFixed(2),
    sl: (buy ? price-10 : price+10).toFixed(2),
    liquidity: [
      (price+5).toFixed(2),
      (price-5).toFixed(2)
    ]
  })
}
