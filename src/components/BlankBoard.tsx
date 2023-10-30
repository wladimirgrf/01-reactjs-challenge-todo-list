import styles from './BlankBoard.module.css'

import clipboard from '../assets/clipboard.svg'

export function BlankBoard() {
  return (
    <div className={styles.blankBoard}>
      <div>
        <img src={clipboard} alt='Clipboard' />
        <p>
          <strong>You don't have any tasks registered yet</strong>
          <span>Create tasks and organize your to-do items</span>
        </p>
      </div>
    </div>
  )
}