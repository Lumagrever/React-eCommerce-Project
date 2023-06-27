import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Por favor inicia sesión para pagar");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://res.cloudinary.com/dvvzlx2na/image/upload/v1687567333/World%20of%20Warcraft%20-%20Items/Imagenes-variadas/Cart-WOW_tkttpo.webp"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Carrito de compras</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                ${totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Free shipping on orders over $5000, otherwise flat rate of 8$
                per order.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            {" "}
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          {productData.length > 0 && (
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Continuar
            </button>
          )}
          {payNow && productData.length > 0 && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NMbHaBsWxh2JeIEnp5HEy2V6ktpkQVWmdjGjCWr77wmoosYyx1efJZe3pwrZuMvuZWxWcW8tC9jmgytdKX6J2IC00fgMXD0qw"
                name="WOW Shop"
                amount={totalAmt * 100}
                label="Ir a Pagar"
                description={`El monto a pagar es $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;