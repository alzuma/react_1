// src/components/AddStudentForm.tsx
import React, { useState } from 'react';
import './AddStudentForm.css'; // Import the styles

interface AddStudentFormProps {
  onAddStudent: (student: any) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const registrationDateTime = new Date().toLocaleString();
    onAddStudent({ name, birthdate, courseNumber, specialty, registrationDateTime });
    setName('');
    setBirthdate('');
    setCourseNumber('');
    setSpecialty('');
  };

  return (
    <div className="add-student-form">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseNumber">Course Number:</label>
          <input
            type="number"
            id="courseNumber"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input
            type="text"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
