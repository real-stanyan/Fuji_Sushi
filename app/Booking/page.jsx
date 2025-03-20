"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TimePicker from "@/components/ui/TimePicker";
import emailjs from "emailjs-com";

export default function Booking() {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState("");

  // 使用 useMemo 生成格式化后的日期字符串 "x月x日"
  const formattedDate = React.useMemo(() => {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }, [date]);

  const handleSubmit = async () => {
    const templateParams = {
      name,
      email,
      people,
      time,
      booking_date: formattedDate,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      );
      alert("Booking email sent!");
    } catch (error) {
      alert("Failed to send booking email.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black w-[100vw] min-h-[100vh] pt-[90px] md:pt-[120px] space-y-4 pb-[40px]">
      <h1 className="text-white font-pwc text-4xl my-4">Make a booking</h1>
      <div className="text-white px-[10vw] space-y-2 w-full">
        <h1>Your Name:</h1>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black"
        />
      </div>
      <div className="text-white px-[10vw] space-y-2 w-full">
        <h1>Your Email:</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
      </div>
      <div className="text-white px-[10vw] space-y-2 w-full">
        <h1>How Many People?</h1>
        <Input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="text-black"
        />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow text-white w-[70%] mx-auto flex justify-evenly"
      />
      <TimePicker onTimeChange={setTime} />
      <Button variant="outline" className="w-[50vw]" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
