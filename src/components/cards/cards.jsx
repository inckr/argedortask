import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Blog from '../../assets/blog.jpg'

export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ fontSize: '3rem', marginTop: '4rem', textAlign: 'left', paddingLeft: '2rem' }}>
        Son Bilgiler & Analizler
      </Typography>
      {[...Array(2)].map((_, rowIndex) => (
        <Box key={rowIndex} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '4rem' }}>
          {[...Array(3)].map((_, colIndex) => (
            <Card key={colIndex} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Blog}
                  alt="Random"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Kart Başlık {rowIndex * 3 + colIndex + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Burası kartın açıklama kısmı. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ))}
    </Box>
  );
}