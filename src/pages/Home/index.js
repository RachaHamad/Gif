import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import Result from '../../components/Result';
import {
  setUserSearchInput,
  setLanguage,
  setSearchResults,
} from '../../store/app.slice';
import './home.css';

export default () => {
  const [timeoutIndex, setTimeoutIndex] = useState(-1);
  const token = useSelector((state) => state.token);
  const userSearchInput = useSelector((state) => state.userSearchInput);
  const language = useSelector((state) => state.language);
  const searchResults = useSelector((state) => state.searchResults);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${userSearchInput}&limit=10&lang=${language}`
    )
      .then((res) => res.json())
      .then((res) => dispatch(setSearchResults(res)))
      .catch(() => navigate('/not_found'));
  };

  useEffect(() => {
    clearTimeout(timeoutIndex);
    setTimeoutIndex(
      setTimeout(() => {
        getData();
      }, 1000)
    );
  }, [userSearchInput, language]);

  return (
    <div className="HomePage">
      <div className="searchQuery">
        <Form
          onSubmit={getData}
          placeholder="Search"
          disable={true}
          onChange={(text) => dispatch(setUserSearchInput(text))}
          value={userSearchInput}
        />

        <select onChange={(e) => dispatch(setLanguage(e.target.value))}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="results">
        {searchResults.data?.map((gif) => {
          
          return (
            <Result
              key={gif.id}
              id={gif.id}
              username={gif.username}
              title={gif.title}
            />
          );
        })}
      </div>
    </div>
  );
};
