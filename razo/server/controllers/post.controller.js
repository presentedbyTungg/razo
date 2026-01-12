export const createPost = (req, res) => {
  console.log("🔥 createPost CALLED");
  console.log("BODY:", req.body);

  res.json({
    message:
      "a",
    data: req.body,
  });
};

export const getPosts = (req, res) => {
  res.json({
    message: "Get posts success",
    data: [
      {
        id: 1,
        name: "nguyen van a",
      },
      {
        id: 2,
        name: "nguyen van b",
      },
      {
        id: 3,
        name: "nguyen van c",
      },
      {
        id: 4,
        name: "nguyen van d",
      },
      {
        id: 5,
        name: "nguyen van e",
      },
      {
        id: 6,
        name: "nguyen van f",
      },
    ],
  });
};
