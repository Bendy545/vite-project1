import {useEffect, useState} from "react";


interface PasswordStrengthProps {
    password: string | null
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({password}: PasswordStrengthProps) =>{

    const [errors, setErrors] = useState<string[]>([]);
    const [strength, setStrength] = useState<string>("");

    useEffect(() => {
        const errorArray: string[] = [];

        if (!password) {
            setErrors(["Napiš něco"]);
            setStrength("Slabé");
            return;
        }

        if (password.length < 8) errorArray.push("Heslo je příliš krátké");
        if (!/[A-Z]/.test(password)) errorArray.push("Heslo neobsahuje velké písmeno");
        if (!/[0-9]/.test(password)) errorArray.push("Heslo neobsahuje číslo");
        if (!/[!@#$%^&*]/.test(password)) errorArray.push("Heslo neobsahuje speciální znak");
        if (!/[😀-🙏]/u.test(password)) errorArray.push("Heslo neobsahuje emoji");

        let newStrength = "Silné";
        if (errorArray.length > 3) newStrength = "Slabé";
        else if (errorArray.length > 0) newStrength = "Střední";

        setErrors(errorArray);
        setStrength(newStrength);
    }, [password]);

    useEffect(() => {
        document.title = `Síla hesla: ${strength}`;
    }, [strength]);

    return (
        <div className="alert alert-warning mt-2">
            {errors.length === 0 ? (
                <p className="text-success">Heslo je silné</p>
            ) : (
                errors.map((error, index) => (
                    <p className="text-danger" key={index}>
                        {error}
                    </p>
                ))
            )}
            <p>sila hesla: {strength}</p>
        </div>
    );
};

export default PasswordStrength;