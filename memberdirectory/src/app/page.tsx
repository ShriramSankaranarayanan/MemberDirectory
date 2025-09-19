"use client";
import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SearchFilterBar from "../components/SearchFilterBar";
import MemberDirectory from "../components/MemberDirectory";
import Footer from "../components/Footer";
import membersData from "../data/members.json";
import { Member } from "@/utils/member";

export default function HomePage() {
  // State for search, filters, and view
  const [search, setSearch] = useState("");
  const [occupation, setOccupation] = useState("");
  const [farm, setFarm] = useState("");
  const [kulam, setKulam] = useState("");
  const [name, setName] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Extract unique filter options from data
  const occupationOptions = useMemo(
    () =>
      Array.from(
        new Set(membersData.map((m: Member) => m.occupation).filter(Boolean))
      ),
    [membersData]
  );
  const farmOptions = useMemo(
    () =>
      Array.from(
        new Set(membersData.map((m: Member) => m.farm).filter(Boolean))
      ),
    [membersData]
  );
  const kulamOptions = useMemo(
    () =>
      Array.from(
        new Set(membersData.map((m: Member) => m.kulam).filter(Boolean))
      ),
    [membersData]
  );
  const nameOptions = useMemo(
    () =>
      Array.from(
        new Set(membersData.map((m: Member) => m.name).filter(Boolean))
      ),
    [membersData]
  );

  // Filtering logic
  const filteredMembers = useMemo(() => {
    return membersData.filter((m: Member) => {
      const matchesSearch =
        search.trim() === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.occupation.toLowerCase().includes(search.toLowerCase()) ||
        m.farm.toLowerCase().includes(search.toLowerCase()) ||
        m.kulam.toLowerCase().includes(search.toLowerCase());
      const matchesOccupation = !occupation || m.occupation === occupation;
      const matchesFarm = !farm || m.farm === farm;
      const matchesKulam = !kulam || m.kulam === kulam;
      const matchesName = !name || m.name === name;
      return (
        matchesSearch &&
        matchesOccupation &&
        matchesFarm &&
        matchesKulam &&
        matchesName
      );
    });
  }, [search, occupation, farm, kulam, name, membersData]);

  // Smooth scroll handler for Navbar links
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div id="top" />
      <Header />
      <main>
        <SearchFilterBar
          search={search}
          onSearchChange={setSearch}
          occupation={occupation}
          onOccupationChange={setOccupation}
          farm={farm}
          onFarmChange={setFarm}
          kulam={kulam}
          onKulamChange={setKulam}
          location={name}
          onLocationChange={setName}
          occupationOptions={occupationOptions}
          farmOptions={farmOptions}
          kulamOptions={kulamOptions}
          locationOptions={nameOptions}
          view={view}
          onViewChange={setView}
        />
        <MemberDirectory members={filteredMembers} view={view} />
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
            margin: "4rem auto 4rem auto",
            maxWidth: 1200,
          }}
        >
          <section
            id="about"
            style={{
              flex: "1 1 320px",
              minWidth: 280,
              maxWidth: 500,
              textAlign: "center",
              background: "#16232c",
              color: "#f6f7f8",
              borderRadius: "1rem",
              padding: "2rem 1rem",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              About
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#b0b8c1" }}>
              This is a community where we will help one another in our business
            </p>
          </section>
          <section
            id="contact"
            style={{
              flex: "1 1 320px",
              minWidth: 280,
              maxWidth: 500,
              textAlign: "center",
              background: "#16232c",
              color: "#f6f7f8",
              borderRadius: "1rem",
              padding: "2rem 1rem",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Contact
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#b0b8c1" }}>
              Contact Number:{" "}
              <a href="tel:+919876543210" style={{ color: "#13a4ec" }}>
                +91 98765 43210
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:community@example.com"
                style={{ color: "#13a4ec" }}
              >
                community@example.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
