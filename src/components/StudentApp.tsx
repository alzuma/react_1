import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

const StudentApp: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  const handleAddStudent = (student: any) => {
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <>
      <h1>Music School</h1>
      <StudentList students={students} />
      <AddStudentForm onAddStudent={handleAddStudent} />
    </>
  );
};

export default StudentApp;
