function dados() 
{
    const ds = 
    [
        {id:1, login:"john", senha:"1234", nome:"John", email:"john@gmail.com"},
        {id:2, login:"ringo", senha:"12345", nome:"Ringo", email:"ringo@gmail.com"},
        {id:3, login:"paul", senha:"1234@", nome:"Paul", email:"paul@gmail.com"}
    ];

    let json = JSON.stringify(ds)

    localStorage.setItem("banco", json)
}

function carrinho() 
{
    const car = 
    [
        {id:0, produto:"", qtd:0, valor:0.0, total:0.0, pg:""}
    ]

    let json = JSON.stringify(car)

    localStorage.setItem("carrinho", json)
}

function adicionar() 
{
    const dados = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let nm = document.querySelector("#nome").value
    let email = document.querySelector("#email").value

    let nusuario = {id:Date.now(), login:lg, senha:sn, nome:nm, email:email}

    dados.push(nusuario)

     let json = JSON.stringify(dados)

    localStorage.setItem("banco", json)
}

function logar() 
{
    const dados = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value

    for (let i = 0; i < dados.length; i++) 
    {    
        if (lg == dados[i].login && sn == dados[i].senha) {

            alert("Você está logado! " + dados[i].nome)

            carrinho()

            let ds = {id:dados[i].id, produto:"", qtd:0, valor:0.0, total:0.0, pg:""}

            let json = JSON.stringify(ds)

            localStorage.setItem("carrinho", json)

            break
        }
    }
}