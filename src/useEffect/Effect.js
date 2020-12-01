import React, { useState, useEffect } from "react";
import "./Effect.css";

import { Card } from 'antd';

export default function Effect() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [data, /*setData*/] = useState([]);

    //dijalankan 1 kali
    /*
    useEffect(() => {
        fetch("https://www.scorebat.com/video-api/v1/")
        .then((response) => response.json())
        .then ((data) => {
            console.log(data);
            setData(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    */

    //dijalankan terus setiap ada perubahan count
    useEffect(() => {
        if (count > 0 || count2> 0) {
            alert(`skor prediksi baru anda adalah ${count} - ${count2}`);
        }
    });

    //dijalankan terus menerus
    useEffect(() => {
        console.log('spam console kuy');
    });

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount(count - 1);
    };

    const countUp2 = () => {
        setCount2(count2 + 1);
    };

    const countDown2 = () => {
        setCount2(count2 - 1);
    };

    return (
        <Card style={{ background: "#9eedff", borderRadius: '25px', minWidth: '20vw' }}>
        <div className="Main">
            <p className="Text">Prediksi Skor</p>
            <ul>
                {data.slice(0, 10).map((value) => (
                    <li key={value.title}>{value.title}</li>
                ))}
            </ul>

            <p className="Text">{count} - {count2}</p>
            <div className="ViewButton">
                <div className="ViewButton1">
                    <button className="Button1" onClick={countUp}>
                        +
                    </button>
                </div>
                <div className="ViewButton2">
                    <button className="Button1" onClick={countDown}>
                        -
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button2" onClick={countUp2}>
                        +
                    </button>
                </div>
                <div className="ViewButton2">
                    <button className="Button2" onClick={countDown2}>
                        -
                    </button>
                </div>
            </div>
        </div>
        </Card>
    );
}