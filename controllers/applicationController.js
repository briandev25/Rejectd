const pool = require('../database/db')

exports.getApplications = async (req,res) =>{
    try{
    const [result] = await pool.query("SELECT * FROM application");
   res.send(result);
   }catch(err){
    res.status(500).send(err.message);
   }
}
exports.addApplication = async (req,res) =>{
  const{ organisation,position,outcome,application_date } = req.body;
    try{
     const [result] = await pool.query("INSERT INTO application (organisation, position, outcome, application_date) VALUES(?, ?, ?, ?)",
        [organisation, position,outcome, application_date ]
     );
     res.json({message:"Application Added",result})

    }catch(err){
        res.status(500).send(err.message)
    }
}
exports.updateApplication = async (req,res) =>{
    const { id } = req.params;
    const fields = req.body;
    try{
       const [result] = await pool.query("UPDATE application SET ? WHERE id = ?",[fields,id])
       if(result.affectedRows === 0){
        return res.status(404).json({message:"Application cannot be updated or doesnt exist"})
       }
       res.json({message:"Application updated successfully"});
    }catch(err){
        res.status(500).json({error:err})
    }
}