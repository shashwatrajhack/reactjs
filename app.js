import { getElementById } from "domutils";
import React from "react"
import ReactDOM from "react-dom/client"


const Title=() => <h1 id="heading">Namaste React </h1>;
console.log(Title);

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">this is react component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent/>)