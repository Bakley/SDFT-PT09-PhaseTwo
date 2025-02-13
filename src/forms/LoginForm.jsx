import InputField from "../components/reusable_components/InputField";
import Button from "../components/reusable_components/Button";
import { useState } from "react";


export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const validateFormData = () => {
        let valid = true
        if(!email.trim()){
            valid = false
        }

        return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!validateFormData) return;
        console.log(e.value)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            alert("Login successful!")
        }, 8000)
    }

    const handleChange = (e) => {
        const {name, value} = e.target 
        console.log(`${name} changed ${value}`)

        switch (name) {
            case "username":
                setUsername(value)
                break;
            case "email":
                setEmail(value)
                break;           
            case "password":
                setPassword(value)
                break;
            default:
                console.error("Error!");
        }
    }

    return(
        <>
            <form>
                <InputField 
                    value={username}
                    label="Username"
                    type="text"
                    onChange={handleChange}
                    name="username"
                />
                <InputField 
                    value={email} 
                    label="Email" 
                    type="Email"  
                    onChange={handleChange}
                    name="email"

                />
                <InputField 
                    value={password}
                    label="Password"
                    type="Password"
                    onChange={handleChange}
                    name="password"

                />
                <Button 
                    label={loading ? "Logging in" : "Login"}
                    onClick={handleSubmit}
                    disable={loading}
                />
            </form>
        </>
    )
}