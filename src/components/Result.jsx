import { forwardRef } from "react";

const Result = forwardRef(function Result({ targetTime, remainingTime, onReset }, ref) {
    const userLost = remainingTime <= 0
    console.log(userLost)
    const result = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
    return (
        <dialog ref={ref} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {userLost && <h2>Your {result}</h2>}
            <p>The target time is {targetTime} seconds.</p>
            <p>You stopped the timer with {(remainingTime / 1000).toFixed(2)} seconds left.</p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
})
export default Result;