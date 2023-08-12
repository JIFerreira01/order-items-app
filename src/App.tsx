import { Stage } from "./components/Stage";
import { Backdrop } from "./components/Backdrop";
import { List } from "./components/List";
import products from './data/products.json'
import { useGlobalReorder } from "./context";
import { useEffect, useState } from "react";

import { Button } from './styles';

// "https://lojausereserva.vtexassets.com/arquivos/ids/7956078-1200-auto?v=638248721303730000&width=1200&height=auto&aspect=true"
// "https://lojausereserva.vtexassets.com/arquivos/ids/7956077-1200-auto?v=638248721291830000&width=1200&height=auto&aspect=true"

interface IProduct {
  active:boolean,
  category: object,
  identifier: string,
  list_price: number,
  name: string
  parent_identifier: string,
  selling_price: number,
  status: string,
  thumbnail: string,
  url: string
}

const App = () => {
  const productsActivated: Array<object> = [];
  const { clear } = useGlobalReorder();
  products.data.product.map(product => product.active ? productsActivated.push(product) : false );
  console.log('dados do array', productsActivated);
  
  const [listOfChildren, setListOfChildren] = useState(productsActivated);
  const [itemSelected, setItemSelected] = useState(productsActivated[0]);

  useEffect(() => {
    if(clear){
      setListOfChildren(productsActivated);
    }
  }, [clear])

  const handleOptionClicked = (productParams: IProduct) => {
    console.log('option clicked', productParams);
    const parentOfProductClicked: Array<object> = [];
    productsActivated.map((parent: IProduct) => {
      if(parent.parent_identifier == productParams.parent_identifier) parentOfProductClicked.push(parent);
    })

    console.log(parentOfProductClicked);
    setItemSelected(productParams);
    setListOfChildren(parentOfProductClicked);
  }

  return (
    <>
      <Stage
        imageUrl={itemSelected?.thumbnail}
        currentPrice={`R$ ${itemSelected?.selling_price}`}
      />
      <Backdrop>
      <List>
        {listOfChildren.length > 0 && listOfChildren?.map((product: object, i: number) => (
            <Button 
              key={i}
              onClick={() => handleOptionClicked(product)}>
              <img
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  margin: "0 10px",
                }}
                src={product.thumbnail}
                alt=""
              />
            </Button>
          )
        )}
        </List>
      </Backdrop>
    </>
  );
};

export default App;
