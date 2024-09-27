import React, { useEffect, useState } from "react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useUser } from "@clerk/clerk-react";
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel'; 

function Inbox() {
    const { user } = useUser();
    const [userId, setUserId] = useState();
    const [channelUrl, setChannelUrl] = useState();

    useEffect(() => {
        if (user) {
            const id = (user.primaryEmailAddress?.emailAddress).split('@')[0];
            setUserId(id); 
        }
    }, [user]); 

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }}>
        <SendBirdProvider 
          appId={import.meta.env.VITE_SENDBIRD_APP_ID} 
          userId={userId} 
          nickname={user?.fullName}
          profileUrl={user?.imageUrl}
          allowProfileEdit={true}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-5">
            {/* Channel List */}
            <div className="md:col-span-1 p-5 shadow-lg border">
              <GroupChannelList
                onChannelSelect={(channel) => {
                  setChannelUrl(channel?.url);
                }}
                channelListQueryParams={{
                  includeEmpty: true,
                }}
              />
            </div>

            {/* Chat Area */}
            <div className="md:col-span-2 shadow-lg">
              {channelUrl ? (
                <GroupChannel channelUrl={channelUrl} />
              ) : (
                <div>Please select a channel to view messages.</div>
              )}
            </div>
          </div>
        </SendBirdProvider>
      </div>
    </div>
  );
}

export default Inbox;
