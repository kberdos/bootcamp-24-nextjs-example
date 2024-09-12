// We import components from other files like this
import MyCard from "./components/MyCard";

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <div>
      <p> Hello World!</p>
      <MyCard
        // Example of passing in props (properties) to the card
        title="My React Card"
        text="This is some text that is inside of the card"
        buttonText="Click me!"
      ></MyCard>
    </div>
  );
}
