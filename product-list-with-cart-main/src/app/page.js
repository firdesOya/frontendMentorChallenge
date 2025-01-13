import Image from "next/image";
import CardList from "./components/CardList";
import OrderButton from "./components/OrderButton";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="pt-24 max-w-[1220px] flex gap-6 min-w-[320px] mx-auto py-[70px] px-5 lg:px-0">
        <div className="max-w-[800px]">
          <h2 className="font-bold text-4xl mb-6 text-rose-900">Desserts</h2>
          <CardList />
        </div>
        <div className="h-fit flex flex-col bg-white rounded-md p-3">
          <h3 className="font-bold pb-6 text-red text-2xl">Your Cart(0)</h3>
          <div className="flex flex-col items-center ">
            <Image
              src="/images/illustration-empty-cart.svg"
              alt="cart"
              width={100}
              height={100}
            />
            <p className="text-center text-sm py-4">
              Your added items will appear here
            </p>
          </div>
          <div className="hidden">
            <OrderButton title="Confirm Order" />
          </div>
        </div>
      </div>
    </div>
  );
}
