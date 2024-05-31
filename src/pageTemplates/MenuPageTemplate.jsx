import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { ChevronLeft, Menu, Home, Flag, Store, Computer } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const StyledDiv = styled("div")(({ theme }) => ({
  "&.list": { width: 250 },
  "&.drawerHeader": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

const StyledMain = styled("main")(({ theme }) => ({
//  padding: theme.spacing(3),
}));

export default function MenuPageTemplate(props) {
  const classes = { list: "list", drawerHeader: "drawerHeader", main: "main" };
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">Iteris Imóveis</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <StyledDiv className={classes.list}>
          <StyledDiv className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </StyledDiv>
          <Divider />
          <List>
            <ListItem component={NavLink} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem component={NavLink} to="/imoveis">
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="imoveis" />
            </ListItem>

            <ListItem component={NavLink} to="/cadastro">
              <ListItemIcon>
                <Computer />
              </ListItemIcon>
              <ListItemText primary="Cadastrar Imovel" />
            </ListItem>

            <ListItem component={NavLink} to="/sobre">
              <ListItemIcon>
                <Flag />
              </ListItemIcon>
              <ListItemText primary="Sobre" />
            </ListItem>
          </List>
        </StyledDiv>
      </Drawer>
      <StyledMain>
        <div className="ConteudoPrincipalAQUI">{props.children}</div>
      </StyledMain>
    </div>
  );
}
