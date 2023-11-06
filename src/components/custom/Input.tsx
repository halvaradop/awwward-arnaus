import { InputProps } from "../../@types/props"
import { merge } from "../../utils/merge"

const sizeVariants: Record<string, string> = {
    "md": "w-full h-8 indent-3 border rounded-sm ring-1 ring-black",
    "md-2": "h-8 indent-3 border rounded-sm",
}

const colorVariants: Record<string, string> = {
    "gray": "text-gray border-black-100 placeholder-gray",
    "": ""
}

const Input = ({ className = "", type = "text", value, size, color, id, name, placeholder, onClick, onChange }: InputProps) => {
    const classList = merge(sizeVariants[size], colorVariants[color], className, "focus:outline-none")

    return (
        <input 
            className={classList}
            type={type}
            value={value}
            id={id}
            name={name}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
        />
    )
}

export { Input }