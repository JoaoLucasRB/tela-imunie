import { Button, IconButton, List, ListItem, SwipeableDrawer, Typography } from '@material-ui/core';
import { useState } from 'react';
import PasseVerde from '../../assets/passeverde-white-horizontal.svg';
import { AddBox, Close, Menu, People, } from '@material-ui/icons'
import { DrawerMenuContainer } from './styles';

export function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="drawer-menu">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={toggleDrawer()}
      >
        <Menu />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={openDrawer}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        <DrawerMenuContainer>
          <List component="ul">
            <ListItem>
              <IconButton
                color="inherit"
                aria-label="close drawer"
                edge="end"
                onClick={toggleDrawer()}
              >
                <Close />
              </IconButton>
            </ListItem>
            <ListItem>
              <Typography variant="h6" component="h6">
                Serviços
              </Typography>
            </ListItem>
            <ListItem>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">NOSSA EMPRESA</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/about">Sobre</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">Mídias</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/contact">Contato</Typography></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">CHECKPOINT</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://www.checkpoint.immunie.net">Autenticação Blockchain</Typography></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">TERMOS DE USO</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/privacy-policy">Política de Privacidade</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/terms-and-conditions">Termos e Condições</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/faqs">FAQs</Typography></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">PRODUTOS</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/people">Pessoas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/health-care">Setor de Saúde</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/labs">Labaratórios de Exames</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/travel">Companhias Aéreas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/schools">Escolas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/managers">Governos e Grandes Eventos</Typography></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Button variant="contained" color="secondary">
                <AddBox />
                <Typography variant="body2" component="a" href="https://secure.immunie.net/">Clínicas</Typography>
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="contained" color="primary">
                <People />
                <Typography variant="body2" component="a" href="https://www.app.immunie.net/">Usuário</Typography>
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="contained" style={{ backgroundColor: 'rgb(20, 147, 66)' }}>
                <img src={PasseVerde} />
              </Button>
            </ListItem>
          </List>
        </DrawerMenuContainer>
      </SwipeableDrawer>
    </div>
  )
}