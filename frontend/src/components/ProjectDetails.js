import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(`/api/projects/${id}`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
      setProject(res.data);
    };

    fetchProject();
  }, [id]);

  const updateProject = async (updatedProject) => {
    const res = await axios.put(`/api/projects/${id}`, updatedProject, { headers: { 'x-auth-token': localStorage.getItem('token') } });
    setProject(res.data);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.name}</h1>
      {/* Add form or inputs to update project details */}
    </div>
  );
};

export default ProjectDetails;
