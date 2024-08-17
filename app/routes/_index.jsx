
import Book from "./book";

export const meta = () => {
  return [
    { title: "E-Book App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
    <div>
     <Book  />
    </div>
  );
}
