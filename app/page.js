import MyCard from "./components/MyCard";

export default function Home() {
  return (
    <div>
      <p> Hello World!</p>
      <MyCard
        heading="Heading"
        paragraph="this is some text that is inside of the card"
        buttonText="Lebron"
      ></MyCard>
    </div>
  );
}
