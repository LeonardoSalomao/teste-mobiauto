import { Card, CardContent, Typography } from "@mui/material";

interface CardPrecoProps {
    valor: string;
}

export default function CardPreco({ valor }: CardPrecoProps) {
    return (
        <Card
            sx={{
                display: "inline-block",
                px: 3,
                borderRadius: 20,
                pt: 1,
                mt: 3,
                backgroundColor: "#00A38C"
            }}
        >
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    {valor}
                </Typography>
            </CardContent>
        </Card>
    );
}
