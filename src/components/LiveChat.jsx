import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

const CHAT_STEPS = {
  welcome: {
    message: "Hey bestie! ✨ Welcome to Day by Day. I'm your Wellness Bestie. How can I help you glow up today? 💅",
    options: [
      { label: "Help me choose a supplement! 🤰", next: "quiz_prompt" },
      { label: "Is it NAFDAC certified? 🔬", next: "safety" },
      { label: "Gimme a discount code! 🎟️", next: "discount" },
      { label: "What's the tea on Greenlife? ☕", next: "greenlife" }
    ]
  },
  quiz_prompt: {
    message: "Ooh, standard prenatal care, premium brain support plus DHA, or a daily vitality & skin glow blend? What's your vibe? 👇",
    options: [
      { label: "Just prenatal essentials (Pregnancy) 💜", next: "recommend_pregnancy" },
      { label: "Prenatal + Omega-3 twin-pack (Pregnancy Plus) 🧡", next: "recommend_plus" },
      { label: "Skin glow, weight & energy (OMG) 💚", next: "recommend_omg" },
      { label: "I want to take the 1-minute quiz! 📝", next: "start_quiz_action" }
    ]
  },
  recommend_pregnancy: {
    message: "Period! 💅 Wellness Pregnancy has Folic Acid, L-Lysine & active Probiotics and literally covers all baby development basics. Click below to view details!",
    options: [
      { label: "View Wellness Pregnancy 💜", next: "view_pregnancy_action" },
      { label: "Ask something else 💬", next: "welcome" }
    ]
  },
  recommend_plus: {
    message: "A absolute serve! 🧡 Pregnancy Plus comes with an extra daily softgel of Omega 3-6-9 fish oil. Total brain, eye, and birth weight booster for baby. Highly recommend!",
    options: [
      { label: "View Pregnancy Plus 🧡", next: "view_plus_action" },
      { label: "Ask something else 💬", next: "welcome" }
    ]
  },
  recommend_omg: {
    message: "Period! 💚 OMG is formulated with cold-pressed coconut, avocado, grape seed, and rice bran oils + Omegas 3-5-6-7-9 and vitamins. Sourced for skin glow, energy, and weight management. Click below to view details!",
    options: [
      { label: "View OMG 💚", next: "view_omg_action" },
      { label: "Ask something else 💬", next: "welcome" }
    ]
  },
  safety: {
    message: "For real! 🔬 Safety is not a joke. All Day by Day supplements are clinical grade, purity-tested by Greenlife, and fully NAFDAC certified. No artificial fillers, just pure goodness.",
    options: [
      { label: "Learn more about the science 🧬", next: "about_science_action" },
      { label: "Back to main menu 🏠", next: "welcome" }
    ]
  },
  discount: {
    message: "Say less! 🎟️ Use code **BESTIE10** at checkout for a clean 10% off your first order. We love a budget-friendly wellness queen. 👑",
    options: [
      { label: "Shop Pregnancy 💜", next: "shop_pregnancy_action" },
      { label: "Shop Pregnancy Plus 🧡", next: "shop_plus_action" },
      { label: "Shop OMG 💚", next: "shop_omg_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  greenlife: {
    message: "So Greenlife Pharmaceuticals is basically the clinical giant behind us. Over 20 years of pharma heritage in Nigeria, so you know our formulation science is 100% legit. 🧪",
    options: [
      { label: "Read Our Story 📖", next: "about_science_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  }
};

export default function LiveChat({ onOpenQuiz, onViewProduct, onShopProduct, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: CHAT_STEPS.welcome.message }
  ]);
  const [currentStepId, setCurrentStepId] = useState('welcome');
  const [unread, setUnread] = useState(true);
  const chatEndRef = useRef(null);
  const msgIdRef = useRef(2);

  useEffect(() => {
    // Pulse chat badge after 5 seconds to get attention
    const timer = setTimeout(() => {
      if (!isOpen) {
        setUnread(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const handleOptionClick = (option) => {
    // Add user message
    const userMsg = { id: msgIdRef.current++, sender: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);

    const nextStepId = option.next;

    // Check for special action triggers
    if (nextStepId === 'start_quiz_action') {
      setIsOpen(false);
      onOpenQuiz();
      return;
    }
    if (nextStepId === 'view_pregnancy_action') {
      setIsOpen(false);
      onViewProduct('pregnancy');
      return;
    }
    if (nextStepId === 'view_plus_action') {
      setIsOpen(false);
      onViewProduct('pregnancy-plus');
      return;
    }
    if (nextStepId === 'view_omg_action') {
      setIsOpen(false);
      onViewProduct('omg');
      return;
    }
    if (nextStepId === 'about_science_action') {
      setIsOpen(false);
      setCurrentPage('about');
      return;
    }
    if (nextStepId === 'shop_pregnancy_action') {
      setIsOpen(false);
      onShopProduct('pregnancy');
      return;
    }
    if (nextStepId === 'shop_plus_action') {
      setIsOpen(false);
      onShopProduct('pregnancy-plus');
      return;
    }
    if (nextStepId === 'shop_omg_action') {
      setIsOpen(false);
      onShopProduct('omg');
      return;
    }

    // Process next bot message
    setTimeout(() => {
      const nextStep = CHAT_STEPS[nextStepId];
      if (nextStep) {
        setCurrentStepId(nextStepId);
        setMessages(prev => [...prev, {
          id: msgIdRef.current++,
          sender: 'bot',
          text: nextStep.message
        }]);
      }
    }, 700);
  };

  const activeStep = CHAT_STEPS[currentStepId] || CHAT_STEPS.welcome;

  return (
    <div className="chat-widget-container">
      {/* Floating Chat Trigger Button */}
      <button 
        className={`chat-trigger-btn ${isOpen ? 'active' : ''} ${unread && !isOpen ? 'pulse-unread' : ''}`}
        onClick={handleToggle}
        aria-label="Live Chat"
      >
        {isOpen ? (
          <X size={24} className="icon-rotate" />
        ) : (
          <div className="icon-group">
            <MessageCircle size={26} />
            {unread && <span className="unread-dot"></span>}
          </div>
        )}
      </button>

      {/* Chat Window Box */}
      {isOpen && (
        <div className="chat-window animate-chat-open">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">💅</div>
              <div>
                <h3 className="chat-bot-name">Wellness Bestie</h3>
                <span className="chat-status"><span className="status-dot"></span>Online & Bubbly</span>
              </div>
            </div>
            <button className="btn-close-chat" onClick={handleToggle}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble-wrapper ${msg.sender}`}>
                {msg.sender === 'bot' && <div className="bot-avatar-small">💅</div>}
                <div className="message-bubble">
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>

          {/* Dynamic Interactive Options List */}
          <div className="chat-footer">
            <div className="chat-options-title">
              <Sparkles size={12} className="sparkle-icon" />
              <span>Select response bestie:</span>
            </div>
            <div className="chat-quick-replies">
              {activeStep.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="quick-reply-btn"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .chat-widget-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1500;
          font-family: var(--font-primary);
        }
        
        /* Trigger button styling */
        .chat-trigger-btn {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          color: var(--color-white);
          box-shadow: 0 10px 25px rgba(110, 44, 145, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-bounce);
          border: 2px solid var(--color-white);
          position: relative;
        }
        
        .chat-trigger-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 30px rgba(110, 44, 145, 0.4);
        }
        
        .chat-trigger-btn:active {
          transform: scale(0.95);
        }
        
        .icon-rotate {
          animation: spinIn 0.3s ease;
        }
        
        @keyframes spinIn {
          from { transform: rotate(-90deg); opacity: 0; }
          to { transform: rotate(0); opacity: 1; }
        }
        
        .unread-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 14px;
          height: 14px;
          background-color: var(--color-accent-yellow);
          border-radius: var(--radius-full);
          border: 2.5px solid var(--color-white);
        }
        
        .pulse-unread {
          animation: pulseShadow 2s infinite;
        }
        
        @keyframes pulseShadow {
          0% { box-shadow: 0 0 0 0 rgba(110, 44, 145, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(110, 44, 145, 0); }
          100% { box-shadow: 0 0 0 0 rgba(110, 44, 145, 0); }
        }
        
        /* Chat Window styling */
        .chat-window {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 360px;
          height: 520px;
          background-color: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .animate-chat-open {
          animation: popOpen 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-origin: bottom right;
        }
        
        @keyframes popOpen {
          from { transform: scale(0.3); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        /* Chat Header */
        .chat-header {
          background: linear-gradient(135deg, var(--color-preg-light) 0%, var(--color-pregplus-light) 100%);
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .chat-avatar {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background-color: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          box-shadow: var(--shadow-sm);
        }
        
        .chat-bot-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--color-preg-primary);
        }
        
        .chat-status {
          font-size: 0.72rem;
          color: var(--color-accent-green);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .status-dot {
          width: 6px;
          height: 6px;
          background-color: var(--color-accent-green);
          border-radius: var(--radius-full);
          display: inline-block;
          animation: blink 1.5s infinite;
        }
        
        @keyframes blink {
          50% { opacity: 0.4; }
        }
        
        .btn-close-chat {
          color: var(--color-text-muted);
        }
        
        .btn-close-chat:hover {
          color: var(--color-text-dark);
        }
        
        /* Chat Body */
        .chat-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          background-color: #fcfcfc;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .message-bubble-wrapper {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          max-width: 85%;
        }
        
        .message-bubble-wrapper.bot {
          align-self: flex-start;
        }
        
        .message-bubble-wrapper.user {
          align-self: flex-end;
          max-width: 75%;
        }
        
        .bot-avatar-small {
          width: 24px;
          height: 24px;
          border-radius: var(--radius-full);
          background-color: var(--color-preg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }
        
        .message-bubble {
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          line-height: 1.4;
        }
        
        .bot .message-bubble {
          background-color: var(--color-white);
          color: var(--color-text-dark);
          border: 1px solid var(--color-border);
          border-bottom-left-radius: 4px;
        }
        
        .user .message-bubble {
          background: linear-gradient(135deg, var(--color-preg-primary) 0%, var(--color-preg-dark) 100%);
          color: var(--color-white);
          border-bottom-right-radius: 4px;
        }
        
        /* Chat Footer & Options */
        .chat-footer {
          padding: 16px;
          border-top: 1px solid var(--color-border);
          background-color: var(--color-white);
        }
        
        .chat-options-title {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        
        .sparkle-icon {
          color: var(--color-accent-yellow);
        }
        
        .chat-quick-replies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-height: 140px;
          overflow-y: auto;
        }
        
        .quick-reply-btn {
          font-family: var(--font-primary);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-preg-primary);
          background-color: var(--color-preg-light);
          border: 1px solid var(--color-preg-secondary);
          border-radius: var(--radius-full);
          padding: 8px 14px;
          text-align: left;
          transition: var(--transition-smooth);
        }
        
        .quick-reply-btn:hover {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          border-color: var(--color-preg-primary);
          transform: translateY(-2px);
        }
        
        /* Responsive design */
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 40px);
            height: calc(100vh - 140px);
            bottom: 80px;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
}
