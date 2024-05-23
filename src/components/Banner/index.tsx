import React from 'react';
import { Container,Card } from './styles'; 

interface BannerItem {
  text: string;
  img: string;
}

interface BannerProps {
  items: BannerItem[];
}

const Banner: React.FC<BannerProps> = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Card key={index} className="banner-item">
          <img src={item.img} alt={item.text} />
          <p>{item.text}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Banner;