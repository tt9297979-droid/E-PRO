export default function handler(req,res){

  const {user,pass} = req.body

  if(user === "Aa100698" && pass === "123456"){
    return res.json({success:true})
  }

  res.json({success:false})
}
