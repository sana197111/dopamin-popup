import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import poster from "../assets/poster.jpeg"
import "./style.css";

function Poster() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/main");
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen overflow-y-auto font-lab-digital max-h-screen p-4 flex flex-col items-center justify-center bg-black">
            <img
                src={poster}
                alt="Opening animation"
                className="w-96" // 400x400 크기를 Tailwind 클래스로 표현
            />
        </div>
    );
}

export { Poster };
