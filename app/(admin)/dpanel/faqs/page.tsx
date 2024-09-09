"use client";
import { useState } from "react";
import { db } from "../../../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AddFAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!question || !answer) {
      setError("Both question and answer are required.");
      return;
    }

    setLoading(true);
    try {
      const faqsRef = collection(db, "faqs");
      await addDoc(faqsRef, {
        question,
        answer,
        createdAt: new Date(),
      });
      setQuestion("");
      setAnswer("");
      setError("");
      alert("FAQ added successfully!");
    } catch (err) {
      console.error("Error adding FAQ:", err);
      setError("Error adding FAQ. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-3xl font-bold">Add FAQ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
            Answer
          </label>
          <textarea
            id="answer"
            rows="4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save FAQ"}
        </button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AddFAQ;
