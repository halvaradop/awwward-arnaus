import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useToggle } from "../hooks/useToggle"
import { itemVariants, lineVariants, menuVariants } from "../motions/header.motion"

const menuList = ["work", "about", "contact", "other"]

const Header = () => {
    const [isActive, setIsActive] = useToggle()

    return (
        <header className="w-full relative z-50">
            <nav className="w-11/12 h-20 mx-auto flex items-center justify-between">
                <h2 className="text-black text-lg font-bold">Portfolio</h2>
                <div className="w-9 h-6 flex items-center justify-center flex-col" id="header-menu" onClick={setIsActive}>
                    <span className="w-full h-0.5 mb-1 block rounded-full transition-all bg-black" data-active={isActive} />
                    <span className="w-full h-0.5 mt-1 block rounded-full transition-all bg-black" data-active={isActive} />
                </div>
                <AnimatePresence>
                    {isActive && (
                        <motion.aside className="w-full h-full min-h-screen p-10 flex items-center justify-start flex-col absolute inset-0 bg-black" variants={menuVariants} initial="hidden" animate="visible" exit="exit">
                            <div className="w-9 h-6 mr-auto flex items-center justify-center flex-col" id="header-list" onClick={setIsActive}>
                                <span className="w-full h-0.5 mb-1 block rounded-full transition-all bg-white" data-active={isActive} />
                                <span className="w-full h-0.5 mt-1 block rounded-full transition-all bg-white" data-active={isActive} />
                            </div>
                            <motion.ul className="w-full my-auto flex items-center flex-col gap-y-5">
                                {menuList.map((link, key) => (
                                    <li className="w-full text-white text-5xl font-bold" key={key}>
                                        <Link className="w-full block relative overflow-hidden" to={link}>
                                            <motion.p variants={itemVariants}>{link}</motion.p>
                                            <motion.span className="w-full h-[1px] mr-0.5 block bg-white" variants={lineVariants} />
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export { Header }