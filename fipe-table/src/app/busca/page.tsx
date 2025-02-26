"use client";

import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchMarcas, fetchModelos, fetchAnos, setMarcaSelecionada, setModeloSelecionado, setAnoSelecionado } from "@/store/fipeslice";
import SelectComponent from "../../components/Select/SelectComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";

export default function Busca() {
    const dispatch: AppDispatch = useDispatch();
    const { marcas, modelos, anos, marcaSelecionada, modeloSelecionado, anoSelecionado } = useSelector((state: RootState) => state.fipe);

    useEffect(() => {
        dispatch(fetchMarcas());
    
        if (marcaSelecionada) dispatch(fetchModelos(marcaSelecionada));
        if (modeloSelecionado) dispatch(fetchAnos({ marcaId: marcaSelecionada, modeloId: modeloSelecionado }));
    }, [dispatch, marcaSelecionada, modeloSelecionado]);

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" textAlign="center">Tabela Fipe</Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
                Consulte o valor de um veículo de forma gratuita
            </Typography>
            <Container maxWidth="sm" sx={{ textAlign: "center", mt: 2, p: 3, backgroundColor: "white", borderRadius: 2, boxShadow: 3 }}>
                <SelectComponent label="Marca" value={marcaSelecionada} onChange={(e) => dispatch(setMarcaSelecionada(e.target.value))} options={marcas} />
                <SelectComponent label="Modelo" value={modeloSelecionado} onChange={(e) => dispatch(setModeloSelecionado(e.target.value))} options={modelos} disabled={!marcaSelecionada} />
                {modeloSelecionado && (
                    <SelectComponent label="Ano" value={anoSelecionado} onChange={(e) => dispatch(setAnoSelecionado(e.target.value))} options={anos} />
                )}
                <Box textAlign="center">
                    <ButtonComponent disabled={!marcaSelecionada || !modeloSelecionado || !anoSelecionado} />
                </Box>
            </Container>
        </Box>
    );
}
