import * as React from "react";
import Image from "next/image";

export default function Index({Menu}: any) {
    return (
        <>
            <h2>鐵建弁当v2(Single Page Sample)</h2>
            <h2>login User: 鐵建太郎</h2>
            <Tasks tasks={tasks}/>
            <div style={{
                padding: 10,
            }}>
                <h2>カート</h2>
                <Cart tasks={tasks}/>
            </div>
            <div style={{}}>
                <h2>日付ごとに注文</h2>
                <h1>⇪</h1>
                <CalenderOderSample date={new Date().getDate()}/>
                <CalenderOderSample date={new Date().getDate()}/>
                <CalenderOderSample date={new Date().getDate()}/>
                <CalenderOderSample date={new Date().getDate()}/>
                <h1>⇩</h1>
            </div>
            <div style={{
                padding: 10,
                display: "flex",
                justifyContent: "center",
            }}>
                <button style={{
                    width: 200,
                    height: 100
                }}>
                    注文送信
                </button>
            </div>
        </>
    )
}
const tasks = [
    {id: 1, title: "Aランチ", price: 200},
    {id: 2, title: "Bランチ", price: 200},
];
const Tasks = ({tasks}) => {
    const list = tasks.map(task => {
        return (
            <li style={{
                padding: 10,
            }}>
                <div style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 20,
                    margin: 20,
                    borderRadius: 30
                }}>
                    商品名:<br/>
                    <h2>{task.title}</h2>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: 10,
                    fontSize: 30
                }}>
                    {task.price} 円
                </div>
            </li>
        );
    });
    return <ul>{list}</ul>
};
const Cart = ({tasks}) => {
    const list = tasks.map(task => {
        return (
            <li style={{
                padding: 10,
            }}>
                <div style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: 10,
                    borderRadius: 20
                }}>
                    商品名:<br/>
                    <h2>{task.title}</h2>{task.price} 円
                </div>
            </li>
        );
    });
    return <ul>{list}</ul>
};

const CalenderOderSample = ({date}: any) => {
    return (
        <div style={{
            padding: 10,
            backgroundColor: "black",
            color: "white",
            borderRadius: 20,
            margin: 13,
            width: 350,
            height: 35
        }}>
            {date = new Date().getDate()}
            日
        </div>
    )
}