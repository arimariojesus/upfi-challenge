import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgUrlSelected, setImgUrlSelected] = useState('');

  const handleOpenModal = (url: string): void => {
    onOpen();
    setImgUrlSelected(url);
  };

  return (
    <>
      <SimpleGrid minChildWidth="320px" spacing="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={handleOpenModal} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        imgUrl={imgUrlSelected}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
