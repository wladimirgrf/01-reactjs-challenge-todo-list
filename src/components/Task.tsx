import { Circle, CheckCircle, Trash } from '@phosphor-icons/react';

import styles from './Task.module.css'

export interface TaskType {
  id: string;
  state: 'todo' | 'done';
  description: string;
}

export interface TaskProps extends TaskType {
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export function Task({ id, state, description, onDeleteTask, onToggleTask }: TaskProps) {
  function handleToggleTask() {
    onToggleTask(id)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <button 
          className={state === 'done' ? styles.doneButton : styles.notDoneButton} 
          title='Toggle task'
          onClick={handleToggleTask}
        >
          { state === 'done' 
            ? <CheckCircle size={20} weight='fill' /> 
            : <Circle size={20} />
          }
        </button>
        <span className={state === 'done' ? styles.doneDescription : styles.notDoneDescription}>
          {description}
        </span>
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

