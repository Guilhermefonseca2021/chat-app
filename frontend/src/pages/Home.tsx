import { Sidebar } from "@/components/sidebar";
import { Route, Routes } from "react-router-dom";

export default function home() {
  return (
    <>
        <Sidebar />
        <Routes>
            <Route path="/" element={<div />} />
            <Route path="/dashboard" element={<div />} />
        </Routes>
      </>
  )
}
