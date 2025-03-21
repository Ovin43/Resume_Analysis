import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js";



export const useFileStore = create((set)=>({
    analysis:null,

    fileSend: async(data)=>{
        try{
            const res = await axiosInstance.post("/upload",data,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
            set({ analysis: res.data})
            console.log("success full done");
        }catch(error){
            alert("failed to send")
            console.error("Error in sending",error.res?.data||error.message);

            if (error.response) {
                console.error('Server response:', error.response.data);
                console.error('Server status:', error.response.status);
                console.error('Server headers:', error.response.headers);
            }
        }
    },
    
}));
