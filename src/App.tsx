
import './global.css'

import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { Task, TaskType } from './components/Task'
import { BlankBoard } from './components/BlankBoard'


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  
  const [totalNumberOfTasks, setTotalNumberOfTasks] = useState(0)
  const [numberOfTasksCompleted, setNumberOfTasksCompleted] = useState(0)

  function updateReport(updatedTasks: TaskType[]) {
    setTotalNumberOfTasks(updatedTasks.length)

    const tasksCompleted = updatedTasks.filter(task => task.state === 'done')
    setNumberOfTasksCompleted(tasksCompleted.length)
  }
  
  function addTask(newTaskText: string) {
    const newTask: TaskType = {
      id: uuidV4(),
      state: 'todo',
      description: newTaskText
    }

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks)
    updateReport(updatedTasks)
  }

  function deleteTask(id: string) {
    const  tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeleteOne)
    updateReport(tasksWithoutDeleteOne)
  }

  function toggleTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        task.state = task.state === 'done' ? 'todo' : 'done'
      }

      return task
    });

    setTasks(updatedTasks)
    updateReport(updatedTasks)
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput onAddTask={addTask} />

        <main>
          <div className={styles.report}>
            <div>
              <strong>Tasks</strong>
              <span>{totalNumberOfTasks}</span>
            </div>

            <div>
              <strong>Done</strong>
              <span>{totalNumberOfTasks === 0 ? '0' : `${numberOfTasksCompleted} of ${totalNumberOfTasks}`}</span>
            </div>
          </div>

          {totalNumberOfTasks > 0 ? 
            <div className={styles.taskList}>
              {tasks.map(task => {
                return (
                  <Task 
                    key={task.id}
                    id={task.id}
                    state={task.state}
                    description={task.description} 
                    onDeleteTask={deleteTask}
                    onToggleTask={toggleTask}
                  />
                )
              })}
            </div>
            :
            <BlankBoard />
           }
        </main>
      </div>
    </>
  )
}

export default App
