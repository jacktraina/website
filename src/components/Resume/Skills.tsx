import React, { useState } from 'react'

import { skillsData, categories, SkillsType, CategoryType } from '../../data/resume/skills'
import classes from './Resume.module.css';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("");
    return (
        <div className={classes.experienceContainer} id="skills">
            <div className={classes.sectionTitle}>Skills</div>
            <div className={classes.skillButtonsContainer}>
                {categories.map(cat => (
                    <SkillButton key={cat.name} label={cat.name} handleClick={() => activeCategory === cat.name ? setActiveCategory("") : setActiveCategory(cat.name)} active={cat.name === activeCategory}/>
                ))}
            </div>
            {skillsData
                .filter(s => !activeCategory || s.category.includes(activeCategory))
                .sort((a, b) => b.competency - a.competency) 
                .map((skill) => <SkillBar key={skill.title} data={skill} categories={categories}/>)
            }
        </div>
    )
}


interface Props {
    data : SkillsType,
    categories : CategoryType[],
}

const SkillBar = ({ data, categories } : Props) => {
  const { category, competency, title } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className={classes.skillbar}>
      <div className={classes.skillbarTitle} style={titleStyle}><span>{title}</span></div>
      <div className={classes.skillbarBar} style={barStyle} />
      <div className={classes.skillBarPercent}>{competency} / 5</div>
    </div>
  );
};

interface ButtonProps { 
    label: string,
    handleClick: () => void,
    active?: boolean,
}

const SkillButton = ({ label, handleClick, active } : ButtonProps) => {
    return (
        <button onClick={handleClick} className={active ? classes.catButtonActive : classes.catButton}>{label}</button>
    )
}