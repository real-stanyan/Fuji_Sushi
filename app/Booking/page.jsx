"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Booking() {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const formattedDate = date ? date.toISOString().split("T")[0] : "";

  const handleSubmit = async () => {
    if (!name || !email || !people || !time) {
      alert("Please fill out the form.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      people,
      time,
      formattedDate,
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
    } finally {
      setLoading(false);
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
          type="email"
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
      <div className="text-white px-[10vw] space-y-2 w-full">
        <h1>When?</h1>
        <Select onValueChange={setTime}>
          <SelectTrigger className="w-full text-black">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            {/* 11:00-15:00 */}
            <SelectItem value="11:00">11:00 AM</SelectItem>
            <SelectItem value="11:30">11:30 AM</SelectItem>
            <SelectItem value="12:00">12:00 PM</SelectItem>
            <SelectItem value="12:30">12:30 PM</SelectItem>
            <SelectItem value="13:00">1:00 PM</SelectItem>
            <SelectItem value="13:30">1:30 PM</SelectItem>
            <SelectItem value="14:00">2:00 PM</SelectItem>
            <SelectItem value="14:30">2:30 PM</SelectItem>
            <SelectItem value="15:00">3:00 PM</SelectItem>
            {/* 17:00-20:30 */}
            <SelectItem value="17:00">5:00 PM</SelectItem>
            <SelectItem value="17:30">5:30 PM</SelectItem>
            <SelectItem value="18:00">6:00 PM</SelectItem>
            <SelectItem value="18:30">6:30 PM</SelectItem>
            <SelectItem value="19:00">7:00 PM</SelectItem>
            <SelectItem value="19:30">7:30 PM</SelectItem>
            <SelectItem value="20:00">8:00 PM</SelectItem>
            <SelectItem value="20:30">8:30 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow text-white w-[70%] mx-auto flex justify-evenly"
      />

      <Button
        variant="outline"
        className="w-[50vw]"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
}
