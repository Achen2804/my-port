import projects from "./projects.js";
import Projects from "./Project.jsx";

export default function ProjectSection() {
  // Split skills into columns based on your pattern
  projects.forEach(project => console.log(project.Name));
  return (
    <section id="Project_Card" className="w-full flex flex-col md:flex-row justify-center gap-8">
      {projects.map((project,index) =>(
        <Projects key={`${project.Name}-${index}`} {...project} left = {index%2===0}/>
      ))}
    </section>
  );
}