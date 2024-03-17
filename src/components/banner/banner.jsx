import Typography from "@mui/material/Typography";
import bg from "../../assets/bg.jpg";

export default function Banner() {
  return (
    <div
      style={{
        color: "white",
        backgroundImage: `url(${bg})`,
        backgroundColor: "#f0f0f0",
        padding: "67px",
        maxWidth: "100vw",
        height:"10rem"
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          marginBottom: "10px",
          textAlign: "left",
        }}
      >
        Arbitex Araştırma
      </Typography>
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginRight: "20rem" }}
      >
        Kripto para ekosistemindeki tüm gelişmeleri, raporları, analizleri ve
        önemli etkinlikleri tek bir noktadan takip edin.
      </Typography>
    </div>
  );
}
