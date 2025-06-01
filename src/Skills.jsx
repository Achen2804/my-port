import skills from "./skills.js";
import Skill from "./skill.jsx";


function splitIntoColumns(list, cols = 3) {
  const out = Array.from({ length: cols }, () => []);
  list.forEach((item, i) => out[i % cols].push(item));
  return out;
}

export default function SkillsGrid() {
  // Split skills into columns based on your pattern
  const columns = splitIntoColumns(skills, 3);

  return (
    <section id="skills_card" className="w-full flex flex-col md:flex-row justify-center gap-8">
      {columns.map((col, idx) => (
        <div key={idx} className="flex flex-col gap-6 flex-1 min-w-0">
          {col.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      ))}
    </section>
  );
}