/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosAPI } from '../../api/axiosAPI';
import "./CustomCard.css";

function TaskForm({ user, setCreateTask, setPage, setFilter, fetchTasks }) {

    const due_date = new Date(Date.now()).toISOString();

    const [expanded, setExpanded] = useState(false);
    const [editing, setEditing] = useState(false);
    const [display, setDisplay] = useState("flex");
    
    const [stitle, setStitle] = useState("title...");
    const [sdate, setSdate] = useState(due_date.slice(0,16));
    const [sdesc, setSdesc] = useState("description...");
    const [sprio, setSprio] = useState("Medium");
    const [sstat, setSstat] = useState("In Progress");

    const {register, handleSubmit} = useForm()


    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    // console.log(due_date);
    const date = new Date(due_date);
    // console.log("date ",date);
    // console.log("year ",date.getFullYear());
    // console.log("month ",date.getMonth());
    // console.log("day ",date.getDate());
    // console.log("time ",date.getHours(),":",date.getMinutes(),":",date.getSeconds());
    

    const adjustHeight = (el) => {
        el.target.style.height = (el.target.scrollHeight>el.target.clientHeight)?(el.target.scrollHeight) + 'px':"60px";
    }



    const handleCreate = async () => {
        const data={
            title: stitle,
            description: sdesc,
            due_date: `${sdate}:00.000+05:30`,
            priority: sprio,
            status: sstat,
            user_id: user
        }
        console.log(data);
        try {
                    const response = await axiosAPI.post("/tasks/", data)
                    if (response.status === 200) {
                        setCreateTask(false);
                        setPage(1);
                        setFilter("All");
                        fetchTasks();
                    }
                    console.log(response);
                    

                    
            
        } catch (error) {
            console.log(error);
        }
        
    }

    // useEffect(() => {

    // }, [editing]);

    return (
        <div className="expanded card" style={{  width: '90%', margin: '0 auto',border: '1px solid #707070',display: `${display}`, flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px',boxShadow: '2px 4px 4px 2px rgba(0, 0, 0, 0.2)', }}>

            <div  style={{  width: '100%', margin: '0 auto',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px'}}>
            
            <div className='top-div flex justify-evenly w-full items-center'>
                <input className='w-3/5 text-left font-bold justify-evenly' placeholder={stitle} value={stitle} onChange={(e) => setStitle(e.target.value)} />
                <div className='title-div flex justify-around flex-row gap-8'>

                    <select className={`${sprio === 'High' ? 'text-red-500' : {}} ${sprio === 'Medium' ? 'text-yellow-500' : {}} ${sprio === 'Low' ? 'text-green-500' : {}}`} value={sprio} onChange={(e) => setSprio(e.target.value)}
                    style={{fontWeight:'bold', padding: '8px'}} >
                        <option className='text-red-500' value="High" style={{fontWeight:'bold'}}>High</option>
                        <option className='text-yellow-500' value="Medium" style={{fontWeight:'bold'}}>Medium</option>
                        <option className='text-green-500' value="Low" style={{fontWeight:'bold'}}>Low</option>
                    </select>

                    <select className={`${sstat === 'Pending' ? 'text-red-500' : {}} ${sstat === 'In Progress' ? 'text-yellow-500' : {}} ${sstat === 'Completed' ? 'text-green-500' : {}}`} value={sstat} onChange={(e) => setSstat(e.target.value)}
                    style={{fontWeight:'bold', padding: '8px'}} >
                        <option className='text-red-500' value="Pending" style={{fontWeight:'bold'}}>Pending</option>
                        <option className='text-yellow-500' value="In Progress" style={{fontWeight:'bold'}}>In Progress</option>
                        <option className='text-green-500' value="Completed" style={{fontWeight:'bold'}}>Completed</option>
                    </select>
                    
                    
                </div>
                
                
            </div>
            
            <textarea className='desc-input text-left w-full text-wrap border border-solid border-gray-400 rounded-lg p-1' type='text'  placeholder={sdesc} onKeyUp={adjustHeight} onClick={adjustHeight} value={sdesc} onChange={(e) => setSdesc(e.target.value)} />
            <div className='bottom-div flex justify-between gap-8 w-full px-2'>

                <input type='datetime-local' className='text-left font-bold justify-evenly'  placeholder={sdate} value={sdate} onChange={(e) => setSdate(e.target.value)}/>
                <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                    <button className='delete-btn text-yellow-500' style={{fontWeight:'bold'}} onClick={() => setCreateTask(false)} >Cancel</button>
                    <button type='submit' className='edit-btn text-blue-500' style={{fontWeight:'bold'}}
                    onClick={handleCreate} value='Create'
                    >
                    Create
                    </button>
                    
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default TaskForm