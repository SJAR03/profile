import React from 'react'
import './Skills.css'

// Skills array
const skills = [
  { name: 'React', image: '/react.png', emoji: '⚛️', color: 'blue' },
  { name: 'Java', image: '/java.png', emoji: '✌', color: 'aquamarine' },
  { name: 'Web development', image: '/web.png', emoji: '🌐', color: 'pink' },
  { name: 'Spring', image: '/spring.png', emoji: '🌱', color: 'firebrick' },
  { name: 'Sql', image: '/sql.png', emoji: '📁', color: 'lightsalmon' }
]

const Skills = () => {
  return (
    <div className='skill-list'>
      {skills.map((skill, index) => (
        <SkillsSuite key={index} skill={skill} />
      ))}
    </div>
  )
}

function SkillsSuite ({ skill }) {
  const skillStyle = {
    backgroundColor: skill.color
  }
  return (
    <div className='skill-item' style={skillStyle}>
      <img src={skill.image} alt={skill.name} height='20' width='30' />
      <span>{skill.name}</span>
      <span>{skill.emoji}</span>
    </div>
  )
}

export default Skills
