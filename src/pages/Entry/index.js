import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './entry.css';

export default () => {
    const { id } = useParams();
    const gif = useSelector(
        (state) => state.searchResults.data?.filter((gif) => gif.id === id)[0]
    );

    return (
        <div className="Entry">
            <div className="tableDetails">
                <h1>{gif?.title} By {gif?.username}</h1>
                <br />
                <a href={`${gif?.url}`} target="_blank">
                    <iframe src={`${gif?.url}`} className="iframe"></iframe>
                </a>
                <br />

                <a href={`https://giphy.com/gifs/${gif?.slug}/tile`} target="_blank" >
                    <button className="blockr">Tile Slug</button>
                </a>

                <a href={`https://giphy.com/gifs/${gif?.slug}/fullscreen`} target="_blank">

                    <button className="blockm">Full Screen Slug</button>
                </a>
                <br />
                <br />
                <a href={`${gif?.url}`} target="_blank">
                    <span>Title: {gif?.title}</span>
                    <br />
                    <span>Type: {gif?.type}</span>
                    <br />
                    <span>link:{gif?.url}</span>
                    <br />
                    <span>slug: {gif?.slug}</span>
                    <br />
                    <span>username: {gif?.username}</span>
                    <br />
                </a>
            </div>
        </div>
    );
};
