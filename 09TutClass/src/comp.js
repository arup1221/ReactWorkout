import React from 'react';

export default class comp extends React.Component{
    render(){
        return (
            <>
                <h1>Comp</h1>
                <h1>{this.props.name}</h1>

            </>
        )
    }
}