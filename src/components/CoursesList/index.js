import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CoursesList() {
  const qty = 2

  const courses = useSelector(state => state.data.slice(0, qty), [qty])
  const dispatch = useDispatch()

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', payload: { text: 'New' } })
  }

  return (
    <>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>{course}</li>
        ))}
      </ul>
      <button onClick={addCourse}>ADD</button>
    </>
  )
}
