interface InputProps{
    placeholder: string,
    name: string,
    type: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void 
}

const Input = ({ placeholder, name, type, value, handleChange }: InputProps) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-primary-dark text-white/60 border-none text-sm"
    />
  );

  interface TextAreaProps{
    placeholder: string,
    name: string,
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => void 
}

 export const TextArea = ({ placeholder, name, value, handleChange }: TextAreaProps) => {
  return (
    <textarea 
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e, name)}
      rows={4} 
      cols={40} 
      className="my-2 w-full rounded-sm p-2 outline-none bg-primary-dark text-white/60 border-none text-sm"
    />
  )
 } 

export default Input;