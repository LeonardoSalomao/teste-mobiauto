import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ButtonComponentProps {
    disabled: boolean;
}

export default function ButtonComponent({ disabled }: ButtonComponentProps) {
    const router = useRouter();
    const { marcaSelecionada, modeloSelecionado, anoSelecionado } = useSelector((state: RootState) => state.fipe);

    const handleClick = () => {
        if (marcaSelecionada && modeloSelecionado && anoSelecionado) {
            router.push(`/resultado?marca=${marcaSelecionada}&modelo=${modeloSelecionado}&ano=${anoSelecionado}`);
        }
    };

    return (
        <Button
            variant="contained"
            disabled={disabled}
            sx={{ width: "150px", height: "40px", textTransform: "none", backgroundColor: "#5D00BF" }}
            onClick={handleClick}
        >
            Consultar preço
        </Button>
    );
}
