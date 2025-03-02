import React from "react";


interface PasswordTimeValidatorProps {
    password: string | null,
    time: number,
    validationWindow?: number
}

const PasswordTimeValidator: React.FC<PasswordTimeValidatorProps> = ({password, time, validationWindow = 5000}: PasswordTimeValidatorProps) => {


    if (password === null) {return(<p></p>);}

    const currentTime = Date.now();
    const timeElapsed = currentTime - time;
    const isValid = password ? timeElapsed > validationWindow : false;


    return (
        <div>
            <p>Casova validace hesla: {isValid ? "Platne" : "Neplatne (zadano prilis rychle)"}</p>
        </div>
    );
};


export default PasswordTimeValidator;