import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import slider1 from "../../assets/slider1.jpg";
import { Paper, ButtonBase } from "@mui/material";
import Box from "@mui/material/Box";

export default function SliderComponent() {
  const items = [
    {
      image: slider1,
      title: "Son Bilgiler & Analizler",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: slider1,
      title: "Bitcoin ve Trend Altcoinleri",
      content:
        "Bitcoin ve Trend Altcoinleri.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: slider1,
      title: "Ekran Başından Ayrılamıyor musun ?",
      content:
        "Ekran Başından Ayrılamıyor musun ?  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div
      style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "20px" }}
    >
      <Carousel
        animation="slide"
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 0,
            color: "white",
            width: 30,
            height: 30,
          },
        }}
        navButtonsAlwaysInvisible={false}
        navButtonsWrapperProps={{
          style: {
            bottom: 10,
          },
        }}
        indicators
        timeout={500}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
function Item({ item }) {
  return (
    <Paper elevation={0} style={{ backgroundColor: "#f9f9f9" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonBase style={{ flex: "1", marginRight: "20px" }}>
          <img
            src={item.image}
            alt="Slider Resim"
            style={{ width: "100%", height: "auto" }}
          />
        </ButtonBase>
        <div style={{ flex: "1" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1">{item.content}</Typography>
        </div>
      </Box>
    </Paper>
  );
}
