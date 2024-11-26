import { useMemo } from "react";
import { getPasswordStrength, getSectionColors } from "../utils/passwordUtils";

interface StrengthIndicatorProps {
  password: string;
}

const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ password }) => {

    const passwordStrength = getPasswordStrength(password);
    
    const sectionsColors = useMemo(()=>getSectionColors(passwordStrength), [passwordStrength]);

    return (
        <div className="strength-indicator">
            <div className={`section ${sectionsColors[0]}`}>Easy</div>
            <div className={`section ${sectionsColors[1]}`}>Medium</div>
            <div className={`section ${sectionsColors[2]}`}>Strong</div>
        </div>
    );
};

export default StrengthIndicator;