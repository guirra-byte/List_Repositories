import { useRequest } from './hooks/useRequest';
import { useState, useRef } from 'react';
import styles from './global.module.css';

type RepoResponse = {

  full_name: string;
  description: string;
}

const gitHubUser: string = "guirra-byte";
const gitHubAPI: string = `http://api.github.com/users/${gitHubUser}/repos`;
const gitHubURL: string = `https://github.com/${gitHubUser}`;

function App() {

  const { data } = useRequest<RepoResponse[]>(gitHubAPI);

  return (

    <ul>
      {data?.map(repo => {

        return (

          <li>
            <h3>{repo.full_name.split('/')[1]}</h3>
            <p>{repo.description}</p>
            <a href={gitHubURL + `/${repo.full_name.split('/')[1]}`}>Acessar Repo</a>
          </li>


        )

      })}
    </ul >
  )
}

export default App
