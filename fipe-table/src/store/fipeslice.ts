import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Veiculo {
  codigo: string;
  nome: string;
}

interface FipeState {
  marcas: Veiculo[];
  modelos: Veiculo[];
  anos: Veiculo[];
  marcaSelecionada: string;
  modeloSelecionado: string;
  anoSelecionado: string;
}

const initialState: FipeState = {
  marcas: [],
  modelos: [],
  anos: [],
  marcaSelecionada: "",
  modeloSelecionado: "",
  anoSelecionado: "",
};

export const fetchMarcas = createAsyncThunk("fipe/fetchMarcas", async () => {
  const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
  return await response.json();
});

export const fetchModelos = createAsyncThunk("fipe/fetchModelos", async (marcaId: string) => {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos`);
  return await response.json();
});

export const fetchAnos = createAsyncThunk("fipe/fetchAnos", async ({ marcaId, modeloId }: { marcaId: string; modeloId: string }) => {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marcaId}/modelos/${modeloId}/anos`);
  return await response.json();
});

const fipeSlice = createSlice({
  name: "fipe",
  initialState,
  reducers: {
    setMarcaSelecionada: (state, action: PayloadAction<string>) => {
      state.marcaSelecionada = action.payload;
      state.modelos = [];
      state.anos = [];
      state.modeloSelecionado = "";
      state.anoSelecionado = "";
    },
    setModeloSelecionado: (state, action: PayloadAction<string>) => {
      state.modeloSelecionado = action.payload;
      state.anos = [];
      state.anoSelecionado = "";
    },
    setAnoSelecionado: (state, action: PayloadAction<string>) => {
      state.anoSelecionado = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarcas.fulfilled, (state, action) => {
        state.marcas = action.payload;
      })
      .addCase(fetchModelos.fulfilled, (state, action) => {
        state.modelos = action.payload.modelos;
      })
      .addCase(fetchAnos.fulfilled, (state, action) => {
        state.anos = action.payload;
      });
  },
});

export const { setMarcaSelecionada, setModeloSelecionado, setAnoSelecionado } = fipeSlice.actions;
export default fipeSlice.reducer;
