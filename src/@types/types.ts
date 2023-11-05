
export type ToggleReturn = [isActive: boolean, () => void]


export interface ToggleFunction {
    (initial?: boolean): ToggleReturn
}

export interface Project {
    title: string,
    urlImage: string
}