export default function nav(){
    return (
        <nav class = 'navigation-bar' className='sticky top-0 left-0 z-50 shadow-md w-screen  bg-gray-900 p-0'
        style={{ padding: 0, margin: 0 }}>
        <ul class = 'nav' className='flex justify-end gap-6 px-6 py-4 text-2xl'>
            <li class = 'nav-item' id = 'nav-home'>
                <a href='#home'>
                    Home
                </a>
            </li>
            <li class = 'nav-item' id = 'nav-about'>
                <a href='#about'>
                    About
                </a>
            </li>
            <li class = 'nav-item' id = 'nav-project'>
                <a href='#project'>
                    Project
                </a>
            </li>
        </ul>
    </nav>
    )
}