export const fadeIn = (type: any,delay: any,duration: any) => {
    return {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    }
}