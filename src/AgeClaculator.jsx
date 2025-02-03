import React, { useState } from 'react';
import { calcAge } from 'utils';

export default function AgeCalculator() {
    // Nějaké reaktivní proměnné? Možná věk? možná rok narození?
    const [birthYear, setBirthYear] = useState('')
    const [age, setAge] = useState(null)


    const handleChange = (e) => {
        const value = e.target.value;
        setBirthYear(value);
        if (value && !isNaN(value)) {
            setAge(calcAge(parseInt(value, 10)));
        } else {
            setAge(null);
        }
    };

    return (
        <div>
            <label>
                Zadej rok narození:
                <input type="number" value={birthYear} onChange={handleChange} />
            </label>
            {age !== null && <p>Tvůj věk je: {age}</p>}
        </div>
    );
}