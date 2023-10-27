import { PlusCircle } from '@phosphor-icons/react'
import styles from './TaskInput.module.css'

export function TaskInput() {
  return (
    <form className={styles.taskInputForm}>
      <input 
        name='task'
        placeholder='Add a new task'
        required
      />

      <button type='submit'>
        Add task
        <PlusCircle size={16} />
      </button>
    </form>
  )
}