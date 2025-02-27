import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { editor } from 'monaco-editor'
import { useLayoutEffect } from 'react'
import { bootstrap } from './bootstrap'

function App () {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    let myEditor;

    (
      async () => {
        myEditor = await bootstrap()

        myEditor.focus()
      }
    )()
    // const value = 
    // `function test() {
    //   console.log('some');
    // }`

    // // Hover on each property to see its docs!
    // const myEditor = editor.create(document.getElementById("container"), {
    //   value,
    //   language: "javascript",
    //   automaticLayout: true,
    // }); 

    return () => {
      myEditor?.dispose?.()
    }
  })

  return (
    <>
      <div id="container">
      </div>
      <div>
        <button onClick={() => editor.getEditors()[0].focus()}>
          Focus in editor
        </button>
      </div>
    </>
  )
}

export default App
