import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosAPI } from "../api/axiosAPI";
import CustomCard from "../components/cards/CustomCard";
import CustomizedDividers from "../components/Selector";
import List from "../components/sidebar/Sidebar";

// const tasks = [
//     {
//         title: "Create a MERN TODO app ",
//         description: "### Features:1. **User Authentication**: - Users can sign up, log in, and log out.2. **Task Creation**:- Users can create tasks with a title, description, and due date.3. **Task Management**:- Users can view, edit, and delete their tasks.4. **Task Sorting**:- Users can sort tasks by due date, priority, or status. aisnrgibgaiugni niiueaio ai ii haoi haio hio hjopjopajr gopwj o oa ojo gjpoaioijg aopgijr ja pjwpop p k]p a ok][kgrpkp kp aor ][ gi[p o[ap gk[po pokg aprjpgsjiugh ihgukku sgi isuhoshpoijpaw0rijnjvn jrw ojo jipigsijoig jospijp op0 usp s us ojpoijp us0 Features:1. **User Authentication**: - Users can sign up, log in, and log out.2. **Task Creation**:- Users can create tasks with a title, description, and due date.3. **Task Management**:- Users can view, edit, and delete their tasks.4. **Task Sorting**:- Users can sort tasks by due date, priority, or status. aisnrgibgaiugni niiueaio ",
//         priority: "High",
//         status: "Pending",
//         dueDate: "2022-12-31"
//     },
//     {
//         title: "Task 2 srgsag awrgseg rg waagg awrgwrag aarw graggra ragr awrg awgr",
//         description: "### Features:1. **User Authentication**: - Users can sign up, log in, and log out.2. **Task Creation**:- Users can create tasks with a title, description, and due date.3. **Task Management**:- Users can view, edit, and delete their tasks.4. **Task Sorting**:- Users can sort tasks by due date, priority, or status. aisnrgibgaiugni niiueaio ai ii haoi haio hio hjopjopajr gopwj o oa ojo gjpoaioijg aopgijr ja pjwpop p k]p a ok][kgrpkp kp aor ][ gi[p o[ap gk[po pokg aprjpgsjiugh ihgukku sgi isuhoshpoijpaw0rijnjvn jrw ojo jipigsijoig jospijp op0 usp s us ojpoijp us0 ai ii haoi haio hio hjopjopajr gopwj o oa ojo gjpoaioijg aopgijr ja pjwpop p k]p a ok][kgrpkp kp aor ][ gi[p o[ap gk[po pokg aprjpgsjiugh ihgukku sgi isuhoshpoijpaw0rijnjvn jrw ojo jipigsijoig jospijp op0 usp s us ojpoijp us0 Features:1. **User Authentication**: - Users can sign up, log in, and log out.2. **Task Creation**:- Users can create tasks with a title, description, and due date.3. **Task Management**:- Users can view, edit, and delete their tasks.4. **Task Sorting**:- Users can sort tasks by due date, priority, or status. aisnrgibgaiugni niiueaio ai ii haoi haio hio hjopjopajr gopwj o oa ojo gjpoaioijg aopgijr ja pjwpop p k]p a ok][kgrpkp kp aor ][ gi[p o[ap gk[po pokg aprjpgsjiugh ihgukku sgi isuhoshpoijpaw0rijnjvn jrw ojo jipigsijoig jospijp op0 usp s us ojpoijp us0 Features:1. **User Authentication**: - Users can sign up, log in, and log out.2. **Task Creation**:- Users can create tasks with a title, description, and due date.3. **Task Management**:- Users can view, edit, and delete their tasks.4. **Task Sorting**:- Users can sort tasks by due date, priority, or status. aisnrgibgaiugni niiueaio ai ii haoi haio hio hjopjopajr gopwj o oa ojo gjpoaioijg aopgijr ja pjwpop p k]p a ok][kgrpkp kp aor ][ gi[p o[ap gk[po pokg aprjpgsjiugh ihgukku sgi isuhoshpoijpaw0rijnjvn jrw ojo jipigsijoig jospijp op0 usp s us ojpoijp us0",
//         dueDate: "2022-12-31",
//         priority: "Medium",
//         status: "In Progress"
//     },
//     {
//         title: "Task 3",
//         description: "Description 3",
//         priority: "Low",
//         status: "Completed"

//     },
//     {
//         title: "Task 4",
//         description: "Description 4"
//     },
//     {
//         title: "Task 5",
//         description: "Description 5"
//     },
//     {
//         title: "Task 6",
//         description: "Description 6"
//     },
//     {
//         title: "Task 7",
//         description: "Description 7"
//     },
//     {
//         title: "Task 8",
//         description: "Description 8"
//     },
//     {
//         title: "Task 9",
//         description: "Description 9"
//     },
//     {
//         title: "Task 10",
//         description: "Description 10"
//     }
// ]
function Dashboard() {

    const status = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    
    const [page, setPage] = useState(1);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const data = await axiosAPI.get("/tasks/paginate", {params: {user_id: userData.user._id, page: page, limit: 10}}, {withCredentials: true})
        console.log(data)
        setTasks(data.data.data)
        console.log("tasks ",tasks)
    }

    useEffect(() => {
        console.log("dashboard ",userData)
        fetchTasks();
        window.scrollTo(0, 0)
    }, [userData,page])

    const handleNext = () => {
        setPage(page + 1)
        console.log("page ",page)
        //fetchTasks();
    }
    const handlePrev = () => {
        setPage(page - 1)
        console.log("page ",page)
        //fetchTasks();
    }


    return (
        <div className="flex flex-row w-full h-svh">
            <List/>
            <div className="flex flex-col w-full ml-56 mt-16 h-fit gap-4 relative bg-gray-400 pt-6 pb-40 rounded-2xl "
            style={{boxShadow: "inset 0 2px 8px 2px rgba(0, 0, 0, 0.5)"}}>
            <div className="flex flex-row-reverse py-4 w-11/12">
                <CustomizedDividers/>
            </div>
                    {tasks.map((task) => (
                        <CustomCard key={task._id} id={task._id} title={task.title} description={task.description} due_date={task.due_date} priority={task.priority} status={task.status} user_id={task.user}/>
                ))}
                

                {/* {tasks.map((task) => (
                    <OutlinedCard key={task.title} title={task.title} description={task.description}/>
                ))} */}
                <div className="flex flex-row py-4 justify-center align-middle gap-8">
                    {(page>=2)&&<button className="w-20 h-10 bg-gray-50 rounded-3xl text-black font-medium hover:bg-gray-200 active:bg-gray-300 shadow-black"
                    style={{boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.2)"}}
                    onClick={handlePrev}
                    >
                    Prev
                    </button>}
                    <h2 className="text-black font-medium w-10 h-10  bg-gray-50 rounded-3xl flex justify-center items-center"
                    style={{boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.2)"}}
                    >{page}</h2>
                    {(tasks.length===10)&&<button className="w-20 h-10 bg-gray-50 rounded-3xl text-black font-medium hover:bg-gray-200 active:bg-gray-300 active:shadow-2 shadow-black"
                    style={{boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.2)"}}
                    onClick={handleNext}
                    >
                    Next
                    </button>}
                </div>
            </div>
            
            
        </div>
    );
}

export default Dashboard;