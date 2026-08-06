"use client"
import { useState } from "react";
export default function APIKeys() {
const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isKey2Visible, setIsKey2Visible] = useState(false);
  const [wasKeyCopied, setWasKeyCopied] = useState(false);
  const [wasKey2Copied, setWasKey2Copied] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">API Keys</h2>
      <div className="mb-6 last:mb-0">
        <h3 className="font-semibold mb-3">Production Key</h3>
        <div className="flex gap-3">
          <input
            readOnly
            autoComplete="off"
            type={isKeyVisible ? "text" : "password"}
            value="production-api-key-123456789"
            className="flex-1 border rounded-lg px-4 py-2 bg-gray-100 select-all"
          />
          <button
            className="bg-black text-white px-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => {
              setIsKeyVisible(!isKeyVisible);
            }}
          >
            {isKeyVisible ? "Hide" : "Show"}
          </button>
          <button
            className="bg-black text-white px-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => {
              navigator.clipboard.writeText(
                "production-api-key-123456789",
              );
              setWasKeyCopied(true);
              setTimeout(() => {
                setWasKeyCopied(false);
              }, 1000);
            }}
          >
            {wasKeyCopied ? "✓ Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="mb-6 last:mb-0">
        <h3 className="font-semibold mb-3">Development Key</h3>
        <div className="flex gap-3">
          <input
            readOnly
            autoComplete="off"
            type={isKey2Visible ? "text" : "password"}
            value="development-api-key-987654321"
            className="flex-1 border rounded-lg px-4 py-2 bg-gray-100 select-all"
          />
          <button
            className="bg-black text-white px-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => {
              setIsKey2Visible(!isKey2Visible);
            }}
          >
            {isKey2Visible ? "Hide" : "Show"}
          </button>
          <button
            className="bg-black text-white px-4 rounded-lg hover:bg-gray-800 transition"
            onClick={() => {
              navigator.clipboard.writeText(
                "development-api-key-987654321",
              );
              setWasKey2Copied(true);
              setTimeout(() => {
                setWasKey2Copied(false);
              }, 1000);
            }}
          >
            {wasKey2Copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};