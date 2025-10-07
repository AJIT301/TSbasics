//App.tsx
import './App.css'
import Hello from './Components/TSbasics/Ts1'

function App() {

  return (
    <fieldset className="wrapper">
      <legend>Wrapper Container</legend>

      <fieldset className='container'>
        <legend>Component Wrapper</legend>
        <Hello
          name="Iguana"
          language='LT'
          greeting='Sveikas'
          paragraph='Paragrafas, pastraipa'
        />
        <Hello
          name="Lemur"
          language='EN'
          greeting='Hi'
          paragraph='How is your day?'
        />
        <Hello
          name="Sloth"
          language='EN'
          greeting='Hhhhiiiiii'
          paragraph='Hhhhow is your day going?'
        />
        <Hello
          name="Cheetah"
          language='EN'
          greeting='Hi'
          paragraph='How is your day?'
        />
      </fieldset>
    </fieldset>

  )
}

export default App