import './Form.css';
import React from 'react'
export default ({ onSubmit, onChange, value, placeholder, disable }) => {
  const [isValid, setValid] = React.useState(disable);
  if (!disable) {
    async function CheckValidateToken(value) {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${value}&q=&limit=10&lang=`
      ).then((res) => res.json()).then((res) => (setValid((res.message != 'Invalid authentication credentials'))))
    }
    CheckValidateToken(value);
  };
  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <button disabled={!isValid}>→</button>
    </form>
  );
};
