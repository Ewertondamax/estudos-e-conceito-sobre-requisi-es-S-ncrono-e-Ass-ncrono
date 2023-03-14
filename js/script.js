function clicou() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })

    .then((json) => {
      alert(`Titulo do primeiro post:${json[0].title}`);
    })
    .catch(() => {
      alert("Deu erro na requisição! ");
    })
    .finally(() => {
      alert("Opa página não encontrada");
    });
}

function inserir() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Titulo de teste",
      body: "Corpo de teste",
      userId: 2,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

//Async Await

async function clicou() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  alert(`Titulo do primeiro post:${json[0].title}`);
  alert("clicou");
}

async function inserir() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Post",
    headers: { "content-type": "aplication/json" },
    body: JSON.stringify({
      title: "Titulo de teste",
      body: "Corpo de teste",
      userId: 2,
    }),
  });
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", inserir);
