import React, { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import styled from 'styled-components';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: #399;
  margin-right: 15px;
  font-weight: bold;

  &:hover {
    color: blue;
  }
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f9;
  }
`;

const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
`;


  function TarefaListar() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
    useEffect(() => {
      carregarTarefa();
    }, []);
  
    function carregarTarefa() {
      fetch("http://localhost:5000/tarefas/listar")
        .then((resposta) => resposta.json())
        .then((tarefas: Tarefa[]) => {
          console.table(tarefas);
          setTarefas(tarefas);
        })
        .catch((error) => {
          console.error('Erro ao carregar tarefas:', error);
        });
    }
  
    return (
      <div>
        <h1>Listar Tarefas</h1>
        <StyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>TarefaId</th>
              <th>Titulo</th>
              <th>Descricao</th>
              <th>Criado Em</th>
              <th>CategoriaId</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa, index) => (
              <tr key={tarefa.TarefaId}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{tarefa.TarefaId}</StyledTableCell>
                <StyledTableCell>{tarefa.Titulo}</StyledTableCell>
                <StyledTableCell>{tarefa.Descricao}</StyledTableCell>
                <StyledTableCell>{tarefa.CriadoEm}</StyledTableCell>
                <StyledTableCell>{tarefa.CategoriaId}</StyledTableCell>
                <StyledTableCell>{tarefa.Status}</StyledTableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    );
  }
  
  export default TarefaListar;
  

  