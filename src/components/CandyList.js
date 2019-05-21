import React, { Component } from 'react'

export class CandyList extends Component {
    getCandyType(candyobj) {
        var thisType;
        this.props.candyTypes.forEach(type => {
            if (type.id === candyobj.typeId) {
                thisType = type.name
            }
        })
        return thisType
    }
    render() {
        return (
            <section className="candies">
                {
                    this.props.candies.map(candy =>
                        <div className="candy" key={candy.id}>
                            <h1>{candy.id}: {candy.name}</h1>
                            <h3>Type: {this.getCandyType(candy)}</h3>

                        </div>
                    )
                }
            </section>
        )
    }
}

export default CandyList
