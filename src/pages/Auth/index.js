import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUserInputToken } from '../../store/app.slice';
import Form from '../../components/Form';
import './auth.css';
import { useNavigate } from 'react-router-dom';

export default () => {
  const userInputToken = useSelector((state) => state.userInputToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="AuthPage">
      <img src="https://media.giphy.com/avatars/giphystudios/k1cAbJE24JLN/200h.png" />
      <Form
        onSubmit={() => {
          dispatch(setToken(userInputToken));
          navigate('/home');
        }}
        onChange={(text) => {
          dispatch(setUserInputToken(text));
        }}
        value={userInputToken}
        placeholder="Enter Access Token"
        disable={false}
      />
    </div>
  );
};
