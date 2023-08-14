import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.modules.scss"

export const Header = ( {cartList, setRender, setSearch}) => {

   const [value, setValue] = useState("");
   
   const submit = (e) => {
      e.preventDefault()
      setSearch(value)
      setValue("")
   }

   const openModal = (e) => {
      e.preventDefault()
      setRender(true)
   }

   return (
      <div className="header-container">
         <header>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               <form onSubmit={submit}>
                  <span>
                     <button onClick={openModal}>
                        <MdShoppingCart size={21} />
                     </button>
                        {cartList.length}
                  </span>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                  <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </header>
      </div>
   );
};
