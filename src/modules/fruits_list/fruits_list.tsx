import React, {useState } from 'react';
import { style } from 'typestyle';
import { FruitListProps } from './fruits_list.container';
import { Fruit } from './fruits_list.modules';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  
export const FruitsList: React.FunctionComponent<FruitListProps> = props => {
  const [fruitsList, setFruitsList] = useState<Fruit[]>([]);

  React.useEffect(() => {
    console.log("Fetch starting: ", props.isFetchingFruits);

    if(!props.isFetchingFruits) {
      props.getFruitsListFromAPI();
      console.log("Array of fruits: ", props.fruitsList);
      setFruitsList(props.fruitsList);
    }

  }, [])

  return (
    <div>
      <header className={titleStyle}>
        Fruits List
      </header>
      <div>
        <ul>
        {fruitsList.map((item, index) => {
            return (
              <li key={index}>
                  {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card> */}
      </div>
    </div>
  );
}

export default FruitsList;