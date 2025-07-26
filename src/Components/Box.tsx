type Props = {
    children?: React.ReactNode,
    className?: string,
    onClick? : () => void,
}

export default function Box ({children,className,onClick} : Props) {

    return (
        <div className={'rounded-2xl p-5 ' + className} onClick={onClick}>
            {children}
        </div>
    )

}