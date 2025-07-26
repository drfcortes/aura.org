import React from 'react';

export default function JsonActions({ jsonData }) {
    const handleCopy = () => {
        const jsonString = JSON.stringify(jsonData, null, 2);
        navigator.clipboard.writeText(jsonString).then(() => {
            alert("JSON copied to clipboard!");
        }).catch(err => {
            console.error("Copy failed", err);
        });
    };

    const handleDownload = () => {
        const jsonString = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "aura_block.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="mt-6 flex gap-4">
            <button
                onClick={handleCopy}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                📋 Copy JSON
            </button>

            <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
                ⬇️ Download JSON
            </button>
        </div>
    );
}
