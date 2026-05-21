/* Add to your existing CSS */
.sidebar {
    width: 280px;
    background: rgba(30, 30, 40, 0.95);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.sidebar-header {
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.new-chat-btn {
    width: 100%;
    padding: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.history-list {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
}

.history-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.history-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.history-item.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.delete-history-btn {
    background: rgba(255, 71, 87, 0.2);
    color: #ff4757;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 11px;
    margin-top: 8px;
}
