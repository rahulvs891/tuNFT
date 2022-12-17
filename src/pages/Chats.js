import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

const chatClient = new StreamChat("ye9k46855w9q");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicHVycGxlLXdpbmQtMyJ9._6x1AicsL-zR0JiN3DXYPgh_PRpTqk5JlxfHZPQrFwo";

chatClient.connectUser(
  {
    id: "purple-wind-3",
    name: "purple-wind-3",
    image:
      "https://getstream.io/random_png/?id=purple-wind-3&name=purple-wind-3",
  },
  userToken
);

const channel = chatClient.channel("messaging", "custom_channel_id", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Talk about React",
  members: ["purple-wind-3"],
});

const Chats = () => (
  <Chat client={chatClient} theme="str-chat__theme-light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default Chats;
