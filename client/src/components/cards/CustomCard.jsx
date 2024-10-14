/* eslint-disable react/prop-types */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { axiosAPI } from '../../api/axiosAPI';
import "./CustomCard.css";

function CustomCard({title, description , priority, status, due_date, id, user, fetchTasks}) {

    const [expanded, setExpanded] = useState(false);
    const [editing, setEditing] = useState(false);
    const [display, setDisplay] = useState("flex");
    
    const [stitle, setStitle] = useState(title);
    const [sdate, setSdate] = useState(due_date.slice(0,16));
    const [sdesc, setSdesc] = useState(description);
    const [sprio, setSprio] = useState(priority);
    const [sstat, setSstat] = useState(status);


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

    const handleEdit = (e) => {
        setSdate(e.target.value);
        console.log("date ",sdate);
    }

    const handleSave = async () => {
        try {
                    const response = await axiosAPI.patch("/tasks/update", {
                        task_id: id,
                        title: stitle,
                        description: sdesc,
                        due_date: `${sdate}T00:00:00.000+05:30`,
                        priority: sprio,
                        status: sstat,
                        user: user
                    })
                    if (response.status === 200) {
                        setEditing(false);
                    }
                    console.log(response);
                    console.log(id);
                    

                    
            
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleDelete = async () => {
        try {
            const response = await axiosAPI.patch("/tasks/delete", {
                task_id: id
            })
            if (response.status === 200) {
                setDisplay("none");
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
        <div className={`${expanded ? 'expanded' : ''} card`} style={{  width: '90%', margin: '0 auto',border: '1px solid #707070',display: `${display}`, flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px',boxShadow: '2px 4px 4px 2px rgba(0, 0, 0, 0.2)', }}>
            {!editing && <div  style={{  width: '100%', margin: '0 auto',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px'}}>

                <div className='top-div flex justify-between w-full items-center'>
                <h2 className='w-3/5 text-left font-bold justify-evenly'>{title}</h2>
                    <div className='title-div flex justify-around flex-row gap-8'>
                        
                        <h3 className={`${sprio === 'High' ? 'text-red-500' : {}} ${sprio === 'Medium' ? 'text-yellow-500' : {}} ${sprio === 'Low' ? 'text-green-500' : {}}`}
                        style={{fontWeight:'bold'}}>
                            {sprio}
                        </h3>
                        <h3 className={`${sstat === 'Pending' ? 'text-red-500' : {}} ${sstat === 'In Progress' ? 'text-yellow-500' : {}} ${sstat === 'Completed' ? 'text-green-500' : {}}`}
                        style={{fontWeight:'bold'}}>
                            {sstat}
                        </h3>
                    </div>
                    <label className='expand-btn-label'>
                        <input className='expand-btn' type="checkbox" checked={expanded} onChange={() => setExpanded(!expanded)} />
                    </label>
                    
                </div>
                <p className='text-justify'>{description}</p>
                <div className='bottom-div flex justify-between gap-8 w-full px-2'>
                    <h2 className='text-left font-bold justify-evenly'>Due-Date:&nbsp; {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`}</h2>
                    
                    <div className='bottom-div flex flex-row-reverse gap-8 pr-8'>
                    
                    <button className='delete-btn text-red-500' style={{fontWeight:'bold'}}
                    onClick={() => handleDelete()}
                    ><DeleteIcon/></button>
                    <button className='edit-btn text-blue-500' style={{fontWeight:'bold'}} onClick={() => setEditing(!editing)}><EditIcon/></button>
                    </div>
                </div>
                
            </div>}

            {editing && <div  style={{  width: '100%', margin: '0 auto',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px'}}>
            
            <div className='top-div flex justify-evenly w-full items-center'>
                <input className='w-3/5 text-left font-bold justify-evenly' placeholder={title} value={stitle} onChange={(e) => setStitle(e.target.value)}/>
                <div className='title-div flex justify-around flex-row gap-8'>

                    <select className={`${sprio === 'High' ? 'text-red-500' : {}} ${sprio === 'Medium' ? 'text-yellow-500' : {}} ${sprio === 'Low' ? 'text-green-500' : {}}`}
                    style={{fontWeight:'bold', padding: '8px'}} value={sprio} onChange={(e) => setSprio(e.target.value)}>
                        <option className='text-red-500' value="High" style={{fontWeight:'bold'}}>High</option>
                        <option className='text-yellow-500' value="Medium" style={{fontWeight:'bold'}}>Medium</option>
                        <option className='text-green-500' value="Low" style={{fontWeight:'bold'}}>Low</option>
                    </select>

                    <select className={`${sstat === 'Pending' ? 'text-red-500' : {}} ${sstat === 'In Progress' ? 'text-yellow-500' : {}} ${sstat === 'Completed' ? 'text-green-500' : {}}`}
                    style={{fontWeight:'bold', padding: '8px'}} value={sstat} onChange={(e) => setSstat(e.target.value)}>
                        <option className='text-red-500' value="Pending" style={{fontWeight:'bold'}}>Pending</option>
                        <option className='text-yellow-500' value="In Progress" style={{fontWeight:'bold'}}>In Progress</option>
                        <option className='text-green-500' value="Completed" style={{fontWeight:'bold'}}>Completed</option>
                    </select>
                    
                    
                </div>
                
                <input className='expand-btn' type="checkbox" checked={expanded} onChange={() => setExpanded(!expanded)} />
            </div>
            
            <textarea className='desc-input text-left w-full text-wrap border border-solid border-gray-400 rounded-lg p-1' type='text'  placeholder={description} value={sdesc} onKeyUp={adjustHeight} onClick={adjustHeight} onChange={(e) => setSdesc(e.target.value)}/>
            <div className='bottom-div flex justify-between gap-8 w-full px-2'>

                <input type='datetime-local' className='text-left font-bold justify-evenly' onChange={(e) => handleEdit(e)} value={sdate} placeholder={sdate}/>
                <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                    <button className='delete-btn text-yellow-500' style={{fontWeight:'bold'}} onClick={() => setEditing(!editing)}>Cancel</button>
                    <button className='edit-btn text-blue-500' style={{fontWeight:'bold'}}
                    onClick={handleSave}
                    >
                    Save
                    </button>
                    
                </div>
            </div>
            </div>}
        </div>
    );
}

export default CustomCard