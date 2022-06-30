import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiRadioCircle } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TbFileReport } from "react-icons/tb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [{
    path: "/settings",
    name: "Cadastros",
    icon: <AiOutlinePlusCircle />,
    exact: true,
    subRoutes: [{
        path: "/",
        name: "Geral",
        icon: <BiRadioCircle />,
    }, {
        path: "/cadDadosModulos",
        name: "Módulo",
        icon: <BiRadioCircle />,
    }, {
        path: "/cadDadosInversor",
        name: "Inversor",
        icon: <BiRadioCircle />,
    }, {
        path: "/cadDadosBasicos",
        name: "MPPTs",
        icon: <BiRadioCircle />,
    }],
}, {
    path: "/consultaRelatorios",
    name: "Relatórios",
    icon: <TbFileReport />,
}];


const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "22rem" : "5rem",

                        transition: {
                            duration: 1,
                            type: "spring",
                            damping: 10,
                        },
                    }} className={`sidebar`}>

                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo">
                                    Energy System
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text">
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;