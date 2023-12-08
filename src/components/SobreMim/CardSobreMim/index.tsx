
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';

interface ICardSobreMim {
    imagem: string
    nome: string
    cargo: string
}

export function CardSobreMim({ imagem, nome, cargo }: ICardSobreMim) {

    return (

        <Card sx={{ width: '60%' }}>

            <CardMedia
                sx={{ height: '20rem' }}
                image={imagem}
                title={nome}
            />

            <CardContent>

                <Typography gutterBottom variant="h5" component="div" fontFamily={"'Exo 2', sans-serif"}>
                    {nome}
                </Typography>

                <Typography variant="body2" color="text.secondary" fontFamily={"'Exo 2', sans-serif"} fontSize={'1.1rem'}>
                    {cargo}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginTop: '1rem'
                }}>
                    <Typography variant='h6' fontFamily={"'Exo 2', sans-serif"} sx={{ display: 'flex', alignItems: 'center', gap: '.25rem' }}>
                        <AdsClickIcon sx={{ color: '#FF9209' }} />
                        Objetivo
                    </Typography>

                    <Typography variant='subtitle1' fontFamily={"'Exo 2', sans-serif"}>
                        Busco uma oportunidade como estagiário ou Jr. Não desprezo os pequenos começos, os estimo muito.
                    </Typography>
                </Box>

            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" onClick={() => window.open('https://www.linkedin.com/in/matheus-rocha-devs/', '_blank')}>
                    LinkedIn
                </Button>

                <Button
                    size="small"
                    onClick={() => window.open(`https://wa.me/+5511956042056?text=Olá, gostaria de conversar sobre...`, '_blank')}
                >
                    WhatsApp
                </Button>

            </CardActions>

        </Card>

    );
}