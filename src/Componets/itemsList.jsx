import Item from "./Item"

const ItemsList = ({productos}) => {
    return (
        <>
            {productos.map(item => <Item key={item.id} item={item} />)}
        </>
    )
}



export default ItemsList; 