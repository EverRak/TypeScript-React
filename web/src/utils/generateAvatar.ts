export function generateAvatar(id: string | number, size: number = 128): string 
{
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");

    if (!ctx) 
    {
        throw new Error("Não foi possível criar o contexto do Canvas.");
    }

    let seed = 0;

    for (const char of String(id)) 
    {
        seed = (seed * 31 + char.charCodeAt(0)) >>> 0;
    }

    function random(): number 
    {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        return seed / 4294967296;
    }

    const colors = ["#C6F273", "#E5E7EB", "#536B35", "#737373", "#292927"];

    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, size, size);

    const cells = 5;
    const cellSize = size / cells;
    ctx.fillStyle = colors[Math.floor(random() * colors.length)]!;

    for (let y = 0; y < cells; y++) 
    {
        for (let x = 0; x < Math.ceil(cells / 2); x++) 
        {
            if (random() > 0.5) continue;

            const mirroredX = cells - 1 - x;

            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);

            if (mirroredX !== x) 
            {
                ctx.fillRect(mirroredX * cellSize, y * cellSize, cellSize, cellSize);
            }
        }
    }

    return canvas.toDataURL("image/png");
}
