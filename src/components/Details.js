import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Details = (props) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.output.id !== undefined) {
      setIsLoading(true);
      axios
        .get(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.output.id}.json`
        )
        .then((resp) => {
          setInfo(resp.data);
          setIsLoading(false);
        });
    }
  }, [props.output.id]);

  return (
    <>
      {isLoading ? (
        <div className="loader">Load...</div>
      ) : (
        <div className="details">
          {info.avatar && (
            <img src={info.avatar} alt={info.name} className="avatar" />
          )}
          {info.name && <h5 className="name">{info.name}</h5>}
          {info.details &&
            Object.keys(info.details).map((key) => (
              <p key={key} className="info">
                {key}: {info.details[key]}
              </p>
            ))}
        </div>
      )}
    </>
  );
};

Details.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default Details;
