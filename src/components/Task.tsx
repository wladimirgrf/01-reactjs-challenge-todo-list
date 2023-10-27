import { Circle, CheckCircle, Trash } from '@phosphor-icons/react';
import { useState } from 'react';

import styles from './Task.module.css'

export interface TaskType {
  id: number;
  state: 'todo' | 'done';
  description: string;
}

export interface TaskProps extends TaskType {
  onDeleteTask: (id: number) => void
}

export function Task({ id, state, description, onDeleteTask }: TaskProps) {
  const [taskState, setTaskState] = useState(state)

  function handleToggleTask() {
    const newState = taskState === 'done' ? 'todo' : 'done';
    setTaskState(newState)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <button 
          className={taskState === 'done' ? styles.taskDoneButton : styles.taskNotDoneButton} 
          title='Toggle task'
          onClick={handleToggleTask}
        >
          { taskState === 'done' 
            ? <CheckCircle size={20} weight='fill' /> 
            : <Circle size={20} />
          }
        </button>
        <span>{taskState === 'done' ? <del>{description}</del> : description}</span>
      </div>

      <button 
        className={styles.taskRemoveButton} 
        title='Remove task'
        onClick={handleDeleteTask}
      >
        <Trash size={19} />
      </button>
    </div>
  )
}

