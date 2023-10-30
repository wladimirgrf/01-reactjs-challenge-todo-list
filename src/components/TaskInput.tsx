import { PlusCircle } from '@phosphor-icons/react'
import { FormEvent, useState, ChangeEvent } from 'react'

import styles from './TaskInput.module.css'

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onAddTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.taskInputForm}>
      <input 
        name='task'
        placeholder='Add a new task'
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />

      <button type='submit'>
        Add task
        <PlusCircle size={16} />
      </button>
    </form>
  )
}