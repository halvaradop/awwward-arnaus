
export type ToggleReturn = [isActive: boolean, () => void]


export interface ToggleFunction {
    (initial?: boolean): ToggleReturn
}

export interface Project {
    title: string,
    urlImage: string
}

export interface Style {
    size: string,
    color: string,
}

export interface SendMeFormState {
    name: string,
    lastname?: string
    inquiry: string,
    email: string,
    message: string
}