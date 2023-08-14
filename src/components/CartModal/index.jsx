import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.modules.scss"

export const CartModal = ({ cartList, setCartList, render, setRender }) => {
   
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const deleteAll = () => {
      setCartList([])
   }

   const closeModal = () => {
      setRender(false)
   }
   
   if(!render) {
      return null
   } 

   return (
      <div className="modal-container">
         <div role="dialog" className="modal">
            <div className="modal-header">
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={closeModal}>
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} cartList={cartList} setCartList={setCartList}/>
                  ))}
               </ul>
            </div>
            <div>
               <div className="modal-footer">
                  <p>Total {total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
                  <button onClick={deleteAll}>Remover todos</button>
               </div>
            </div>
         </div>
      </div>
   );
};
