const Footer = () => {
    return (
        <footer className="">
            <div className="my-12 flex flex-col">
                <div className="mx-auto flex flex-col items-center ">
                    <p className="text-gray-gray7 leading-125 mt-4 mb-2 text-sm font-light lg:my-4 lg:block lg:text-base">
                        designed by Albin Hoti
                    </p>
                </div>

                <p className="text-gray-gray5 mt-4 block text-center text-xs font-light lg:block">
                    © {new Date().getFullYear()} • onivue
                </p>
            </div>
        </footer>
    )
}

export default Footer
