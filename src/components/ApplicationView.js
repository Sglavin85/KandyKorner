import React, { Component } from 'react'
import { Route } from "react-router-dom"
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"

export class ApplicationView extends Component {
    storeArray = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    employeesArray = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    candyTypesArray = [
        { id: 1, name: "Hard Candy" },
        { id: 2, name: "Gummy" },
        { id: 3, name: "Chocolate" },
        { id: 4, name: "Gum" }
    ]

    candiesArray = [
        { id: 1, name: "Twix", typeId: 3 },
        { id: 2, name: "Sour Patch Kids", typeId: 2 },
        { id: 3, name: "DoubleMint", typeId: 4 },
        { id: 4, name: "Blowpops", typeId: 1 },
        { id: 5, name: "Swedish Fish", typeId: 2 },
        { id: 6, name: "Crunch", typeId: 3 },
        { id: 7, name: "Jolly Ranchers", typeId: 1 },
        { id: 8, name: "Another Gum", typeId: 4 },
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeesArray,
        candyTypes: this.candyTypesArray,
        candies: this.candiesArray
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/Stores" render={() => {
                    return <StoreList
                        stores={this.state.stores}
                    />
                }} />

                <Route path="/Employees" render={() => {
                    return <EmployeeList
                        employees={this.state.employees}
                    />

                }} />

                <Route path="/Candies" render={() => {
                    return <CandyList
                        candyTypes={this.state.candyTypes}
                        candies={this.state.candies}
                    />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationView
