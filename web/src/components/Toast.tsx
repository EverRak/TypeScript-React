import { useEffect } from "react";
import "../styles/toast.css";

interface ToastProps 
{
    mensagem: string;
    visivel: boolean;
    aoFechar: () => void;
}

export default function Toast({
    mensagem,
    visivel,
    aoFechar
}: ToastProps) 
{
    useEffect(() => 
        {
        if (!visivel) return;

        const timer = setTimeout(aoFechar, 2500);
        return () => clearTimeout(timer);
    }, [visivel, mensagem, aoFechar]);

    return (
        <div
            className={`toast ${visivel ? "toast-visivel" : ""}`}
            role="status"
            aria-live="polite"
        >
            <div className="toast-icon">✓</div>

            <div className="toast-text">
                <strong>Adicionado ao carrinho</strong>
                <span>{mensagem}</span>
            </div>
        </div>
    );
}