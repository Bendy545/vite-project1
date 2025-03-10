import {useEffect, useState} from "react";


interface PasswordStrengthProps {
    password: string | null
}

const PasswordStrenght: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) =>{

    const errorArray: Array<string> = [];


    const evaluatePassword = () =>{
        if (errorArray.length === 0){
            return "Silne";
        }
        if (errorArray.length <= 3){
            return "Stredni";
        }
        return "Slabe";
    }
    const [slabost, setSlabost] = useState<string>("");
    useEffect(() => {
        const strength = evaluatePassword();
        setSlabost(strength)
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${slabost}`;
    }, [slabost]);
    if (password === null){ return (<p>Napis neco</p>)}
    if (password.length < 8){ errorArray.push("Heslo je prilis kratke")}
    if (password.search("[A-Z]") === -1){errorArray.push("Heslo neobsahuje velke pismen")}
    if (password.search("[0-9]") === -1){errorArray.push("Heslo neobsahuje cislo")}
    if (password.search("[!@#$%^&*]") === -1){errorArray.push("Heslo neobsahuje specialni znak")}
    if (password.search(/[😀-🙏]/u) === -1){errorArray.push("Heslo neobsahuje emoji")}
    return(
        <div className="alert alert-warning mt-2">
            {errorArray.length === 0 ? (
                <p className="text-success">Heslo je silne</p>
            ) : (

                errorArray.map((value, index) =>{
                    return (
                        <p className="text-danger" key={index}>{value}</p>
                    )
                }))

            }
            <p>{slabost}</p>
        </div>
    )
}

export default PasswordStrenght;