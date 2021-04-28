// PESQUISAR ALUNO
fetch('http://my-json-server.typicode.com/ThalesChamone/JSON-Test/alunos')
  .then(response => response.json())
  .then(alunos => {
      const formulario = document.getElementById("formALUNO");
      const aluno = document.getElementById("aluno");
      const resultado = document.getElementById("resultado");

      formulario.addEventListener('submit',(buscaAluno) => {
          alunos.forEach(element => {
              if (aluno.value == element.nome){
                  resultado.innerHTML = `
                    Nome: ${element.nome}
                    <br>
                    Turno: ${element.turno}
                    <br>
                    Turma: ${element.turma}
                    <br>
                    Idade: ${element.idade}
                    <br>

                  `
              }
          });
         buscaAluno.preventDefault();
      })
  })

 //PESQUISAR PROFESSOR
  fetch('http://my-json-server.typicode.com/ThalesChamone/JSON-Test/professores')
  .then(response => response.json())
  .then(professores => {
      const formulario = document.getElementById("formPROFESSOR");
      const professor = document.getElementById("professor");
      const resultado = document.getElementById("resultadoPROF");

      formulario.addEventListener('submit',(buscaProfessor) => {
          professores.forEach(element => {
              if (professor.value == element.nome){
                  resultado.innerHTML = `
                    Nome: ${element.nome}
                    <br>
                    Turno: ${element.turno}
                    <br>
                    Turma: ${element.turma}
                    <br>
                    Idade: ${element.idade}
                    <br>
                    Registro: ${element.codigo}

                  `
              }
          });
         buscaProfessor.preventDefault();
      })
  })