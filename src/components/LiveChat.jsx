import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

const CHAT_STEPS = {
  welcome: {
    message: "Hey! ✨ Welcome to Day by Day by Greenlife. I'm here to help you navigate our eight daily formulations. How can I help you today? 💅",
    options: [
      { label: "Help me find my formulation match 🌸", next: "quiz_prompt" },
      { label: "Check NAFDAC registrations & safety 🔬", next: "safety" },
      { label: "Discount codes & current offers 🎟️", next: "discount" },
      { label: "Tell me about Greenlife Pharmaceuticals 🧪", next: "greenlife" }
    ]
  },
  quiz_prompt: {
    message: "What is your main health priority right now? We offer eight reconciled formulations across prenatal, men's, women's, and full-spectrum omega care: 👇",
    options: [
      { label: "Prenatal Essentials (Wellness Pregnancy) 💜", next: "recommend_pregnancy" },
      { label: "Advanced Prenatal + DHA (Pregnancy Plus) 🧡", next: "recommend_plus" },
      { label: "Women's Daily (Prowoman Young & 40+) 🌸", next: "recommend_prowoman" },
      { label: "Men's Daily Stamina (PROMAN & X-PROMAN) ⚡", next: "recommend_proman" },
      { label: "Full-Spectrum 3-5-6-7-9 Omega (OMG) 💚", next: "recommend_omg" },
      { label: "General Daily Foundation (Wellness) 🌿", next: "recommend_wellness" },
      { label: "I want to take the 1-minute quiz! 📝", next: "start_quiz_action" }
    ]
  },
  recommend_pregnancy: {
    message: "Day By Day Wellness Pregnancy provides 24 vital nutrients including 600 mcg Folic Acid, 18 mg Iron, L-Lysine, L-Arginine & Inositol in a single daily softgel. Registered under NAFDAC Reg. No. A7-102912.",
    options: [
      { label: "View Wellness Pregnancy 💜", next: "view_pregnancy_action" },
      { label: "Explore Pregnancy Plus instead 🧡", next: "view_plus_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  recommend_plus: {
    message: "Wellness Pregnancy Plus is a 60-softgel twin-pack (30 + 30). Its second softgel delivers 850 mg of high-potency Omega 3-6-9 with 300 mg DHA and 75 mg EPA for foetal cognitive and eye development.",
    options: [
      { label: "View Pregnancy Plus 🧡", next: "view_plus_action" },
      { label: "Compare with Wellness Pregnancy 💜", next: "view_pregnancy_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  recommend_prowoman: {
    message: "Our Women's Daily line offers two distinct formulations: Prowoman Young (41 actives with Dong Quai, Black Cohosh & Shatavari for women 18–40) and Prowoman 40+ (50 actives for menopause comfort, bone mobility, and skin).",
    options: [
      { label: "View Prowoman Young 🌸", next: "view_young_action" },
      { label: "View Prowoman 40+ 💗", next: "view_40_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  recommend_proman: {
    message: "Our Men's Daily line offers PROMAN (40 actives with CoQ10, Ginseng, Graviola, and Omega 3-5-6-7-9 for stamina and focus) and X-PROMAN (46 actives with 8 reproductive and libido botanicals for vitality).",
    options: [
      { label: "View Day By Day PROMAN ⚡", next: "view_proman_action" },
      { label: "View Day By Day X-PROMAN 💙", next: "view_xproman_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  recommend_omg: {
    message: "Day By Day OMG delivers a full-spectrum Omega 3-5-6-7-9 blend backed by cold-pressed Virgin Coconut, Avocado, Grape Seed & Rice Bran oils. Sourced for weight management (Omega-7), heart & brain health (Omega-3 & 9), and skin anti-aging (Omega-5).",
    options: [
      { label: "View Day By Day OMG 💚", next: "view_omg_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  recommend_wellness: {
    message: "Day By Day Wellness is our foundational daily supplement providing 34 vital nutrients—vitamins, minerals, amino acids, Ginseng, and Omega-3—for everyday stress support and all-day energy. Registered under NAFDAC Reg. No. A7-100492.",
    options: [
      { label: "View Day By Day Wellness 🌿", next: "view_wellness_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  safety: {
    message: "Quality and compliance are foundational at Greenlife. Every product carries a confirmed or pending NAFDAC registration recorded on its pack details. Formulations are manufactured and tested under strict pharmaceutical quality standards.",
    options: [
      { label: "Learn more about our heritage 🧬", next: "about_science_action" },
      { label: "Back to main menu 🏠", next: "welcome" }
    ]
  },
  discount: {
    message: "Use code BESTIE10 at checkout for 10% off verified purchase orders across Nigeria.",
    options: [
      { label: "Shop Wellness Pregnancy 💜", next: "shop_pregnancy_action" },
      { label: "Shop Pregnancy Plus 🧡", next: "shop_plus_action" },
      { label: "Shop Day By Day OMG 💚", next: "shop_omg_action" },
      { label: "Main menu 🏠", next: "welcome" }
    ]
  },
  greenlife: {
    message: "Greenlife Pharmaceuticals Ltd. has over 20 years of clinical and therapeutic heritage in Nigeria. Day by Day is Greenlife's daily nutraceutical brand, translating pharmaceutical formulation rigor into approachable everyday wellness.",
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
    const userMsg = { id: msgIdRef.current++, sender: 'user', text: option.label };
    setMessages(prev => [...prev, userMsg]);

    const nextStepId = option.next;

    // Route actions
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
    if (nextStepId === 'view_young_action') {
      setIsOpen(false);
      onViewProduct('prowoman-young');
      return;
    }
    if (nextStepId === 'view_40_action') {
      setIsOpen(false);
      onViewProduct('prowoman-40-plus');
      return;
    }
    if (nextStepId === 'view_proman_action') {
      setIsOpen(false);
      onViewProduct('proman');
      return;
    }
    if (nextStepId === 'view_xproman_action') {
      setIsOpen(false);
      onViewProduct('x-proman');
      return;
    }
    if (nextStepId === 'view_omg_action') {
      setIsOpen(false);
      onViewProduct('omg');
      return;
    }
    if (nextStepId === 'view_wellness_action') {
      setIsOpen(false);
      onViewProduct('wellness');
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
    }, 600);
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
              <div className="chat-avatar">💊</div>
              <div>
                <h3 className="chat-bot-name">Wellness Assistant</h3>
                <span className="chat-status"><span className="status-dot"></span>Day by Day by Greenlife</span>
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
                {msg.sender === 'bot' && <div className="bot-avatar-small">💊</div>}
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
              <span>Select an inquiry or product:</span>
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
        
        .chat-trigger-btn {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-preg-primary) 0%, var(--color-pregplus-primary) 100%);
          color: var(--color-white);
          box-shadow: 0 10px 25px rgba(110, 44, 145, 0.3);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-bounce);
        }
        
        .chat-trigger-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 14px 28px rgba(110, 44, 145, 0.4);
        }
        
        .unread-dot {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 12px;
          height: 12px;
          background-color: var(--color-accent-green);
          border: 2px solid var(--color-white);
          border-radius: var(--radius-full);
        }
        
        .chat-window {
          position: absolute;
          bottom: 74px;
          right: 0;
          width: 380px;
          height: 540px;
          background-color: var(--color-white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-hover);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }
        
        .chat-header {
          background-color: var(--color-preg-dark);
          color: var(--color-white);
          padding: 16px 20px;
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
          background-color: var(--color-preg-light);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .chat-bot-name {
          font-size: 1rem;
          margin-bottom: 2px;
          color: var(--color-white);
        }
        
        .chat-status {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .status-dot {
          width: 6px;
          height: 6px;
          background-color: var(--color-accent-green);
          border-radius: var(--radius-full);
        }
        
        .btn-close-chat {
          color: var(--color-white);
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .chat-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background-color: var(--color-bg-base);
        }
        
        .message-bubble-wrapper {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }
        
        .message-bubble-wrapper.bot {
          align-self: flex-start;
        }
        
        .message-bubble-wrapper.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .bot-avatar-small {
          width: 26px;
          height: 26px;
          background-color: var(--color-preg-light);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }
        
        .message-bubble {
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
          line-height: 1.45;
        }
        
        .message-bubble-wrapper.bot .message-bubble {
          background-color: var(--color-white);
          color: var(--color-text-dark);
          border-bottom-left-radius: 4px;
          box-shadow: var(--shadow-sm);
        }
        
        .message-bubble-wrapper.user .message-bubble {
          background-color: var(--color-preg-primary);
          color: var(--color-white);
          border-bottom-right-radius: 4px;
        }
        
        .chat-footer {
          background-color: var(--color-white);
          padding: 14px 16px;
          border-top: 1px solid var(--color-border);
        }
        
        .chat-options-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        .sparkle-icon {
          color: var(--color-pregplus-primary);
        }
        
        .chat-quick-replies {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-height: 150px;
          overflow-y: auto;
        }
        
        .quick-reply-btn {
          text-align: left;
          background-color: var(--color-bg-base);
          border: 1px solid var(--color-border);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--color-text-dark);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .quick-reply-btn:hover {
          background-color: var(--color-preg-light);
          border-color: var(--color-preg-primary);
          color: var(--color-preg-primary);
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 40px);
            right: -10px;
            height: 480px;
          }
        }
      `}</style>
    </div>
  );
}
