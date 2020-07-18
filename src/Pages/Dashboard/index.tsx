import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios de GitHub</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53921606?s=460&u=fbbf28ffc963f424acb8007f5595f453adc6c5a2&v=4" alt="Diogo Martins" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53921606?s=460&u=fbbf28ffc963f424acb8007f5595f453adc6c5a2&v=4" alt="Diogo Martins" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars1.githubusercontent.com/u/53921606?s=460&u=fbbf28ffc963f424acb8007f5595f453adc6c5a2&v=4" alt="Diogo Martins" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
