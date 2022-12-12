import React, {Component} from "react";
import ReactDOM from "react-dom";

function Chat(props) {
    return (
        <section className="chat">
            {props.children}
        </section>
    );
}

function ChatHeader() {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

function ChatMessages(props) {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

function ChatMessage(props) {
    return <li>{props.children}</li>
}

function NewChatMessage() {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}

function App(props) {
    return (
        <Chat>
            <ChatHeader/>
            <ChatMessages>
                <ChatMessage>Wpis z czatu 1</ChatMessage>
                <ChatMessage>Wpis z czatu 2</ChatMessage>
                <ChatMessage>Wpis z czatu 3</ChatMessage>
            </ChatMessages>
            <NewChatMessage/>
        </Chat>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
