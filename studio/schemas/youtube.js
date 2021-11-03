import React from "react";
import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";

export default {
  name: "youtube",
  type: "object",
  title: "Video de YouTube",
  fields: [
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: ({ value }) => {
      const id = getYouTubeID(value.url);
      return <YouTube videoId={id} />;
    },
  },
};
