import React from 'react';

interface Student {
  name: string;
  birthdate: string;
  courseNumber: number;
  specialty: string;
  registrationDateTime: string;
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => (
  <div>
    <h2>Student List</h2>
    <ul>
      {students.map((student, index) => (
        <li key={index}>
          {student.name} - {student.specialty}
        </li>
      ))}
    </ul>
  </div>
);

export default StudentList;
