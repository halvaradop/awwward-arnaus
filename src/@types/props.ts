import { InputHTMLAttributes } from "react"
import { Project, Style } from "./types"

export interface TitleSectionProps {
    className?: string,
    title: string,
    hasLine?: boolean
}


export interface ProjectPreviewProps {
    project: Project
}

export interface SkillsLineProps {
    skills: string[]
}

export interface InputProps extends Style, Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
    
}