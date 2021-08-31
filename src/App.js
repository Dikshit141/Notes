import './styles/global.css'
import styles from './styles/App.module.css'

import { Button } from './components/Button.jsx'
import { Note } from './components/Note.jsx'
import { Form } from './components/Form.jsx'

import { NoteProvider } from './contexts/NoteContext.jsx'

function App() {
  return (
    <NoteProvider>
      <div className={styles.app}>
        <header><h1>Notes</h1></header>
        <Form>
          <Button />
        </Form>
        <Note />
      </div>
    </NoteProvider>
  )
}

export default App
