/** @jsx React.createElement */
import React, { useEffect, useState } from "https://esm.sh/react@18.2.0";

const MessageCard = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/message");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error("Error fetching message:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          padding: "20px"
        }
      },
      React.createElement(
        "div",
        {
          style: {
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            animation: "spin 1s linear infinite"
          }
        },
        React.createElement(
          "style",
          null,
          "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }"
        )
      )
    );
  }

  if (error) {
    return React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "center",
          padding: "20px"
        }
      },
      React.createElement(
        "p",
        { style: { color: "red" } },
        error
      )
    );
  }

  return React.createElement(
    "div",
    {
      style: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        backgroundColor: "white"
      }
    },
    React.createElement(
      "p",
      {
        style: {
          fontSize: "18px",
          textAlign: "center"
        }
      },
      message || "No message received"
    )
  );
};

export default MessageCard;