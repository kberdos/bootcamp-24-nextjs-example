import NewStudentForm from "../components/NewStudentForm";
import StudentTable from "../components/StudentTable";

export default function Home() {
  return (
    <div>
      <StudentTable />
      <hr />
      <NewStudentForm />
    </div>
  );
}
