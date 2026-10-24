export interface Produto {
    id: number;
    nome: string;
    marca: string;
    preco: number;
    imagem: string;
    promocao?: string;
}

export const produtos: Produto[] = [
    {
        id: 1,
        nome: "Coca-Cola 350ml",
        marca: "TopShit",
        preco: 49.99,
        imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80",
        promocao: "Destaque"
    },
    {
        id: 2,
        nome: "Câmera fotográfica",
        marca: "FotoMax",
        preco: 1299.90,
        imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nome: "Tênis esportivo",
        marca: "RunFast",
        preco: 249.90,
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        promocao: "Oferta"
    },
    {
        id: 4,
        nome: "Fones de ouvido",
        marca: "SoundPro",
        preco: 189.90,
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        nome: "Relógio de pulso",
        marca: "Chronos",
        preco: 399.90,
        imagem: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        nome: "Mochila urbana",
        marca: "CarryOn",
        preco: 159.90,
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        nome: "Caneca de cerâmica",
        marca: "Casa & Cia",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        nome: "Planta decorativa",
        marca: "Verde Vivo",
        preco: 45.00,
        imagem: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        nome: "Teclado mecânico",
        marca: "KeyTech",
        preco: 279.90,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        promocao: "Novo"
    },
    {
        id: 10,
        nome: "Óculos de sol",
        marca: "Solaris",
        preco: 119.90,
        imagem: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    }
];