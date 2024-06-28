import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import TarefaCadastrar from "./components/pages/Tarefa/Tarefa-cadastrar";
import TarefaListar from "./components/pages/Tarefa/Tarefa-listar";

// Componente estilizado para os links de navegação
const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #399;
  margin-right: 15px;
  font-weight: bold;

  &:hover {
    color: blue;
  }
`;


// Componente estilizado para o conteúdo principal
const MainContent = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <StyledNavLink to={"/"}>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/pages/tarefas/listar"}>
                Listar Tarefas
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/pages/tarefas/cadastrar"}>
                Cadastrar tarefas
              </StyledNavLink>
            </li>
            
          </ul>
        </nav>
        <MainContent>
          <Routes>
            <Route path="/" element={<TarefaListar />} />
            <Route path="/pages/tarefas/listar" element={<TarefaListar />} />
            <Route path="/pages/tarefas/cadastrar" element={<TarefaCadastrar />} />
          </Routes>
          <footer>
            <p>Desenvolvido por Tagore Nataniel de Lara</p>
          </footer>
        </MainContent>
      </BrowserRouter>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Projeto base em React com TypeScript</h1>
    </div>
  );
}

export default App;