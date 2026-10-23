
export default function Loja() 
{
    return (
        <main className="container">
            <h1>Lojinha</h1>

            <div className="carousel">
                <div className="carousel-item">
                    <div className="img-container">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LGqwRZAkHQZLxh9VkSuG-yMe9faXJIVLaaQi8tc3bg&s=10"
                            alt="Coca-Cola"
                        />
                    </div>

                    <div className="description-container">
                        <p>TopShit</p>
                        <h3>Coca-Cola 360ml lata vermelha</h3>

                        <div className="price-part">
                            <h2>R$ 49,99</h2>
                            <div className="promotion-blob">
                                <h6>something!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
