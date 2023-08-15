export interface IProduct {
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

export interface ContextProps {
    children: React.ReactNode;
}

export interface PropsState {
    actions: {
        combine: boolean,
        clear: boolean,
        transition: boolean
    },
    setActions: React.Dispatch<React.SetStateAction<object>>
    combineSelected: object,
    setCombineSelected: React.Dispatch<React.SetStateAction<object>>
}

export interface StageProps {
    imageUrl: string;
    currentPrice: string;
  }