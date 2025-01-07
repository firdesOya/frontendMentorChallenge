import CardList from "./components/CardList";

export default function Home() {
  return (
    <div className="bg-rose-50 w-full h-full">
      <div className="pt-10 max-w-[1220px] min-w-[320px] mx-auto py-[70px] px-5 ">
        <div>
          <h2 className="font-semibold text-3xl mb-4">Desserts</h2>
          <CardList />
        </div>
      </div>
    </div>
  );
}
