import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const DivContainer = styled.div`
    height: 75%;
    width: 60%;
    display: flex;

    @media (max-width: 600px) {
        width: 85%;
    }
`

export default function CardProjeto() {

    return (
        <DivContainer>
            <Card sx={{ maxWidth: 800 }}>
                <CardMedia
                    sx={{
                        height: 400,
                        display: 'none',
                        '@media (min-width: 600px)': {
                            display: 'block'
                        }
                    }}
                    image='/leitor.png'
                    title="Imagem da pagina inicial do projeto leitor-jujutsu"
                />
                <CardMedia
                    sx={{
                        height: 400,
                        display: 'none',
                        '@media (max-width: 600px)': {
                            display: 'block'
                        }
                    }}
                    image="/mobile.png"
                    title="Imagem da pagina inicial do projeto leitor-jujutsu"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Projeto: OnlineJJK
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={'1.1rem'}>
                        Este site foi criado por fãs e para fãs! Oferecemos uma experiência de leitura online otimizada tanto para desktop quanto para dispositivos móveis. Registre-se para criar sua conta pessoal, selecione e favorite seus volumes preferidos, e explore muito mais! Nosso objetivo é proporcionar a melhor experiência possível para os entusiastas do gênero.
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                        size="small" color='error'
                        onClick={() => window.open('https://jujutsu-online.vercel.app/', '_blank')}
                    >
                        OnlineJJK
                    </Button>

                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                        size="small" color='error'
                        onClick={() => window.open('https://github.com/RochaDevs/JujutsuOnline', '_blank')}
                    >
                        GITHUB
                    </Button>

                </CardActions>
            </Card>
        </DivContainer>
    );
}