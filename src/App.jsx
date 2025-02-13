import { useState } from 'react'
import Artcile from './components/Article'
import CommentList from './components/CommentList'
import Comments from './components/Comments'
import './App.css'
import Timeline from './components/Timeline'
import Counter from './components/react_state'
import LoginForm from './forms/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Artcile />
    <CommentList /> 
    <Comments text="Props passed" />
    <Timeline /> */}
    {/* <Counter /> */}
    <LoginForm />
    </>
  )
}

export default App
