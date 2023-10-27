
import './global.css'

import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TaskInput />

        <main>
          
        </main>
      </div>
    </>
  )
}

export default App
