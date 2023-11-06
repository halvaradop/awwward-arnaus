import { useState, useId, ChangeEvent, FormEvent } from "react"
import { Input } from "./custom/Input"
import { SendMeFormState } from "../@types/types"

const SendMeForm = () => {
    const id = useId()
    const [formData, setFormData] = useState<SendMeFormState>({} as SendMeFormState)

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form className="w-full grid gap-y-5" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <span className="mb-1 text-lg font-normal">Name *</span>
                <Input value={formData.name} size="md" color="gray" name="name" id={`${id}-name`} placeholder="First Name" onChange={handleChange} />
            </label>
            <label htmlFor="lastname">
                <Input value={formData.lastname} size="md" color="gray" name="lastname" id={`${id}-lastname`} placeholder="Last Name" onChange={handleChange} />
            </label>
            <label htmlFor="email">
                <span className="mb-1 text-lg font-normal">Email *</span>
                <Input value={formData.email} size="md" color="gray" name="email" id={`${id}-email`} placeholder="hello@gmail.com" onChange={handleChange} />
            </label>
            <label htmlFor="message">
                <span className="mb1 text-lg font-normal">Message *</span>
                <textarea className="w-full py-4 px-5 text-gray border border-gray-100 rounded-sm  resize-none" name="message" placeholder="Hello ..." onChange={handleChange} />
            </label>
            <Input className="w-[100px] flex items-center justify-center text-black" type="submit" value="Send" size="md" color="gray" />
        </form>
    )
}

export { SendMeForm }