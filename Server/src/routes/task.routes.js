import { Router } from "express";
import {
    createTask,
    deleteTask,
    fetchTasks,
    filterTasksByPriority,
    filterTasksByStatus,
    paginateTasks,
    sortTasksByDueDate,
    updateTask
} from "../controllers/task.controller.js";
import {
    helloTest
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
helloTest



const router = Router()

router.route("/").get(verifyJWT ,fetchTasks).post(verifyJWT ,createTask);

router.route("/paginate").get(verifyJWT ,paginateTasks)

router.route("/update").patch(verifyJWT ,updateTask);
router.route("/delete").patch(verifyJWT ,deleteTask);

router.route("/sort").get(verifyJWT, sortTasksByDueDate)
router.route("/filter/status").get(verifyJWT, filterTasksByStatus)
router.route("/filter/priority").get(verifyJWT, filterTasksByPriority)

export default router