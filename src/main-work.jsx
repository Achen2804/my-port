import userLogo from './assets/userProfile.png'
import SkillsGrid from './Skills.jsx'
import ProjectGrid from './Projects.jsx'
export default function main_body(){
    return(
    <div id= 'main-content'>
        <div className="content_item " id='about'>
            <h2 class="relative font-bold inline-block mb-6 pb-2 outline-black">
                About Me
                <span class="absolute -right-1/10 bottom-1/20 w-full h-1/3 bg-red-500 -z-10"></span>
            </h2>
            
            <div className='flex flex-col md:flex-row items-start justify-center gap-12 px-8 py-16'>
                <section className='flex-1'>
                    <div>
                        <img className = 'object-contain w-1/2 mx-auto' src={userLogo} alt="User logo" /> 
                        <p className="text-lg">
                        With a life long passion for solving problems and making elegant solutions, I am a Software Engineering Student with a passion for C++, Python, and JavaScript. The ever changing and improving nature of technology always gives me something new to learn and master. When I am not at my computer I like to spend my time reading, leatherworking, and playing piano at the local retirement home. 
                        </p>
                    </div> 
                </section>
                <section id = "skills"  className="flex-1 space-y-4">
                    <SkillsGrid />
                </section>
            </div>
        
        </div>
        <div className="content_item"id='project'>
            <section >
                <h2 class="relative font-bold inline-block mb-6 pb-2 outline-black">
                    Projects
                    <span class="absolute -right-1/10 bottom-1/20 w-full h-1/3 bg-red-500 -z-10"></span>
                </h2>
                <section id = "projects">
                    <ProjectGrid/>  
                </section>
            </section>
        </div>
    </div>
    
    )
}