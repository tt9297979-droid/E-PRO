export default async function handler(req,res){

  const { slip_image } = req.body

  const r = await fetch("https://developer.easyslip.com/api/v1/verify",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.EASYSLIP_API_KEY}`
    },
    body: JSON.stringify({ slip_image })
  })

  const data = await r.json()

  if(data?.data?.amount == 199){
    return res.json({success:true})
  }

  res.json({success:false})
}
