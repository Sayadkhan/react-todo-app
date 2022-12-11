import { AiFillEdit } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input type="checkbox" className="accent-teal-400" />
        </span>
        <p className="group-hover:text-teal-400">{task.text}</p>
      </div>
      <div className="task-item-right flex gap-3">
        <span>
          <AiFillEdit className="text-gray-500 hover:text-teal-500" />
        </span>
        <span>
          <FiTrash2 className="text-gray-500 hover:text-red-500" />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
