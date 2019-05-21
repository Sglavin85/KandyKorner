import React, { Component } from 'react'

export class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div className="employee" key={employee.id}>
                            {employee.id}: {employee.name}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList
