import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(['Ir pra aula', 'assistir Anime'])
  //const lista = ['acasac', ' caasc', ' dsnj']
  
  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const newLista = ([...lista, novaTarefa]);
    setLista(newLista);
    setNovaTarefa('')
  };

  const removeTarefa = (tarefa) => {
    const listraRemove = lista.filter((item) => item !== tarefa);
    setLista(listraRemove)
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((tarefa, index)=>{
            return(
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton>
                  <img src={bin} alt="" width="16px" onClick={() => removeTarefa(tarefa)}/>
                </RemoveButton>
              </Tarefa>
        )
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
