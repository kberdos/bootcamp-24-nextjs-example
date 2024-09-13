'use client'
import { useState } from "react"
import classes from "./new-student-form-styles.module.css";
<new></new>
function NewStudentForm() {
    async function onSubmit(){
        const newStudentBody = {
            firstName,
            lastName,
            classYear,
            concentrations,
        }
        const res = await fetch ("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newStudentBody)
        })
        {/*
             CHALLENGE: Can you get the table to reload whenever you call onSubmit? 
             This may involve restructuring your project and using props!
        */}
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [classYear, setClassYear] = useState("")
    const [concentrations, setConcentrations] = useState([])

    return (
        <div>
            <h3>Add New Student</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                    name="firstName"
                    value={firstName}
                    onChange = {(event) => setFirstName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">Last Name: </label>
                    <input 
                    value={lastName}
                    onChange = {(event) => setLastName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="firstName">Class Year: </label>
                    <input 
                    value={classYear}
                    onChange = {(event) => setClassYear(event.target.value)}
                    />
                </div>
            </div>
            <h4>Concentrations</h4>
            {
                concentrations.map((concentration, i) => 
                    <div key={i}>
                    <input 
                    value={concentration}
                    placeholder="History"
                    onChange={(event) => setConcentrations(concentrations.map((c, j) => {
                        // TERNARY STATEMENT: return two different things based on a conditional
                        return i === j ? event.target.value : c 
                    })
                )}
                    />
                    <br/><br/>
                    </div>
                )
            }
            <button onClick = {() => setConcentrations(Array(...concentrations, ""))}>
                Add New Concentration
            </button>
        </div>
    )
}
export default NewStudentForm