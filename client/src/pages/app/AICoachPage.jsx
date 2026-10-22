import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { mockAICoachPrompts } from '../../data/mockData.js';

export default function AICoachPage() {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Namaste Manish! I'm your Kharcha AI Coach. I understand your ₹3,333/day allowance, monthly bills, and savings targets. What's on your mind today?",
      tag: 'Ready to Help',
    },
    {
      sender: 'user',
      text: mockAICoachPrompts[0].query,
    },
    {
      sender: 'assistant',
      text: mockAICoachPrompts[0].answer,
      tag: mockAICoachPrompts[0].tag,
    },
  ]);

  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setInput('');
    setTyping(true);

    // Find match or provide realistic simulated contextual answer
    const match = mockAICoachPrompts.find(
      (p) => p.query.toLowerCase() === query.toLowerCase()
    );

    setTimeout(() => {
      setTyping(false);
      if (match) {
        setMessages((prev) => [
          ...prev,
          { sender: 'assistant', text: match.answer, tag: match.tag },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'assistant',
            text: `Looking at your current Kharcha numbers: You have ₹1,183 remaining today out of your ₹3,333 daily allowance. Your upcoming bills (₹24k rent in 9 days, ₹1.1k wifi in 3 days) are fully protected in your Bill Vault.

Regarding "${query}": Keep individual purchases under ₹1,100 to stay comfortably within today's green zone!`,
            tag: 'Contextual Advice',
          },
        ]);
      }
    }, 600);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 10rem)',
        maxHeight: '800px',
        gap: '1rem',
      }}
    >
      {/* ── CHAT STREAM CONTAINER ───────────────────────────────────── */}
      <div
        className="glass-card"
        style={{
          flex: 1,
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          gap: '1.25rem',
        }}
      >
        {/* Transparent Model Status Badge */}
        <div
          style={{
            alignSelf: 'center',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--mint)',
            }}
          />
          <span>Offline Financial Rule-Engine (Groq API connects via Express backend)</span>
        </div>
        {messages.map((msg, i) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '0.85rem',
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                maxWidth: '82%',
              }}
            >
              {!isUser && (
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <Bot size={16} />
                </div>
              )}

              <div>
                <div
                  style={{
                    background: isUser
                      ? 'rgba(16, 185, 129, 0.16)'
                      : 'rgba(255, 255, 255, 0.04)',
                    border: isUser
                      ? '1px solid rgba(52, 211, 153, 0.35)'
                      : '1px solid var(--border-subtle)',
                    borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    padding: '0.9rem 1.15rem',
                    color: isUser ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </div>

                {msg.tag && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'var(--mint)',
                      marginTop: '0.35rem',
                      marginLeft: '0.25rem',
                    }}
                  >
                    ● {msg.tag}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {typing && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--mint)', fontSize: '0.82rem' }}>
            <Sparkles size={14} />
            <span>Analyzing your spending pace...</span>
          </div>
        )}
      </div>

      {/* ── QUICK PROMPT CHIPS ───────────────────────────────────────── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {mockAICoachPrompts.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSend(p.query)}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              transition: 'all var(--transition-fast)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--mint)';
              e.currentTarget.style.borderColor = 'var(--border-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            "{p.query}"
          </button>
        ))}
      </div>

      {/* ── CHAT INPUT COMPOSER ──────────────────────────────────────── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        style={{
          display: 'flex',
          gap: '0.75rem',
        }}
      >
        <input
          type="text"
          placeholder="Ask anything about your money, bills, or daily allowance..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1.25rem',
            color: '#ffffff',
            fontSize: '0.92rem',
            outline: 'none',
          }}
        />

        <button
          type="submit"
          className="btn-primary"
          style={{ padding: '0.85rem 1.5rem', borderRadius: 'var(--radius-md)' }}
        >
          <Send size={16} />
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}
