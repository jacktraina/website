import React from 'react'
import courseData from '../../data/resume/courses'
import classes from './Resume.module.css';

export default function Courses() {
    const harvardLink = 'https://courses.my.harvard.edu/psp/courses/EMPLOYEE/EMPL/h/?tab=HU_CLASS_SEARCH'
    return (
        <div className={classes.coursesContainer} id="courses">
            <div className={classes.sectionTitle}>Selected Courses</div>
            <ul className={classes.coursesContainer}>
                {courseData
                    .sort((a, b) => a.courseNumber > b.courseNumber ? 1 : -1)
                    .map(course => 
                        <li>
                            <a href={course.link ?? harvardLink} target="_blank" className={classes.courseLink}>
                                <span className={classes.num}>{course.courseNumber}</span>: <span id="hi"className={classes.course}>{course.title}</span>
                            </a>
                        </li>)}
            </ul>
        </div>
    )
}