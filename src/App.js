import React, {useState, useEffect } from 'react';
import api from './services/api.js';

import './App.css'

import Header from './components/Header';

/**
  * Componentes
  * Propriedade
  * Estado
 */

function App( ) {
  const [projects, setProjects] = useState([]);

  useEffect( ( ) => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [ ] );

  async function handleAddProject() {
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Ighor Barbosa"
    });

    const project = response.data;

    setProjects([...projects, project ])

  }
  return (
    <>
        <Header title = "Projects" />

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul> 

        <button type="button" onClick ={handleAddProject}>Adicionar Projeto</button>
    </>
    );
 }

 export default App;