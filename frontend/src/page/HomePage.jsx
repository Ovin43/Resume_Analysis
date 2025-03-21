import { useState } from "react";
import { useFileStore } from "../store/useFileStore";


const HomePage =()=>{

    const [file,setFile]=useState(null);
 

    const {fileSend,analysis }= useFileStore();  
    

    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const onFileUpload = async(e)=>{
        if (file) {
            alert(`File attached: ${file.name}`);
            const formData = new FormData();
            formData.append('file', file);
            fileSend(formData);
        } else {
            alert('No file selected!');
        } 
    };


    return(
        <div className="h-screen bg-base-200">
            <div className="flex items-center justify-center pt-20 px-4">
            <input 
            type="file"
            onChange={onFileChange}
            className="mb-2"
             />
            <button 
                onClick={onFileUpload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >Submit</button>
            </div>

            <div>
                <h2>Strengths</h2>
                <ul>
                    {analysis?.Strengths.map((Strengths, index) => (
                        <li key={index}>{Strengths}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Weaknesses</h2>
                <ul>
                    {analysis?.Weaknesses.map((Weaknesses, index) => (
                        <li key={index}>{Weaknesses}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Suggestions</h2>
                <ul>
                    {analysis?.Suggestions.map((Suggestions, index) => (
                        <li key={index}>{Suggestions}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Job Matches</h2>
                <ul>
                    {analysis?.JobMatches.map((JobMatches, index) => (
                        <li key={index}>{JobMatches}</li>
                    ))}
                </ul>
            </div>
        </div>
        
        
    );
};
export default HomePage;