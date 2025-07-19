export declare const FOOTER_ANIMATIONS: {
    container: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
                staggerChildren: number;
                delayChildren: number;
            };
        };
    };
    section: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    link: {
        initial: {
            opacity: number;
            x: number;
        };
        animate: {
            opacity: number;
            x: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    formField: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    button: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    message: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
        exit: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
            };
        };
    };
    hover: {
        opacity: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
    tap: {
        opacity: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
    spring: {
        responsive: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        fast: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        smooth: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
    };
    stagger: {
        container: {
            animate: {
                transition: {
                    staggerChildren: number;
                    delayChildren: number;
                };
            };
        };
        item: {
            initial: {
                opacity: number;
                x: number;
            };
            animate: {
                opacity: number;
                x: number;
                transition: {
                    duration: number;
                    ease: number[];
                };
            };
        };
    };
};
export declare const useFooterAnimations: () => {
    container: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
                staggerChildren: number;
                delayChildren: number;
            };
        };
    };
    section: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    link: {
        initial: {
            opacity: number;
            x: number;
        };
        animate: {
            opacity: number;
            x: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    formField: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    button: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    message: {
        initial: {
            opacity: number;
            y: number;
        };
        animate: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
        exit: {
            opacity: number;
            y: number;
            transition: {
                duration: number;
            };
        };
    };
    hover: {
        opacity: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
    tap: {
        opacity: number;
        transition: {
            duration: number;
            ease: number[];
        };
    };
    spring: {
        responsive: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        fast: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        smooth: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
    };
    stagger: {
        container: {
            animate: {
                transition: {
                    staggerChildren: number;
                    delayChildren: number;
                };
            };
        };
        item: {
            initial: {
                opacity: number;
                x: number;
            };
            animate: {
                opacity: number;
                x: number;
                transition: {
                    duration: number;
                    ease: number[];
                };
            };
        };
    };
} | {
    container: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    section: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    link: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    formField: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    button: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    message: {
        initial: {
            opacity: number;
        };
        animate: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
        exit: {
            opacity: number;
            transition: {
                duration: number;
                ease: number[];
            };
        };
    };
    hover: {};
    tap: {};
    spring: {
        responsive: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        fast: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        smooth: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
        heavy: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
    };
    stagger: {
        container: {
            animate: {};
        };
        item: {
            initial: {
                opacity: number;
            };
            animate: {
                opacity: number;
                transition: {
                    duration: number;
                    ease: number[];
                };
            };
        };
    };
};
//# sourceMappingURL=animations.d.ts.map