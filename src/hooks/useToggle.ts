import { useState } from 'react';
import { ToggleFunction } from '../@types/types';

const useToggle: ToggleFunction = (initial = false) => {
    const [isActive, setIsActive] = useState(initial)

    const handleChange = () => {
        setIsActive(!isActive)
    }

    return [isActive, handleChange]
}

export { useToggle }