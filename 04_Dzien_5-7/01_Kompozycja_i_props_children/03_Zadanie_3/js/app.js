import React, {Component} from "react";
import ReactDOM from "react-dom";

const items = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
]

class App extends Component {
    render() {
        return <ShopList items={items}/>
    }
}

class ShopList extends Component {
    render() {
        return (
            <div className="shoplist">
                {this.props.items.map(item => {
                    return (
                        <ShopItemHeader>
                            <h1>{item.title}</h1>
                            <img src={item.image} alt={item.title}/>
                        </ShopItemHeader>
                    )
                })}
            </div>
        )
    }
}

class ShopItemHeader extends Component {
    render() {
        return (
            <header>
                {this.props.children}
            </header>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))
