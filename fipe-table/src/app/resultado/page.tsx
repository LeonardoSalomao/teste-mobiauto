"use client";

import { Container, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import CardPreco from "../../components/CardPreco/CardPrecoComponent";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useEffect, useState } from "react";
import { getFipeData } from "../../api/fipe";

export default function Resultado() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const marca = searchParams.get("marca");
    const modelo = searchParams.get("modelo");
    const ano = searchParams.get("ano");

    const [resultado, setResultado] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!marca || !modelo || !ano) {
            router.push("/");
            return;
        }

        const fetchData = async () => {
            const data = await getFipeData(marca!, modelo!, ano!);
            if (data) {
                setResultado(data);
            }
            setLoading(false);
        };

        fetchData();
    }, [marca, modelo, ano, router]);

    if (loading) return <LoadingComponent />;

    return (
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            {resultado ? (
                <>
                    <Typography variant="h5" fontWeight="bold">
                        Tabela Fipe: Preço {resultado.Marca} {resultado.Modelo} {resultado.AnoModelo}
                    </Typography>

                    <CardPreco valor={resultado.Valor} />

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Este é o preço de compra do veículo.
                    </Typography>
                </>
            ) : (
                <Typography variant="body1" color="error">
                    Erro ao carregar os dados.
                </Typography>
            )}
        </Container>
    );
}
