import React from 'react';
import './Track.css';

const isRemoval = true;

class Track extends React.Component {
    
    renderAction() {
    return <button className='Track-action'>{isRemoval ? '-' : '+'}</button>
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