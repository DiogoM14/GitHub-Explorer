import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/139426?v=4" alt="Angular" />
          <div>
            <strong>angular/angular</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>

        <Link to="adaw">
          <div>
            <strong>asdasdsa</strong>
            <p>asdasdsad</p>
          </div>

          <FiChevronRight size={20} />
        </Link>

      </Issues>
    </>
  );
};

export default Repository;
