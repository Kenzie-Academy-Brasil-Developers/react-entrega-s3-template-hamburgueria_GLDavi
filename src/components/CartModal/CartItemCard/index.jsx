import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, cartList, setCartList}) => {

   const handleDelete = (itemId) => {
      const cartFiltered = cartList.filter((item) => item.id != itemId)
      setCartList(cartFiltered)
   }

   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => handleDelete(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
