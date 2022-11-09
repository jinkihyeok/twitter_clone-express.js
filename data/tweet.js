let tweets = [
  {
    id: "1",
    text: "진따중 화이팅!",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "",
  },
  {
    id: "2",
    text: "안뇽!",
    createdAt: Date.now().toString(),
    name: "JIN",
    username: "JIN",
    url: "",
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export function getAllById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    createdAt: new Date(),
    text,
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
