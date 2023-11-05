import { twMerge } from "tw-merge"
import clsx, { ClassValue } from "clsx"

const merge = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes.filter(Boolean)))
}

export { merge }