import {useEffect, useState} from 'react'
import './App.css'
import PasswordInput2 from "./PasswordInput2.tsx";
import PasswordStrength from "./PasswordStrength.tsx";
import CharacterSequenceValidator from "./CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";
import CurrentTemperature from "./CurrentTemperature.tsx";




function App() {
    const [password, setPassword] = useState<string | null>(null);
    const [passwordTime, setPasswordTime] = useState<number>(Date.now());
    const minLength = 4;


    useEffect(() => {
        if (password !== null) {
            setPasswordTime(Date.now());
        }
    }, [password]);



  return (
<>
      <PasswordInput2 passwordValue={password} setter={setPassword} />
      <PasswordStrength password={password}/>
    <CharacterSequenceValidator password={password} minLength={minLength}/>
    <PasswordTimeValidator password={password} time={passwordTime}/>
    <CurrentTemperature/>
</>
  )
}

export default App
