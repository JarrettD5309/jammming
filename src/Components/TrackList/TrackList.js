import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log('this is props: ' + this.props.searchResults);
    // }
    render() {
        return (
            <div className="TrackList">
                {/* <!-- You will add a map method that renders a set of Track components  --> */}
                {/* <Track /> */}
                {this.props.searchResults.map(result=>{
                    return (
                        <Track
                            key={result.id} 
                            result={result} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default TrackList;