import React, { useState, useEffect } from "react";
import axios from "axios";

const path =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

const List = ({ setOutput }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(path).then((resp) => {
      setUsersList(resp.data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (id, name) => {
    setOutput({ id, name });
    setSelectedId(id);
  };

  return (
    <>
      <div className="users">
        {isLoading ? (
          <div className="loader">Load...</div>
        ) : (
          usersList.map((item) => (
            <li
              key={item.id}
              className={item.id === selectedId ? "item active_item" : "item"}
              onClick={() => handleClick(item.id, item.name)}
            >
              {item.name}
            </li>
          ))
        )}
      </div>
    </>
  );
};

export default List;
