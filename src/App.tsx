import { useState } from 'react'
import './App.css'
import PasswordInput2 from "./PasswordInput2.tsx";
import PasswordStrength from "./PasswordStrength.tsx";




function App() {
    const [password, setPassword] = useState<string | null>(null);

  return (
<>
      <PasswordInput2 passwordValue={password} setter={setPassword} />
      <PasswordStrength password={password}/>
</>
  )
}

export default App
