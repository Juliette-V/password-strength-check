import { PasswordStrengtnType, SectionColor } from "../types/passwordTypes";

export const getSectionColors = (
    type: PasswordStrengtnType
  ): SectionColor[] => {
    const colorMap: Record<PasswordStrengtnType, SectionColor[]> = {
      empty: ["gray", "gray", "gray"],
      short: ["red", "red", "red"],
      easy: ["red", "gray", "gray"],
      medium: ["yellow", "yellow", "gray"],
      strong: ["green", "green", "green"],
    };
  
    return colorMap[type];
  };
  
  export const getPasswordStrength = (password: string): PasswordStrengtnType => {
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