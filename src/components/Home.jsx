import { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStatus: [],
      Total: 0,
    };
  }
  render() {
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

    const fetchBill = () => {
      //💲💲💲Reduce method to count the final total of all the object with the price present in current State💲💲💲
      const FinalBill = this.state.cartStatus.reduce(
        (Bill, obj) => (Bill += obj.price),
        0
      );
      //   console.log(FinalBill);
      this.setState({ Total: FinalBill });
    };
    const AddtoCart = (newItem) => {
      //   console.log(newItem);
      this.state.cartStatus.push(newItem);
      this.forceUpdate();
      //💲💲💲 Fetchbill to count the updated Final Total
      fetchBill();
    };
    const removeItems = (index) => {
      //   console.log(index);
      //   🟡 Splice methode just to remove the exact elemet which we want to remove from the cart
      this.state.cartStatus.splice(index, 1);
      this.forceUpdate();
      //💲💲💲 Fetchbill to count the updated Final Total
      fetchBill();
    };
    console.log(this.state);
    return (
      <>
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
                You have <b>{this.state.cartStatus.length}</b> items in cart and
                your total bill is :<b>{this.state.Total} $.</b>
              </h1>
            </center>
          </div>
          {this.state.cartStatus.length >= 1 ? (
            <div className="mt-10">
              <center>
                <h1 className="mb-10 text-2xl font-semibold">Your Cart</h1>
              </center>
              <div>
                {this.state.cartStatus?.map((cartItems, index) => {
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
                        {/* ✅Remove from Cart */}
                        <button onClick={() => removeItems(index)}>
                          ❌Remove Item
                        </button>
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
      </>
    );
  }
}

export default Home;
