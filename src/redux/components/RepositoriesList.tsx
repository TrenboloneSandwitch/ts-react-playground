import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = (props) => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const state = useSelector((state: any) => state.repositories);
  console.log("state: ", state);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
