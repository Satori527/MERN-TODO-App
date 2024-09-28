/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./CustomCard.css";

function CustomCard({title, description , priority, status}) {

    const [expanded, setExpanded] = useState(false);
    const [stitle, setStitle] = useState(title);
    const [desc, setDesc] = useState(description);
    const [prio, setPrio] = useState(priority);
    const [stat, setStat] = useState(status);
    const [editing, setEditing] = useState(false);

    // useEffect(() => {

    // }, [editing]);

    return (
        <div className={`${expanded ? 'expanded' : ''} card`} style={{  width: '90%', margin: '0 auto',border: '1px solid #707070',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px',boxShadow: '2px 4px 4px 2px rgba(0, 0, 0, 0.2)'}}>
            {!editing && <div  style={{  width: '100%', margin: '0 auto',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px'}}>

                <div className='top-div flex justify-evenly w-full items-center'>
                <h2 className='w-3/5 text-left font-bold justify-evenly'>{title}</h2>
                    <div className='title-div flex justify-around flex-row gap-8'>
                        
                        <h3 className={`${prio === 'High' ? 'text-red-500' : {}} ${prio === 'Medium' ? 'text-yellow-500' : {}} ${prio === 'Low' ? 'text-green-500' : {}}`}
                        style={{fontWeight:'bold'}}>
                            {prio}
                        </h3>
                        <h3 className={`${stat === 'Pending' ? 'text-red-500' : {}} ${stat === 'In Progress' ? 'text-yellow-500' : {}} ${stat === 'Completed' ? 'text-green-500' : {}}`}
                        style={{fontWeight:'bold'}}>
                            {stat}
                        </h3>
                    </div>
                    
                    <input className='expand-btn' type="checkbox" checked={expanded} onChange={() => setExpanded(!expanded)} />
                </div>
                
                
                <p className=''>{description}</p>
                {!editing && <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                    <button className='delete-btn text-red-500'>Delete</button>
                    <button className='edit-btn text-blue-500' onClick={() => setEditing(!editing)}>Edit</button>
                    
                </div>}

                {editing && <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                    <button className='delete-btn text-yellow-500' onClick={() => setEditing(!editing)}>Cancel</button>
                    <button className='edit-btn text-blue-500' >Save</button>
                    
                </div>}
            </div>}

            {editing && <div  style={{  width: '100%', margin: '0 auto',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px',  borderRadius: '24px'}}>
            
            <div className='top-div flex justify-evenly w-full items-center'>
            <input className='w-3/5 text-left font-bold justify-evenly' placeholder={title} value={stitle} onChange={(e) => setStitle(e.target.value)}/>
                <div className='title-div flex justify-around flex-row gap-8'>
                    
                    <h3 className={`${prio === 'High' ? 'text-red-500' : {}} ${prio === 'Medium' ? 'text-yellow-500' : {}} ${prio === 'Low' ? 'text-green-500' : {}}`}
                    style={{fontWeight:'bold'}}>
                        {prio}
                    </h3>
                    <h3 className={`${stat === 'Pending' ? 'text-red-500' : {}} ${stat === 'In Progress' ? 'text-yellow-500' : {}} ${stat === 'Completed' ? 'text-green-500' : {}}`}
                    style={{fontWeight:'bold'}}>
                        {stat}
                    </h3>
                </div>
                
                <input className='expand-btn' type="checkbox" checked={expanded} onChange={() => setExpanded(!expanded)} />
            </div>
            
            
            <p className=''>{description}</p>
            {!editing && <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                <button className='delete-btn text-red-500'>Delete</button>
                <button className='edit-btn text-blue-500' onClick={() => setEditing(!editing)}>Edit</button>
                
            </div>}

            {editing && <div className='bottom-div flex flex-row-reverse gap-8 w-full pr-8'>
                <button className='delete-btn text-yellow-500' onClick={() => setEditing(!editing)}>Cancel</button>
                <button className='edit-btn text-blue-500' >Save</button>
                
            </div>}
            </div>}
        </div>
    );
}

export default CustomCard