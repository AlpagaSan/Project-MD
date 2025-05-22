import { Container, Text, Button, Grid, GridCol, Title, Paper } from '@mantine/core';

export default function Home() {
  return (
    <Container size="lg" style={{ paddingTop: '50px' }}>
      <Grid>
        <GridCol span={12}>
          <Title order={1} style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            Bonjour, je suis [Ton Nom]
          </Title>
          <Text size="lg" style={{ marginTop: '20px', color: '#777' }}>
            Développeur web et passionné par les technologies modernes.
          </Text>
        </GridCol>
      </Grid>

      {/* Section Projets */}
      <Grid style={{ marginTop: '50px' }}>
        <GridCol span={12}>
          <Paper p="md" style={{ background: '#f9f9f9', borderRadius: '10px' }}>
            <Title order={2}>Mes Projets</Title>
            <Text style={{ color: '#555' }}>Voici quelques-uns de mes projets réalisés.</Text>
            <Button variant="outline" color="blue" style={{ marginTop: '15px' }} component="a" href="https://github.com/[TonUtilisateurGitHub]" target="_blank">
              Voir sur GitHub
            </Button>
          </Paper>
        </GridCol>

        {/* Autres sections comme CV, Contact */}
        <GridCol span={12}>
          <Paper p="md" style={{ background: '#f9f9f9', borderRadius: '10px' }}>
            <Title order={2}>Contact</Title>
            <Text style={{ color: '#555' }}>N'hésitez pas à me contacter pour discuter de projets ou de collaborations.</Text>
            <Button variant="outline" color="blue" style={{ marginTop: '15px' }} component="a" href="mailto:[ton.email@example.com]">
              Contacter
            </Button>
          </Paper>
        </GridCol>
      </Grid>
    </Container>
  );
}
