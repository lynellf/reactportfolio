import React from 'react';

const Aside = (props) => {
    console.log(props.songs);
    const songs = props.songs,
          badges = props.badges,
          totalPoints = props.totalPoints,
          htmlPoints = props.htmlPoints,
          jsPoints = props.jsPoints,
          cssPoints = props.cssPoints,
          databasePoints = props.databasePoints;
    let recentSongs = songs.map(song =>
        <li key={song.date.uts}>{song.name} by {song.artist['#text']}</li>);

    return(
        <aside className="flex-container__aside">
            <strong className="flex-container__aside__title">Team Treehouse Scorecard</strong>
            <ul className="flex-container__aside__treehouse">
                <li>Total Badges: {badges}</li>
                <li>Total Points: {totalPoints}</li>
                <li>JavaScript: {jsPoints}</li>
                <li>CSS: {cssPoints}</li>
                <li>HTML: {htmlPoints}</li>
                <li>Databases: {databasePoints}</li>
            </ul>
            <strong className="flex-container__aside__title">Most Recent Songs</strong>
            <ul className="flex-container__aside__lastfm">
                {recentSongs}
            </ul>
        </aside>
    );
}

export default Aside;