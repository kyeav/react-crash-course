import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './components/Nav';
import Users from './pages/Users';
// import Todo from './components/Todo.jsx'
// import Title from './components/Title.jsx'
// import Modal from './components/Modal.jsx'
// import React, { useEffect, useState } from 'react'
/* import Counter from './components/Counter.jsx' */

function App() {
  return (
    <div>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
          <Route path="/users/:id" element={<Users />} />
          {/* /:id */}
        </Routes>
      </Router>
    </div>
  )
}

// function App() {
//   /* return <Counter /> */

//   const [showModal, setShowModal] = useState(false)
//   // const [cat, dog, cow] = [10, 20, 30]

//   function onToDoDelete() {
//     setShowModal(true)
//   }

//   function onModalCancel() {
//     setShowModal(false)
//   }

//   function onModalConfirm() {
//     setShowModal(false)
//   }

//   // useEffect(() => {
//   //   console.log('ONLY on mount')
//   // }, [])

//   // useEffect(() => {
//   //   console.log(`on mount AND on ${showModal} change`)
//   //   // setShowModal(!showModal)  creates infinite loop
//   // }, [showModal])

//   // useEffect(() => {
//   //   console.log('EVERY render')
//   //   // setShowModal(!showModal)  creates infinite loop
//   // })

//   return (
//     <div>
//       {/* <Counter /> */}
//       <Title />
//       <div>
//         <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }}/>
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//       </div>
//       <div className="todo__wrapper">
//         <Todo onToDoDelete={onToDoDelete} 
//               title="Finish Frontend Simplified"
//               paragraph="Code along with Frontend Simplified step by step."/>
//         <Todo onToDoDelete={onToDoDelete} 
//               title="Finish Interview Section"
//               paragraph="Finish every interview question in the next 6 weeks."/>
//         <Todo onToDoDelete={onToDoDelete} 
//               title="Land a $100k Job"
//               paragraph="Apply to 100 jobs."/>
//       </div>
//       {showModal ? <Modal onModalCancel={onModalCancel} 
//                           onModalConfirm={onModalConfirm}
//                           title="Confirm Delete"/>: null}
//       {/* : <></>  */}
//       {/* {isModalOpen && <Modal title="Are you sure you want to add?"/>} */}
//       {/* isModalOpen needs to be boolean so {!!0} */}
//     </div>
//   );
// }

export default App;
