// 1.assignment variable
const fname = "Mark Zuckaberg"

// 2.Function Component
function Greting(){
    return (
        <div>
            <h1>Hello ReactJS!</h1>
        </div>
    )
}

function Frontend(){
    return(
        <div>
            <h2>Client side rendering</h2>
            <ol>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Augular</li>
            </ol>
        </div>
    )
}

function MyApp(){
    return(
        <div>
            <h1 className="text">Welcome to ReactJS!</h1>
            <hr />
            <h1 className="text2">Hello, World! {fname}</h1>
            <hr />
            <Greting />
            <hr />
            <Frontend />
        </div>
    )
}


// const domContainer = document.querySelector('root');
// const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);