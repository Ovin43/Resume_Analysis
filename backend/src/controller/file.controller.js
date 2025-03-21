import { exec } from "child_process";
import path from "path";

export const upload= async(req , res)=>{
    try{
        const file=req.file;
        const folderPath= `\\resumeanly\\backend\\filedic`;  //replace this path with the folder path
        const fileName = file.originalname
        const filePath= path.join(folderPath,fileName);
        const pythopath="" //give the python path  \resumeanly\python_service\env\Scripts\python.exe this is an example since i made use of env
        

        if(file){
            console.log(filePath);
            try{
                exec(`${pythopath} ../python_service/res_an/resume_analysis.py  "${filePath}"`,(error,stdout,stderr)=>{
                    if(error){
                        console.error(`Error :${error.message}`);
                        return res.status(500).json({error:'Failed to analyze resume'});
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        return res.status(500).json({ error: 'Python script error' });
                    }
                    try{
                        const response= JSON.parse(stdout);
                        console.log(response);
                        res.status(200).json(response);
                    }catch(praseError){
                        console.error("Json prase Error",praseError);
                        res.status(500).json({message:"invalid response from the python script"});
                    }
                })
            }catch(error){
                console.log("Error in seneding the file",error.message);
                res.status(500).json({error:"Internal server error from the python"});
            }

        }else{
            res.status(500).json({message:"The file have not reached me"});
        }
    }catch(error){
        console.log("Error in sending controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

