import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get('/api/projects', { headers: { 'x-auth-token': localStorage.getItem('token') } });
      setProjects(res.data);
    };

    fetchProjects();
  }, []);

  const createProject = async () => {
    const res = await axios.post('/api/projects', { name }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
    setProjects([...projects, res.data]);
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Project Name" />
      <button onClick={createProject}>Create Project</button>
      <ul>
        {projects.map(project => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
