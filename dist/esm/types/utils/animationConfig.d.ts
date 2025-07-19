export declare const ANIMATION_CONFIG: {
    timing: {
        instant: {
            duration: number;
            ease: number[];
        };
        fast: {
            duration: number;
            ease: number[];
        };
        medium: {
            duration: number;
            ease: number[];
        };
        slow: {
            duration: number;
            ease: number[];
        };
        slower: {
            duration: number;
            ease: number[];
        };
        slowest: {
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
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        fast: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        slow: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        dropdown: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        grid: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
    };
};
export declare const ANIMATION_VARIANTS: {
    fade: {
        in: {
            initial: {
                opacity: number;
            };
            animate: {
                opacity: number;
            };
            exit: {
                opacity: number;
            };
        };
        inUp: {
            initial: {
                opacity: number;
                y: number;
            };
            animate: {
                opacity: number;
                y: number;
            };
            exit: {
                opacity: number;
                y: number;
            };
        };
        inDown: {
            initial: {
                opacity: number;
                y: number;
            };
            animate: {
                opacity: number;
                y: number;
            };
            exit: {
                opacity: number;
                y: number;
            };
        };
        inLeft: {
            initial: {
                opacity: number;
                x: number;
            };
            animate: {
                opacity: number;
                x: number;
            };
            exit: {
                opacity: number;
                x: number;
            };
        };
        inRight: {
            initial: {
                opacity: number;
                x: number;
            };
            animate: {
                opacity: number;
                x: number;
            };
            exit: {
                opacity: number;
                x: number;
            };
        };
    };
    scale: {
        in: {
            initial: {
                scale: number;
                opacity: number;
            };
            animate: {
                scale: number;
                opacity: number;
            };
            exit: {
                scale: number;
                opacity: number;
            };
        };
        inUp: {
            initial: {
                scale: number;
                y: number;
                opacity: number;
            };
            animate: {
                scale: number;
                y: number;
                opacity: number;
            };
            exit: {
                scale: number;
                y: number;
                opacity: number;
            };
        };
        inDown: {
            initial: {
                scale: number;
                y: number;
                opacity: number;
            };
            animate: {
                scale: number;
                y: number;
                opacity: number;
            };
            exit: {
                scale: number;
                y: number;
                opacity: number;
            };
        };
    };
    mobileNav: {
        container: {
            initial: {
                y: string;
                opacity: number;
                backdropFilter: string;
            };
            animate: {
                y: number;
                opacity: number;
                backdropFilter: string;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                    mass: number;
                };
            };
            exit: {
                y: string;
                opacity: number;
                backdropFilter: string;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                    mass: number;
                };
            };
        };
        header: {
            initial: {
                opacity: number;
                y: number;
            };
            animate: {
                opacity: number;
                y: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                y: number;
            };
        };
        navItem: {
            initial: {
                opacity: number;
                y: number;
                scale: number;
            };
            animate: {
                opacity: number;
                y: number;
                scale: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                y: number;
                scale: number;
            };
        };
        sectionTitle: {
            initial: {
                opacity: number;
                x: number;
            };
            animate: {
                opacity: number;
                x: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                x: number;
            };
        };
        dropdownContainer: {
            initial: {
                opacity: number;
                height: number;
                scale: number;
            };
            animate: {
                opacity: number;
                height: string;
                scale: number;
                transition: {
                    height: {
                        duration: number;
                        ease: number[];
                    };
                    opacity: {
                        duration: number;
                        ease: number[];
                    };
                    scale: {
                        duration: number;
                        ease: number[];
                    };
                };
            };
            exit: {
                opacity: number;
                height: number;
                scale: number;
                transition: {
                    height: {
                        duration: number;
                        ease: number[];
                    };
                    opacity: {
                        duration: number;
                        ease: number[];
                    };
                    scale: {
                        duration: number;
                        ease: number[];
                    };
                };
            };
        };
        dropdownItem: {
            initial: {
                opacity: number;
                y: number;
                scale: number;
                x: number;
            };
            animate: {
                opacity: number;
                y: number;
                scale: number;
                x: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                y: number;
                scale: number;
                x: number;
            };
        };
        avatar: {
            initial: {
                opacity: number;
                scale: number;
                rotate: number;
            };
            animate: {
                opacity: number;
                scale: number;
                rotate: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                scale: number;
                rotate: number;
            };
        };
        badge: {
            initial: {
                opacity: number;
                scale: number;
            };
            animate: {
                opacity: number;
                scale: number;
                transition: {
                    type: string;
                    stiffness: number;
                    damping: number;
                };
            };
            exit: {
                opacity: number;
                scale: number;
            };
        };
        iconRotate: {
            closed: {
                rotate: number;
            };
            open: {
                rotate: number;
            };
        };
    };
    interactive: {
        button: {
            idle: {
                scale: number;
                backgroundColor: string;
                borderColor: string;
                boxShadow: string;
            };
            hover: {
                scale: number;
                backgroundColor: string;
                borderColor: string;
                boxShadow: string;
            };
            tap: {
                scale: number;
                backgroundColor: string;
                borderColor: string;
                boxShadow: string;
            };
            focus: {
                outline: string;
                outlineOffset: string;
                boxShadow: string;
            };
        };
        navItem: {
            idle: {
                backgroundColor: string;
            };
            hover: {
                backgroundColor: string;
            };
            active: {
                backgroundColor: string;
            };
        };
        hamburger: {
            container: {
                closed: {
                    rotate: number;
                    scale: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                open: {
                    rotate: number;
                    scale: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
            };
            menuIcon: {
                closed: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                open: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
            };
            closeIcon: {
                closed: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                open: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
            };
        };
    };
    background: {
        transparent: {
            background: string;
            backdropFilter: string;
            WebkitBackdropFilter: string;
            borderBottom: string;
            boxShadow: string;
        };
        light: {
            background: string;
            backdropFilter: string;
            WebkitBackdropFilter: string;
            borderBottom: string;
            boxShadow: string;
        };
        medium: {
            background: string;
            backdropFilter: string;
            WebkitBackdropFilter: string;
            borderBottom: string;
            boxShadow: string;
        };
        dark: {
            background: string;
            backdropFilter: string;
            WebkitBackdropFilter: string;
            borderBottom: string;
            boxShadow: string;
        };
    };
};
export declare const PERFORMANCE_CONFIG: {
    hardwareAcceleration: {
        transform: "translateZ(0)";
        backfaceVisibility: "hidden";
        perspective: string;
        willChange: string;
    };
    willChange: {
        transform: string;
        opacity: string;
        background: string;
        backdrop: string;
        all: string;
    };
    performance: {
        high: {
            willChange: string;
            transform: string;
            backfaceVisibility: string;
        };
        medium: {
            willChange: string;
            transform: string;
        };
        low: {
            willChange: string;
        };
    };
};
export declare const COLOR_SCHEMES: {
    mobileNav: {
        background: {
            primary: string;
            secondary: string;
            dark: string;
        };
        backdrop: {
            light: string;
            medium: string;
            heavy: string;
        };
        border: {
            light: string;
            medium: string;
            heavy: string;
        };
        shadow: {
            light: string;
            medium: string;
            heavy: string;
        };
    };
    interactive: {
        navItem: {
            idle: string;
            hover: string;
            active: string;
            selected: string;
        };
        button: {
            primary: {
                idle: string;
                hover: string;
                active: string;
            };
            secondary: {
                idle: string;
                hover: string;
                active: string;
            };
        };
    };
};
export declare const useAnimationConfig: () => {
    shouldReduceMotion: boolean | null;
    performance: {
        hardwareAcceleration: {
            transform: "translateZ(0)";
            backfaceVisibility: "hidden";
            perspective: string;
            willChange: string;
        };
        willChange: {
            transform: string;
            opacity: string;
            background: string;
            backdrop: string;
            all: string;
        };
        performance: {
            high: {
                willChange: string;
                transform: string;
                backfaceVisibility: string;
            };
            medium: {
                willChange: string;
                transform: string;
            };
            low: {
                willChange: string;
            };
        };
    };
    variants: {
        fade: {
            in: {
                initial: {
                    opacity: number;
                };
                animate: {
                    opacity: number;
                };
                exit: {
                    opacity: number;
                };
            };
            inUp: {
                initial: {
                    opacity: number;
                    y: number;
                };
                animate: {
                    opacity: number;
                    y: number;
                };
                exit: {
                    opacity: number;
                    y: number;
                };
            };
            inDown: {
                initial: {
                    opacity: number;
                    y: number;
                };
                animate: {
                    opacity: number;
                    y: number;
                };
                exit: {
                    opacity: number;
                    y: number;
                };
            };
            inLeft: {
                initial: {
                    opacity: number;
                    x: number;
                };
                animate: {
                    opacity: number;
                    x: number;
                };
                exit: {
                    opacity: number;
                    x: number;
                };
            };
            inRight: {
                initial: {
                    opacity: number;
                    x: number;
                };
                animate: {
                    opacity: number;
                    x: number;
                };
                exit: {
                    opacity: number;
                    x: number;
                };
            };
        };
        scale: {
            in: {
                initial: {
                    scale: number;
                    opacity: number;
                };
                animate: {
                    scale: number;
                    opacity: number;
                };
                exit: {
                    scale: number;
                    opacity: number;
                };
            };
            inUp: {
                initial: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
                animate: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
                exit: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
            };
            inDown: {
                initial: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
                animate: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
                exit: {
                    scale: number;
                    y: number;
                    opacity: number;
                };
            };
        };
        mobileNav: {
            container: {
                initial: {
                    y: string;
                    opacity: number;
                    backdropFilter: string;
                };
                animate: {
                    y: number;
                    opacity: number;
                    backdropFilter: string;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                        mass: number;
                    };
                };
                exit: {
                    y: string;
                    opacity: number;
                    backdropFilter: string;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                        mass: number;
                    };
                };
            };
            header: {
                initial: {
                    opacity: number;
                    y: number;
                };
                animate: {
                    opacity: number;
                    y: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    y: number;
                };
            };
            navItem: {
                initial: {
                    opacity: number;
                    y: number;
                    scale: number;
                };
                animate: {
                    opacity: number;
                    y: number;
                    scale: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    y: number;
                    scale: number;
                };
            };
            sectionTitle: {
                initial: {
                    opacity: number;
                    x: number;
                };
                animate: {
                    opacity: number;
                    x: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    x: number;
                };
            };
            dropdownContainer: {
                initial: {
                    opacity: number;
                    height: number;
                    scale: number;
                };
                animate: {
                    opacity: number;
                    height: string;
                    scale: number;
                    transition: {
                        height: {
                            duration: number;
                            ease: number[];
                        };
                        opacity: {
                            duration: number;
                            ease: number[];
                        };
                        scale: {
                            duration: number;
                            ease: number[];
                        };
                    };
                };
                exit: {
                    opacity: number;
                    height: number;
                    scale: number;
                    transition: {
                        height: {
                            duration: number;
                            ease: number[];
                        };
                        opacity: {
                            duration: number;
                            ease: number[];
                        };
                        scale: {
                            duration: number;
                            ease: number[];
                        };
                    };
                };
            };
            dropdownItem: {
                initial: {
                    opacity: number;
                    y: number;
                    scale: number;
                    x: number;
                };
                animate: {
                    opacity: number;
                    y: number;
                    scale: number;
                    x: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    y: number;
                    scale: number;
                    x: number;
                };
            };
            avatar: {
                initial: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                };
                animate: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    scale: number;
                    rotate: number;
                };
            };
            badge: {
                initial: {
                    opacity: number;
                    scale: number;
                };
                animate: {
                    opacity: number;
                    scale: number;
                    transition: {
                        type: string;
                        stiffness: number;
                        damping: number;
                    };
                };
                exit: {
                    opacity: number;
                    scale: number;
                };
            };
            iconRotate: {
                closed: {
                    rotate: number;
                };
                open: {
                    rotate: number;
                };
            };
        };
        interactive: {
            button: {
                idle: {
                    scale: number;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow: string;
                };
                hover: {
                    scale: number;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow: string;
                };
                tap: {
                    scale: number;
                    backgroundColor: string;
                    borderColor: string;
                    boxShadow: string;
                };
                focus: {
                    outline: string;
                    outlineOffset: string;
                    boxShadow: string;
                };
            };
            navItem: {
                idle: {
                    backgroundColor: string;
                };
                hover: {
                    backgroundColor: string;
                };
                active: {
                    backgroundColor: string;
                };
            };
            hamburger: {
                container: {
                    closed: {
                        rotate: number;
                        scale: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                    open: {
                        rotate: number;
                        scale: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                };
                menuIcon: {
                    closed: {
                        opacity: number;
                        scale: number;
                        rotate: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                    open: {
                        opacity: number;
                        scale: number;
                        rotate: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                };
                closeIcon: {
                    closed: {
                        opacity: number;
                        scale: number;
                        rotate: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                    open: {
                        opacity: number;
                        scale: number;
                        rotate: number;
                        transition: {
                            type: string;
                            stiffness: number;
                            damping: number;
                        };
                    };
                };
            };
        };
        background: {
            transparent: {
                background: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
                borderBottom: string;
                boxShadow: string;
            };
            light: {
                background: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
                borderBottom: string;
                boxShadow: string;
            };
            medium: {
                background: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
                borderBottom: string;
                boxShadow: string;
            };
            dark: {
                background: string;
                backdropFilter: string;
                WebkitBackdropFilter: string;
                borderBottom: string;
                boxShadow: string;
            };
        };
    };
    colors: {
        mobileNav: {
            background: {
                primary: string;
                secondary: string;
                dark: string;
            };
            backdrop: {
                light: string;
                medium: string;
                heavy: string;
            };
            border: {
                light: string;
                medium: string;
                heavy: string;
            };
            shadow: {
                light: string;
                medium: string;
                heavy: string;
            };
        };
        interactive: {
            navItem: {
                idle: string;
                hover: string;
                active: string;
                selected: string;
            };
            button: {
                primary: {
                    idle: string;
                    hover: string;
                    active: string;
                };
                secondary: {
                    idle: string;
                    hover: string;
                    active: string;
                };
            };
        };
    };
    timing: {
        instant: {
            duration: number;
            ease: number[];
        };
        fast: {
            duration: number;
            ease: number[];
        };
        medium: {
            duration: number;
            ease: number[];
        };
        slow: {
            duration: number;
            ease: number[];
        };
        slower: {
            duration: number;
            ease: number[];
        };
        slowest: {
            duration: number;
            ease: number[];
        };
    };
    stagger: {
        container: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        fast: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        slow: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        dropdown: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
        };
        grid: {
            animate: {
                transition: {
                    delayChildren: number;
                    staggerChildren: number;
                    staggerDirection: number;
                };
            };
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
        heavy: {
            type: string;
            stiffness: number;
            damping: number;
            mass: number;
            restDelta: number;
        };
    };
};
export declare const fast: {
    duration: number;
    ease: number[];
};
export declare const medium: {
    duration: number;
    ease: number[];
};
export declare const slow: {
    duration: number;
    ease: number[];
};
export declare const slower: {
    duration: number;
    ease: number[];
};
export declare const spring: {
    type: string;
    stiffness: number;
    damping: number;
    mass: number;
    restDelta: number;
};
export declare const stagger: {
    animate: {
        transition: {
            delayChildren: number;
            staggerChildren: number;
            staggerDirection: number;
        };
    };
};
//# sourceMappingURL=animationConfig.d.ts.map