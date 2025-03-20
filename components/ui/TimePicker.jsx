import React, { useState } from "react";
import "@/app/Material3TimePicker.css";

const HOURS_12 = [...Array(12).keys()].map((i) => (i === 0 ? 12 : i));
const MINUTES = [...Array(60).keys()].filter((m) => m % 5 === 0); // 简化显示每5分钟一个

export default function TimePicker({ initialTime, onTimeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("hour"); // 'hour' 或 'minute'
  const [selectedHour, setSelectedHour] = useState(
    initialTime ? initialTime.getHours() % 12 || 12 : 12
  );
  const [selectedMinute, setSelectedMinute] = useState(
    initialTime ? initialTime.getMinutes() : 0
  );
  const [ampm, setAmpm] = useState(
    initialTime ? (initialTime.getHours() >= 12 ? "PM" : "AM") : "AM"
  );

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
    setStep("minute");
  };

  const handleMinuteSelect = (minute) => {
    setSelectedMinute(minute);
    setIsOpen(false);
    if (onTimeChange) {
      onTimeChange(formattedTimeWith(minute));
    }
  };

  // 新增：接收分钟参数进行格式化
  const formattedTimeWith = (minute) => {
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(selectedHour)}:${pad(minute)} ${ampm}`;
  };

  // 格式化时间为 "xx:xxam/pm" 格式（去掉空格）
  const formattedTime = () => {
    const pad = (n) => n.toString().padStart(2, "0");
    return `${pad(selectedHour)}:${pad(selectedMinute)} ${ampm}`;
  };

  const renderDial = (numbers, onSelect) => {
    const radius = 100;
    const center = radius;
    return (
      <div className="dial">
        {numbers.map((num, index) => {
          const angle = (index / numbers.length) * 2 * Math.PI - Math.PI / 2;
          const x = center + radius * 0.7 * Math.cos(angle);
          const y = center + radius * 0.7 * Math.sin(angle);
          return (
            <button
              key={num}
              className="dial-number"
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={() => onSelect(num)}
              aria-label={`Select ${num}`}
            >
              {num}
            </button>
          );
        })}
        <div className="dial-center" />
      </div>
    );
  };

  return (
    <div className="time-picker-container w-[80vw]">
      <button
        className="time-display w-full"
        onClick={() => {
          setIsOpen(true);
          setStep("hour");
        }}
      >
        {formattedTime()}
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="time-picker-header">
              <div className="selected-time">{formattedTime()}</div>
              <div className="ampm-switch">
                <button
                  className={`ampm-button ${ampm === "AM" ? "active" : ""}`}
                  onClick={() => setAmpm("AM")}
                >
                  AM
                </button>
                <button
                  className={`ampm-button ${ampm === "PM" ? "active" : ""}`}
                  onClick={() => setAmpm("PM")}
                >
                  PM
                </button>
              </div>
            </div>
            <div className="dial-container">
              {step === "hour"
                ? renderDial(HOURS_12, handleHourSelect)
                : renderDial(MINUTES, handleMinuteSelect)}
            </div>
            {step === "minute" && (
              <div className="time-picker-footer">
                <button onClick={() => setStep("hour")} className="back-button">
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
