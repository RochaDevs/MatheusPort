
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

        <Card sx={{
            width: '60%',
            '@media (max-width: 600px)': {
                width: '85%'
            }
        }}>

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
                    Estou em busca de uma oportunidade como estagiário ou profissional júnior. Valorizo muito os pequenos começos e não os subestimo.
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

                <Button
                    size="small"
                    onClick={() => window.open(`https://drive.google.com/file/d/1L7nzwGRq4mZgC9xBzYJZxYi7Bf7y-pTY/view?usp=drive_link`, '_blank')}
                >
                    Currículo
                </Button>

            </CardActions>

        </Card>

    );
}