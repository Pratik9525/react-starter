import "./Messages.css";

const Messages = () => {
  const conversations = [
    { id: 1, name: "John Smith", lastMessage: "Thanks for the update!", time: "2m ago", unread: 2, avatar: "👤" },
    { id: 2, name: "Sarah Johnson", lastMessage: "Can we schedule a meeting?", time: "1h ago", unread: 0, avatar: "👩" },
    { id: 3, name: "Mike Wilson", lastMessage: "The project is looking great!", time: "3h ago", unread: 1, avatar: "👨" },
    { id: 4, name: "Emily Davis", lastMessage: "I'll send the files tomorrow", time: "5h ago", unread: 0, avatar: "👩‍💼" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Messages</h1>
        <p className="page-subtitle">Stay connected with your team</p>
      </div>

      <div className="messages-layout">
        <div className="conversations-list">
          <div className="conversations-header">
            <h3>Conversations</h3>
            <button className="new-conversation-btn">+ New</button>
          </div>
          
          <div className="conversations">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`conversation-item ${conversation.unread > 0 ? "unread" : ""}`}
              >
                <div className="conversation-avatar">{conversation.avatar}</div>
                <div className="conversation-content">
                  <div className="conversation-header">
                    <span className="conversation-name">{conversation.name}</span>
                    <span className="conversation-time">{conversation.time}</span>
                  </div>
                  <div className="conversation-footer">
                    <span className="conversation-message">{conversation.lastMessage}</span>
                    {conversation.unread > 0 && (
                      <span className="unread-badge">{conversation.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="message-view">
          <div className="message-view-header">
            <div className="message-view-user">
              <div className="message-avatar">👤</div>
              <div>
                <h3>John Smith</h3>
                <p className="user-status">Active now</p>
              </div>
            </div>
          </div>

          <div className="messages-container">
            <div className="message-bubble received">
              <p>Hey! How's the project going?</p>
              <span className="message-time">10:30 AM</span>
            </div>
            <div className="message-bubble sent">
              <p>It's going well! We're making great progress.</p>
              <span className="message-time">10:32 AM</span>
            </div>
            <div className="message-bubble received">
              <p>That's great to hear! Thanks for the update!</p>
              <span className="message-time">10:35 AM</span>
            </div>
          </div>

          <div className="message-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              className="message-input"
            />
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
