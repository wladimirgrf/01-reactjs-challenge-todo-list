
import './global.css'

import { useState } from 'react'

import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'
import { Task, TaskType } from './components/Task'


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius, repellendus consectetur labore nemo sunt iusto nobis molestias praesentium, corrupti aperiam. Dolore mollitia aliquid, vel accusamus deserunt velit ratione suscipit.',
      state: 'todo'
    },
    {
      id: 2,
      description: 'Desc 2',
      state: 'done'
    }
  ])

  function deleteTask(id: number) {
    const  tasksWithoutDeleteOne = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeleteOne)
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput />

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
