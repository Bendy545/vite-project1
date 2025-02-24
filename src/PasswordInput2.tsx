import React from 'react';

interface PasswordInputProps {
    passwordValue: string | null,
    setter: React.Dispatch<React.SetStateAction<string | null>>
}


const PasswordInput2: React.FC<PasswordInputProps> = ({passwordValue,setter}: PasswordInputProps) => {
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value)
    }

    return (
        <input type={'text'} onChange={changeHandler} value={passwordValue ?? ""}/>
    )
}

export  default PasswordInput2;