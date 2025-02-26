export async function getFipeData(marca: string, modelo: string, ano: string) {
    try {
        const response = await fetch(
            `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`
        );

        if (!response.ok) {
            throw new Error(`Erro ao buscar os dados da FIPE: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}
