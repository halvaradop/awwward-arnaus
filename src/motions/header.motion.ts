import { Variants } from "framer-motion"

const menuVariants: Variants = {
    hidden: {
        x: "-100%",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            ease: "easeInOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
            delayChildren: 0.2,
            delay: 0.4,
        } 
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.4,
            staggerDirection: -1,
        }
    }
}

const itemVariants: Variants = {
    hidden: {
        y: "100%"
    },
    visible: {
        y: 0,
        transition: {
            ease: "easeInOut",
            mass: 0.8,
            duration: 0.4,
        }
    },
    exit: {
        y: "100%",
    }
}

const lineVariants: Variants = {
    hidden: {
        scaleX: 0
    },
    visible: {
        originX: 0,
        scaleX: 1,
    },
    exit: {
        scaleX: 0,
    }
}

export { menuVariants, itemVariants, lineVariants }