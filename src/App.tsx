import {useEffect, useState} from 'react'
import './App.css'
import PasswordInput2 from "./PasswordInput2.tsx";
import PasswordStrength from "./PasswordStrength.tsx";
import CharacterSequenceValidator from "./CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";
import CurrentTemperature from "./CurrentTemperature.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryFlagValidator from "./CountryFlagValidator.tsx";


function App() {
    const [password, setPassword] = useState<string | null>(null);
    const [passwordTime, setPasswordTime] = useState<number>(Date.now());



    useEffect(() => {
        if (password !== null) {
            setPasswordTime(Date.now());
        }
    }, [password]);


    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPassword(prevPassword => {
                if (prevPassword === null) return prevPassword;
                if (prevPassword.length === 0) return prevPassword;
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {

                    return prevPassword + "😜";
                } else {

                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) + prevPassword.slice(index + 1);
                }
            });
        }, 10000); // 10 sekund pro test; reálně 120000 ms (2 minuty)
        return () => clearInterval(sabotageInterval);
    }, []);

    return (
        <>
            <h1>Password validator</h1>
            <PasswordInput2 passwordValue={password} setter={setPassword} />
            <PasswordStrength password={password}/>
            <CharacterSequenceValidator password={password}/>
            <PasswordTimeValidator password={password} time={passwordTime}/>
            <CurrentTemperature/>
            <CountryFlagValidator password={password}/>
        </>
    )
}


export default App
