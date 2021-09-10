import { Button, List, ListItem, Popover, Typography } from '@material-ui/core';
import { FormEvent, useState } from 'react';
import { PopoverServicesContainer } from './styles';
import { AddBox, KeyboardArrowDown, KeyboardArrowUp, People, } from '@material-ui/icons'

export function PopoverMenu() {
  const [servicesActive, setServicesActive] = useState<Boolean>(false);
  const [popoverEl, setPopoverEl] = useState<Element | null>(null);

  const handleServicesClick = (event: FormEvent) => {
    if (!servicesActive) {
      setPopoverEl(event.currentTarget);
    } else {
      setPopoverEl(null);
    }
    setServicesActive(!servicesActive);
  }
  return (
    <div className="popover-menu">
      <List component="ul">
        <ListItem>
          <Typography variant="body1" component="p" className="highlight">Passe Verde</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1" component="p" className={servicesActive ? "active" : ""} onClick={handleServicesClick}>
            Serviços
          </Typography>
          {servicesActive ? <KeyboardArrowUp className="active" /> : <KeyboardArrowDown />}

          <Popover
            id='1'
            open={popoverEl ? true : false}
            anchorEl={popoverEl}
            onClose={handleServicesClick}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <PopoverServicesContainer>
              <div>
                <List component="ul">
                  <ListItem><Typography variant="body1" component="p">NOSSA EMPRESA</Typography></ListItem>
                  <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/about">Sobre</Typography></ListItem>
                  <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/media-assets">Mídias</Typography></ListItem>
                  <ListItem><Typography variant="body1" component="a" href="https://immunie.net/company/contact">Contato</Typography></ListItem>
                </List>
                <List component="ul">
                  <ListItem><Typography variant="body1" component="p">CHECKPOINT</Typography></ListItem>
                  <ListItem><Typography variant="body1" component="a" href="https://www.checkpoint.immunie.net">Autenticação Blockchain</Typography></ListItem>
                </List>
              </div>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">TERMOS DE USO</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/privacy-policy">Política de Privacidade</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/terms-and-conditions">Termos e Condições</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/terms-of-use/faqs">FAQs</Typography></ListItem>
              </List>
              <List component="ul">
                <ListItem><Typography variant="body1" component="p">PRODUTOS</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/people">Pessoas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/health-care">Setor de Saúde</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/labs">Labaratórios de Exames</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/travel">Companhias Aéreas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/schools">Escolas</Typography></ListItem>
                <ListItem><Typography variant="body1" component="a" href="https://immunie.net/products/managers">Governos e Grandes Eventos</Typography></ListItem>
              </List>
            </PopoverServicesContainer>
          </Popover>
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
      </List>
    </div>
  )
}