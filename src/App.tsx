/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Stage } from "./components/Stage";
import { Backdrop } from "./components/Backdrop";
import { List } from "./components/List";
import products from './data/products.json'
import { useGlobalReorder } from "./context";
import { useEffect, useState } from "react";

import { IProduct } from "./interfaces";
import { Button } from './styles';
import { Loading } from "./components/Loading";


const App = () => {
  const productsActivated: Array<IProduct> = [];
  products.data.product.map((product: IProduct | object | null) => product?.active ? productsActivated.push(product) : false );
  productsActivated.splice(20, productsActivated.length - 20);
  
  const context = useGlobalReorder();
  
  const [listOfChildren, setListOfChildren] = useState(productsActivated);
  const [itemSelected, setItemSelected] = useState<IProduct | null>();

  useEffect(() => {
    onPageLoaded();
  }, [])


  const simulateTimeOfRequestResponse = (functionForRequest: React.Dispatch<React.SetStateAction<IProduct | null | undefined>>, paramForRequest: IProduct | null) => {
    handleEventLoading(true)
    setTimeout(() => {
      functionForRequest(paramForRequest)
      functionForRequest(paramForRequest)
      handleEventLoading(false)
      context.setActions({...context.actions, combine: true})
    }, 1000);
  }

  const defaultValueComponents = (): void => {
    setListOfChildren(productsActivated)
    setItemSelected(null)
  }

  const onPageLoaded = () => {
    const eventElement = document.getElementById("button__combine--clear");
    eventElement?.addEventListener("click", defaultValueComponents);
  }

  const stageLocaleOfList = (): void => {
    const wrapperListElement = document.getElementById('list--wrapper');
    wrapperListElement?.scrollTo(0,0);
  }

  const handleOptionClicked = (productParams: IProduct) => {
    const parentOfProductClicked: Array<object> = [];

    if(productParams?.identifier !== itemSelected?.identifier){
      handleEventLoading(true);
      
        productsActivated.map((parent: IProduct): void => {
          if (parent?.parent_identifier == productParams?.parent_identifier) parentOfProductClicked.push(parent);
        })

        if(parentOfProductClicked.length > 1){
          const indexOfParentProduct = parentOfProductClicked.findIndex((parent) => parent == productParams);
          parentOfProductClicked.splice(indexOfParentProduct, 1);
          parentOfProductClicked.unshift(productParams);
        }
        simulateTimeOfRequestResponse(setItemSelected, productParams);
        simulateTimeOfRequestResponse(setListOfChildren, parentOfProductClicked);
    }
    stageLocaleOfList();    
  }
  
  const handleEventLoading = (status: boolean = false) => {
    context.setActions({...context.actions, transition: status})
  }

  return (
    <>
      <Stage
        imageUrl={itemSelected?.thumbnail || listOfChildren[0]?.thumbnail}
        currentPrice={`R$ ${itemSelected?.selling_price || listOfChildren[0]?.selling_price}`}
      />
      <Backdrop>
      <List>
        {context.actions.transition && <Loading data-details="backdrop" />}
        {listOfChildren.length > 0 && listOfChildren?.map((product: object, i: number) => (
            <Button
              key={i}
              aria-selected={itemSelected?.identifier == product?.identifier ? true : false}
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
