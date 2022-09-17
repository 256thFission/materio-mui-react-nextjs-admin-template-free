import { db } from "../firebase-config"
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

const tasksCollectionRef = collection(db, "attendance");

class TaskServices {

  getTask = (id) => {
    const taskDoc = doc(db, "attendance", id);

return getDoc(taskDoc);
  }

  getAllTasks = () => {
    return getDocs(tasksCollectionRef);
  }

  addTasks = (myentry) => {
    return addDoc(tasksCollectionRef, myentry);
  }

  updateTask = (id, updatedTask) => {
    const taskDoc = doc(db, "attendance", id);

return updateDoc(taskDoc, updatedTask);
  }

  deleteTask = (id) => {
    const taskDoc = doc(db, "attendance", id);

return deleteDoc(taskDoc);
  }
}

export default new TaskServices();
