import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className="text-white flex justify-between">
            <a href='#' className='flex items-center'>
                <img className='w-6 h-8 pr-2.5' src={logo} alt="logo" />
                <h1 className='text-4xl font-bold font-manrope'>Boldo</h1>
            </a>
            <div className='flex justify-between items-center'>
                <a href="#" className='pr-10 font-openSans font-semibold'>Products</a>
                <a href="#" className='pr-10 font-openSans font-semibold'>Services</a>
                <a href="#" className='pr-10 font-openSans font-semibold'>About</a>
                <button className='text-dark-blue bg-white px-10 py-2 rounded-3xl font-openSans font-bold'>Log In</button>
            </div>
        </nav>
    )
}
export default Navbar