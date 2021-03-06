import React from 'react';
import './Track.css';

// const isRemoval = false;

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack=this.addTrack.bind(this);
        this.removeTrack=this.removeTrack.bind(this);
    }
    
    renderAction() {
    // return <button className='Track-action'>{isRemoval ? '-' : '+'}</button>
    return this.props.isRemoval ? <button className='Track-action' onClick={this.removeTrack}>-</button>: <button className='Track-action' onClick={this.addTrack}>+</button>;
    }

    addTrack() {
        this.props.onAdd(this.props.result);
    }

    removeTrack() {
        this.props.onRemove(this.props.result);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    {/* <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                    <h3>{this.props.result.name}</h3>
                    <p>{this.props.result.artist} | {this.props.result.album}</p>
                </div>
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
                {this.renderAction()}
            </div>
        );
    }
}

export default Track;