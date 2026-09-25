import React, { useContext, useState } from 'react'
import { CourseProvider } from '../context/CourseContext'
import CourseCard from '../components/CourseCard'

const CourseList = () => {

  let [searchTerm, setSearchTerm] = useState('')

  let { allCourses } = useContext(CourseProvider)

  console.log(searchTerm)

  let filtered = allCourses.filter((course) => {
    return course.cName.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="flex flex-col text-3xl justify-center items-center">

      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 px-5 w-75 h-[80px]"
        placeholder="Search..."
      />

      <div className="flex flex-wrap justify-center gap-6 bg-gray-50 p-8">

        {filtered?.map((course) => {
          return <CourseCard key={course.id} data={course} />
        })}

      </div>

    </div>
  )
}

export default CourseList