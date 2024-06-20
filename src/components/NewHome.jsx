import { useState } from "react";

function NewHome() {
  const [cartItmes, setCartItems] = useState([]);
  const [Total, setTotal] = useState(0);
  const STORE_ITEMS = [
    {
      id: 0,
      name: "Pizza",
      price: 100,
      logo: "🍕",
    },
    {
      id: 1,
      name: "Burger",
      price: 50,
      logo: "🍔",
    },
    {
      id: 3,
      name: "Corn",
      price: 10,
      logo: "🌽",
    },
  ];
  const AddtoCart = (e) => {
    setCartItems([...cartItmes, e]);
    const FinalTotal = cartItmes.reduce((Bill, obj) => (Bill += obj.price), 0);
    setTotal(FinalTotal + e.price);
  };
  const removeItems = (index) => {
    const updatedCart = cartItmes.filter((item, idx) => idx !== index);
    setCartItems(updatedCart);
    const FinalTotal = updatedCart.reduce(
      (Bill, obj) => (Bill += obj.price),
      0
    );
    setTotal(FinalTotal);
  };

  return (
    <div className="px-24 py-10">
      <center>
        <h1 className="mb-10 text-2xl font-semibold">Shopping App</h1>
      </center>
      <div className="flex gap-16 items-center justify-center">
        {/* ✅View Items in home page */}
        {STORE_ITEMS?.map((data, idx) => {
          return (
            <>
              <div
                id={idx + data.id}
                className="flex flex-col items-center justify-center gap-10 bg-purple-300 p-10 rounded-lg"
              >
                <p className="text-6xl">{data?.logo}</p>
                <h4 className="text-4xl font-semibold">{data?.name}</h4>
                <h4 className="text-3xl font-medium">{data?.price} $</h4>
                {/* ✅Add to cart */}
                <button
                  onClick={() => AddtoCart(data)}
                  className="text-black bg-white px-7 py-3 rounded-lg hover:bg-transparent hover:border-white hover:border-2 hover:text-black "
                >
                  🛒 Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
      {/* ✅display Number of items in cart with Final Total */}
      <div className="mt-5">
        <center>
          <h1 className="mb-10 text-2xl font-semibold">
            You have <b>{cartItmes.length}</b> items in cart and your total bill
            is :<b>{Total} $.</b>
          </h1>
        </center>
      </div>
      {cartItmes.length >= 1 ? (
        <div className="mt-10">
          <center>
            <h1 className="mb-10 text-2xl font-semibold">Your Cart</h1>
          </center>
          <div>
            {cartItmes?.map((cartItems, index) => {
              return (
                <>
                  <div id={index} className="flex justify-between p-6">
                    <div className="flex justify-start gap-5  items-baseline">
                      <p className="text-6xl">{cartItems?.logo}</p>
                      <h4 className="text-4xl font-semibold">
                        {cartItems?.name}
                      </h4>
                      <h4 className="text-3xl font-medium">
                        {cartItems?.price} $
                      </h4>
                    </div>
                    {/* ✅Remove from Cart
                    <button onClick={() => removeItems(index)}>
                      ❌Remove Item
                    </button> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NewHome;
