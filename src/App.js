import React from "react";
import MentorCard from "./components/MentorCard";
import MemberList from "./components/MemberList";
import { mentor, members } from "./data";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Mentor Dashboard</h1>
      </header>
      <main className="main">
        <section className="left">
          <MentorCard mentor={mentor} />
        </section>
        <section className="right">
          <MemberList members={members} />
        </section>
      </main>
      <footer className="footer">Mentor Dashboard</footer>
    </div>
  );
}
