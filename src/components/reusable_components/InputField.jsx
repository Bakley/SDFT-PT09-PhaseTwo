export default function InputField({value, label, type, onChange,name}){
    return (
        <>
            <label>
                {label}
            </label>
            <input 
                type={type} 
                value={value}
                onChange={onChange}
                name={name}
            
            />
        </>
    )
}