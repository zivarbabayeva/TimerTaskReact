import { useEffect, useRef, useState } from "react";
import Result from "./Result";

export default function TimerComponent({ title, targetTime }) {
    const dialog = useRef();
    const timer = useRef();
    const [timeRemaining, setTimeRemmaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    useEffect(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer.current);
            dialog.current.showModal()
        }
    }, [timeRemaining]);


    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemmaining(prev => prev - 10)
        }, 10);
    }

    function handleStop() {
        dialog.current.showModal()
        clearInterval(timer.current);
    }

    function resetTimer() {
        setTimeRemmaining(targetTime * 1000);
    }
    return (
        <>
            <Result
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={resetTimer}
            ></Result>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challange
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer is inactive"}
                </p>
            </section>
        </>
    );
}