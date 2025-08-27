export const PhoneContext = ({children}: {children: React.ReactNode}) =>{

    return (

        <div className="py-20">
            <div className="ml-auto text-neutral-950 Poppins  mr-auto phone relative w-[350px] h-[700px] border-4 rounded-xl border-neutral-950">
                <div className="w-full h-full overflow-y-scroll p-4">
                    <h1 className="text-2xl">Scroll.</h1>
                    {children}
                </div>
                <div className="absolute right-[-8.0px] top-20 w-2 h-10 bg-neutral-900 rounded-r-sm"> </div>
                <div className="absolute right-[-8.0px] top-32 w-2 h-10 bg-neutral-900 rounded-r-sm"> </div>
                <div className="absolute bottom-3 w-20 rawCentralize--x h-1 bg-neutral-900 rounded-sm"> </div>
            </div>
        </div>

    )

}