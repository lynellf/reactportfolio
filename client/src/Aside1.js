import React from 'react';

const Aside1 = (props) => {
        return (
            <aside className="app-container__aside right">
                <strong className="app-container__aside__title">Team Treehouse Scorecard</strong>
                <ul className="app-container__aside__treehouse">
                    <li>Total Badges: {props.badges}</li>
                    <li>Total Points: {props.totalPoints}</li>
                    <li>JS: {props.jsPoints}</li>
                    <li>CSS: {props.cssPoints}</li>
                    <li>HTML: {props.htmlPoints}</li>
                    <li>Databases: {props.databasePoints}</li>
                </ul>
                <strong className="app-container__aside__title">Most Recent Songs</strong>
                <ul className="app-container__aside__lastfm">
                    {props.recentSongs}
                </ul>
            </aside>
        );
}

export default Aside1;