import React from 'react';

// Components
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => 
                    (<Photo 
                        {...post}
                        key={i}
                        i={i}
                        comments={this.props.comments} 
                        increment={this.props.increment}
                    />))
                }
            </div>
        );
    },
});

export default PhotoGrid;
