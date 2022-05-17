const router = require("express").Router();

//UPDATE 
router.put(/:id, verifyTokenAuthorization, async (req,res) => {
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }

  try{
    
  }
  
})
module.exports = router;
