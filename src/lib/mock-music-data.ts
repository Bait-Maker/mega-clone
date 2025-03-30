export type AudioFile = {
  id: number;
  title: string;
  artist: string;
  type: "audio";
  size: number;
  parent: number;
};

export type Playlist = {
  id: number;
  title: string;
  type: "playlist";
};

// Sample playlist data
export const mockPlaylists: Playlist[] = [
  { id: 1, title: "Liked Songs", type: "playlist" },
  { id: 2, title: "Today's Top Hits", type: "playlist" },
  { id: 3, title: "Discover Weekly", type: "playlist" },
  { id: 4, title: "Chill Vibes", type: "playlist" },
  { id: 5, title: "Rock Classics", type: "playlist" },
  { id: 6, title: "Jazz Essentials", type: "playlist" },
  { id: 7, title: "Hip Hop Mix", type: "playlist" },
  { id: 8, title: "Workout Motivation", type: "playlist" },
];

export const mockAudioFiles: AudioFile[] = [
  {
    id: 1,
    title: "Example Song",
    artist: "Example",
    type: "audio",
    parent: 1,
    size: 300,
  },
];
