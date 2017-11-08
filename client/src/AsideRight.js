import React from 'react';

const AsideRight = (props) => {
        return (
            <aside className="aside--right">
                <div className="container--aside">
                    <strong className="title--light">Team Treehouse Scorecard</strong>
                    <ul className="aside__list">
                        <li className="aside__item">Total Badges: {props.badges}</li>
                        <li className="aside__item">Total Points: {props.totalPoints}</li>
                        <li className="aside__item">JS: {props.jsPoints}</li>
                        <li className="aside__item">CSS: {props.cssPoints}</li>
                        <li className="aside__item">HTML: {props.htmlPoints}</li>
                        <li className="aside__item">Databases: {props.databasePoints}</li>
                    </ul>
                    <strong className="title--light">Most Recent Songs</strong>
                    <ul className="aside__list">
                        {props.recentSongs}
                    </ul>
                </div>
            </aside>
        );
}

export default AsideRight;