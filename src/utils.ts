import { PasswordStrengtnType, SectionColor } from "./types";

export const getSectionColor = (sectionNum:number, type:PasswordStrengtnType):SectionColor => {
    if(type === 'empty') return 'gray';
    if(type === 'short') return 'red';
    if(sectionNum === 1){
        if(type === 'easy') return 'red'; 
        if(type === 'medium') return 'yellow'; 
    }
    if(sectionNum === 2){
        if(type === 'easy') return 'gray'; 
        if(type === 'medium') return 'yellow'; 
    }
    if(sectionNum === 3){
        if(type === 'easy') return 'gray'; 
        if(type === 'medium') return 'gray'; 
    }

    return 'green';
}
 
  
export const getPasswordStrength = (password:string):PasswordStrengtnType => {
    if (password.length === 0) return "empty";
    if (password.length < 8) return "short";
  
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);
  
    if (hasLetters && hasDigits && hasSymbols) return "strong";
    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    )
      return "medium";
    return "easy";
  };