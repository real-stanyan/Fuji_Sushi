"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

export default function Booking() {
  const [date, setDate] = React.useState(new Date());
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState("");

  const handleSubmit = async () => {
    const templateParams = {
      name,
      email,
      people,
      booking_date: date.toDateString(),
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
      <h1 className="text-white font-pwc text-2xl">Make a booking</h1>
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
        <h1>How Many People? </h1>
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

      <Button variant="outline" className="w-[50vw]" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
