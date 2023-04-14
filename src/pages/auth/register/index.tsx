import React, { useRef } from "react";
interface Props {
  label: string;
  value: number;
}
export default function Register({ label, value }: Props) {
  const previousValueRef = useRef<number>(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    const previousValue = previousValueRef.current;

    // Perform some calculation using previousValue and newValue
    const result = previousValue * newValue;

    previousValueRef.current = newValue;
    console.log(
      `Previous value: ${previousValue}. New value: ${newValue}. Result: ${result}`
    );
  };

  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type="number"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
