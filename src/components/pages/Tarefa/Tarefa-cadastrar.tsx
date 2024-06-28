import { useEffect, useState } from "react";
import { Tarefa } from "../../../models/Tarefa";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";

function TarefaCadastrar() {
  const navigate = useNavigate();
  const [tarefaId, setTarefaId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [status, setStatus] = useState("");
  const [criadoEm, setCriadoEm] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    //FETCH ou AXIOS
    fetch("http://localhost:5000/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategorias(categorias);
      });
  }

  function cadastrarTarefa(e: any) {
    const tarefa: Tarefa = {
      TarefaId: tarefaId,
      Titulo: titulo,
      Descricao: descricao,
      Status: status,
      CriadoEm: (0),
      CategoriaId: categoriaId,
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa) => {
        navigate("/pages/tarefas/listar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={TarefaCadastrar}>
        <label>Tarefa ID:</label>
        <input
          type="text"
          placeholder="Digite o Tarefa ID"
          onChange={(e: any) => setTarefaId(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite o descrição:"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Digite o titulo:"
          onChange={(e: any) => setTitulo(e.target.value)}
        />
        <br />
        <label>Status:</label>
        <input
          type="text"
          placeholder="Digite o status:"
          onChange={(e: any) => setStatus(e.target.value)}
        />
        <br />
        <label>Criado Em:</label>
        <input
          type="text"
          placeholder="Digite o valor"
          onChange={(e: any) => setCriadoEm(e.target.value)}
        />
        <br />
        <label>Categorias:</label>
        <select onChange={(e: any) => setCategoriaId(e.target.value)}>
          {categorias.map((categoria) => (
            <option value={categoria.CategoriaId} key={categoria.CategoriaId}>
              {categoria.Nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default TarefaCadastrar;