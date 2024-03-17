import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import navbarLogo from "../../assets/arbitex-light-logo.svg";
import TurkeyFlag from "../../assets/tr.png";
import UKFlag from "../../assets/en.png";
import Sun from "../../assets/sun.svg";

export default function ButtonAppBar() {
  const [selectedFlag, setSelectedFlag] = useState(TurkeyFlag);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleFlagChange = () => {
    setSelectedFlag(selectedFlag === TurkeyFlag ? UKFlag : TurkeyFlag);
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignUpClick = () => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              <img src={navbarLogo} alt="" />
            </Typography>
            <Button color="inherit" sx={{ ml: 1 }}>
              Piyasalar
            </Button>
            <Button color="inherit" sx={{ ml: 1 }}>
              Al-Sat
            </Button>
            <Button color="inherit" sx={{ ml: 1 }}>
              Araştırmalar
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ marginRight: "1rem" }}
              color="success"
              variant="contained"
              onClick={handleLoginClick}
            >
              Giriş Yap
            </Button>
            <Button
              sx={{ marginRight: "1rem" }}
              variant="outlined"
              color="inherit"
              onClick={handleSignUpClick}
            >
              Kayıt Ol
            </Button>
            <Button color="inherit" onClick={handleFlagChange}>
              <img
                src={selectedFlag}
                alt="Bayrak"
                style={{ width: 24, height: 24, marginRight: "1rem" }}
              />
              <img src={Sun} alt="Bayrak" style={{ width: 15, height: 15 }} />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Giriş Yapıldı</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Hoşgeldiniz Kullanıcı-
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Tamam</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={signUpOpen} onClose={handleSignUpClose}>
        <DialogTitle>Kayıt Sayfası</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Kayıt için istenen bilgiler.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignUpClose}>Tamam</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
