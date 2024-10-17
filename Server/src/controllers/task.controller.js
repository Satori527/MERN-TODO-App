import { Task } from "../models/task.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createTask = asyncHandler(async (req, res) => {
    const { email, title, description, due_date, status, priority, user_id } = req.body;
    if (
        ([email, title, description, due_date, status, priority, user_id].some((field) => field?.trim() === ""))) {
        throw new ApiError(400, "All fields are required");
    }

    const task = await Task.create({
        email,
        title,
        description,
        due_date,
        status,
        priority,
        user: user_id
    })
    res.status(200).json(new ApiResponse(200, task, "Task created successfully"))

})

const fetchTasks = asyncHandler(async (req, res) => {
    const Tasks = await Task.find({user: req.query.user_id});
    res.status(200).json(new ApiResponse(200, Tasks, "Tasks fetched successfully"))
})

const paginateTasks = asyncHandler(async (req, res) => {
    const {page = 1, limit = 10, user_id} = req.query

    console.log(page, limit)
    console.log(req.body.user_id)
    const startIndex=(page-1)*limit
    const lastIndex=(page)*limit
    let Tasks = {}
    Tasks.data = await Task.find({user: user_id}).skip((page-1)*limit).limit(limit)

    // if(lastIndex<Tasks.length){
    //     Tasks.next={
    //         page:page+1
    //     }
    // }

    

    res.status(200).json(new ApiResponse(200, Tasks.data, "Tasks fetched successfully"))
})

const updateTask = asyncHandler(async (req, res) => {
    console.log(req.body)
    const updatedTask = await Task.replaceOne(
        {_id:req.body.task_id},
        req.body
    );
    console.log(updatedTask);
    res.status(200).json(new ApiResponse(200, updatedTask,"Task updated successfully"))
})

const deleteTask = asyncHandler(async (req, res) => {
    const deletedTask = await Task.deleteOne(
        {
            _id:req.body.task_id
        }
    )

    res.status(200).json(new ApiResponse(200, deletedTask,"Task deleted successfully"))
})

const sortTasksByDueDate = asyncHandler(async (req, res) => {

    const {page = 1, limit = 10} = req.query

    const sortedTasks = await Task.find({user: req.query.user}).sort({due_date: 1}).skip((page-1)*limit).limit(limit)

    res.status(200).json(new ApiResponse(200, sortedTasks, "Tasks sorted successfully"))
})

const filterTasksByStatus = asyncHandler(async (req, res) => {

    const {page = 1, limit = 10} = req.query

    console.log(req.query.status)

    const filteredTasks = await Task.find({user: req.query.user, status: req.query.status}).skip((page-1)*limit).limit(limit)

    res.status(200).json(new ApiResponse(200, filteredTasks, "Tasks filtered successfully"))
})

const filterTasksByPriority = asyncHandler(async (req, res) => {

    const {page = 1, limit = 10} = req.query

    const filteredTasks = await Task.find({user: req.query.user, priority: req.query.priority}).skip((page-1)*limit).limit(limit)

    res.status(200).json(new ApiResponse(200, filteredTasks, "Tasks filtered successfully"))
})

export { createTask, deleteTask, fetchTasks, filterTasksByPriority, filterTasksByStatus, paginateTasks, sortTasksByDueDate, updateTask };

