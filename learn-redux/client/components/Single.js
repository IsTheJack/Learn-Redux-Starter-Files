import React from 'react';

const Single = React.createClass({
    render() {
        return (
            <div className="single-photo">
                <pre>
                    {JSON.stringify(this.props.comments ,null, ' ')}
                </pre>
            </div>
        );
    },
});

export default Single;
