export const getUser = (req, res) => {
  res.json({
    messenger: "user informations",
    data: [
      {
        id: 1,
        username: "nguyen van a",
        account: "abc@gmail.com",
        password: "123456aaa",
        userImage: "https://i.pinimg.com/736x/68/6c/3f/686c3f51f78a2611e307da692a14adc2.jpg"
      },
      {
        id: 2,
        username: "nguyen van a",
        account: "ooo@gmail.com",
        password: "123456aaa",
        userImage: 'https://i.pinimg.com/736x/74/4b/3b/744b3b3912d3c4bb4fb6bfbdceb5459e.jpg'
      },
    ],
  });
};
