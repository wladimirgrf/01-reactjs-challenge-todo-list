
import './global.css'

import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'

import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { Task, TaskType } from './components/Task'


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function addTask(newTaskText: string) {
    const newTask: TaskType = {
      id: uuidV4(),
      state: 'todo',
      description: newTaskText
    }

    setTasks([...tasks, newTask])
  }

  function deleteTask(id: string) {
    const  tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeleteOne)
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput
          onAddTask={addTask}
        />

        <main>
          <div className={styles.taskList}>
            {tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  id={task.id}
                  state={task.state}
                  description={task.description} 
                  onDeleteTask={deleteTask}
                />
              )
            })}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
