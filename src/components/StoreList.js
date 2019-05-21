import React, { Component } from 'react'

export class StoreList extends Component {
    render() {
        return (
            <section className="stores">
                {
                    this.props.stores.map(store =>
                        <div className="store" key={store.id}>
                            <h1>{store.name}</h1>
                            <h2>{store.address}</h2>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default StoreList
