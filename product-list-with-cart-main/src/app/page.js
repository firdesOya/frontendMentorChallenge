import Image from "next/image";
import CardList from "./components/CardList";
import OrderButton from "./components/OrderButton";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="pt-10 max-w-[1220px] flex justify-between min-w-[320px] mx-auto py-[70px] px-5 ">
        <div className="max-w-[800px]">
          <h2 className="font-semibold text-3xl mb-4">Desserts</h2>
          <CardList />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold  text-red text-xl">Your Cart(0)</h3>
          <Image
            src="/images/illustration-empty-cart.svg"
            alt="cart"
            width={100}
            height={100}
          />
          <div className="hidden">
            <OrderButton title="Confirm Order" />
          </div>
        </div>
      </div>
    </div>
  );
}
