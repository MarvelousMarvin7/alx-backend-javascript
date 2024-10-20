export default function getStudentsByLocation(getListStudents, city) {
  const arrofObj = getListStudents.filter((student) => student.location === city);

  return arrofObj;
}
