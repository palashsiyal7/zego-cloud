import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
  const { roomId } = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = Number(import.meta.env.VITE_APP_ID); // Convert string to number
    const serverSecret = import.meta.env.VITE_APP_SERVER_SECRET;
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      //   randomID(5),
      //   randomID(5)
      Date.now().toString(),
      "Palash"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomId,
          },
        ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
}

export default RoomPage;
