import React from 'react';
import {
  Route,
  NavLink
} from 'react-router-dom';


// components
import CSS from './courses/CSS'
import HTML from './courses/HTML'
import JavaScript from './courses/JavaScript'

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    <Route path='/courses/html' component={HTML}></Route>
    <Route path='/courses/css' component={CSS}></Route>
    <Route path='/courses/javascript' component={JavaScript}></Route>

  </div>
);

export default Courses;