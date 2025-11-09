import React from "react";

// this is the child component

export const Header = () => {
    return <header className="bg-blue-500 text-white p-4 text-xl">Header Section</header>

};

export const Content = () => {
    return <main className="p-4">This is the content area.</main>
}

export const Footer = () => {
    return <footer className="bg-gray-800 text-white p-4 text-center">Footer Section</footer>
}


// now this is the root component

const RootComponent = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />  
        </div>
    )
}

export default RootComponent;