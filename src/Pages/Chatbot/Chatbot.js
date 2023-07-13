import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

const Chatbot = () => {
    return (
      <div>
        <MessengerCustomerChat
          pageId="<PAGE_ID>" //772686407892278
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
        ,
      </div>
    );
};

export default Chatbot;