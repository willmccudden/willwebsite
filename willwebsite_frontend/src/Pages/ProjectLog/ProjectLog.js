import NavBar from "../../Components/NavBar/NavBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectLog.css'

function ProjectLog() {

    const [projectLogs, setProjectLogs] = useState([]);

    useEffect(() => {
        fetchProjectLogs();
    }, [])

    const fetchProjectLogs = async () => {
        try {
            const res = await axios.get("https://willwebsite.onrender.com/projectlog");
            console.log(res);
            setProjectLogs(res.data.projectLog);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="background">
            <NavBar />
            <h1>
                Project Log
            </h1>
            <div className="projectLog">
                <ol>

                    {projectLogs.map((projectLog) => (
                        <li>
                            {projectLog.textEntry}
                        </li>
                    ))}
                </ol>
            </div>


        </div>
    )
}

export default ProjectLog;