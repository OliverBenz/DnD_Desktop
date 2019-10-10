import React from 'react';
// import './navBar.css';

export default class SpellList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            spellList: [{"name": "test"}],
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        this._fetchSpells();
    }
    
    render(){
        if(this.state.isLoading){
            return(
                <p>Loading...</p>
            )
        }
        return(
            <div>
                { this.state.spellList.map(s => this._renderSpells(s)) }
            </div>
        );
    }

    _renderSpells = function(s){
        return(
            <div>
                <div>
                    <p>{ s.name }</p>
                </div>
                <div>
                    <p>Level: { s.level }</p>
                    <p>Range: { s.range }</p>
                </div>
            </div>
        );
    }

    _fetchSpells = () => {
        fetch('http://benz-prints.com:3004/dnd/general/spells/0/20', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((resJ) => {
            this.setState({ spellList: resJ.data, isLoading: false });
        });
    }
}