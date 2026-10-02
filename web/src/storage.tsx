interface IForm
{
    id:number;
    login:string;
    senha:string;
    nome:string;
    email:string;
}



export default class Store
{
    constructor()
    {
        this.dados();  
    }

    dados():void
    {
        let meusDados:IForm[] =
        [
            {
                id:1,
                login:"ringo",
                senha:"1234",
                nome:"Ringo",
                email:"ringo@gmail.com"
            },
            {
                id:2,
                login:"john",
                senha:"1212",
                nome:"John",
                email:"john@gmail.com"
            },
            {
                id:3,
                login:"paul",
                senha:"2121",
                nome:"Paul",
                email:"paul@gmail.com"
            }
        ];

        localStorage.setItem("banco", JSON.stringify(meusDados));
    }

    cadastro(mf:IForm):void
    {
        let meusDados = localStorage.getItem("banco");

        let ds = JSON.parse(meusDados!) as IForm[];

        
        mf.login = (document.querySelector("#login") as HTMLInputElement).value;
        mf.senha = (document.querySelector("#senha") as HTMLInputElement).value;
        mf.nome = (document.querySelector("#nome") as HTMLInputElement).value;
        mf.email = (document.querySelector("#email") as HTMLInputElement).value;


        
        let cad = 
        {
                id:Date.now(),
                login:mf.login,
                senha:mf.senha,
                nome:mf.nome,
                email:mf.email
        };

        
        /*
        let md:IForm[] = 
        [{
            id:Date.now(),
            login:mf.login,
            senha:mf.senha,
            nome:mf.nome,
            email:mf.email
        }];
        */

        ds.push(cad);

        localStorage.setItem("banco", JSON.stringify(ds));
    }
}