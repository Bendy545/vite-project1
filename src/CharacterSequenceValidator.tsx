import React from "react";

interface CharacterSequenceValidatorProps {
    password: string | null,
    minLength: number
}
const CharacterSequenceValidator: React.FC<CharacterSequenceValidatorProps> = ({password, minLength}: CharacterSequenceValidatorProps) => {
    if (!password) {
        return (
            <div>
                <p></p>
            </div>
        );
    }

    const patterns = [
        /[a-z]/,
        /[A-Z]/,
        /[0-9]/,
        /[!@#$%^&*(),.?":{}|<>]/
    ];
    let validSequences = 0;

    for (let i = 0; i <= password?.length - minLength; i++) {
        const subString = password?.substring(i, i + minLength);
        if (patterns.every(pattern => pattern.test(subString))) {
            validSequences++;
        }
    }

    return (
        <div>
            <p>(1 male pismeno, 1 velke pismeno, cislo a specialni znak za sebou)</p>
            <p>Pocet nalezenych validnich sekvenci: {validSequences}</p>
            <p>{validSequences > 0 ? "Heslo splnuje kriteria" : "Heslo nesplnuje kriteria"}</p>
        </div>
    );
};

export default CharacterSequenceValidator;
