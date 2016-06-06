import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends Component {
    render() {
        const {
            code,
            caption,
            display_src,
            likes,
            comments
        } = this.props;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${code}`} >
                        <img src={display_src} alt={caption} className="grid-photo"/>
                    </Link>

                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={likes} className="likes-heart">{likes}</span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.increment.bind(null, this.props.i)} className="likes">&hearts; {likes}</button>

                        <Link className="button" to={`/view/${code}`} >
                            <span className="comment-count">
                                <span className="speech-bubble"></span> {' '}
                                {comments[code] ? comments[code].length: 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
}
