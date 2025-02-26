import { Container, Typography, CircularProgress } from "@mui/material";

export default function LoadingComponent() {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2 }}>
                Carregando informações...
            </Typography>
        </Container>
    );
}
