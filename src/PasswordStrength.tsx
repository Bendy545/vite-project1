import React from 'react';

interface PasswordStrengthProps {
    password: string | null
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) => {

    const errorArray: Array<string> = [];

    if (password === null) {return(<p>Napis neco</p>);}

    if (password.length < 8) {
        errorArray.push('Heslo je prilis kratke')
    }
    if (password.search("[A-Z]") === -1) {errorArray.push('Heslo neobsauje alespon 1 velke pismeno')}
    if (password.search("[0-9]") === -1) {errorArray.push('Heslo neobsahuje alespon 1 cislici')}
    if (password.search("[!@#$%^&*]") === -1) {errorArray.push('Heslo neobsahuje alespon 1 specialni znak')}
    if (password.search(/[😀-🙏]/u) === -1) {errorArray.push('Heslo neobsahuje emoji')}

    return (
        <>
            {
                errorArray.map((value, index)  => {
                    return <p key={index}>{value}</p>
                })
            }
        </>

    )
}

export default PasswordStrength;