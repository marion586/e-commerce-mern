//create token and saving that in cookies

const sendToken = (user, statusCode, res) => {
  console.log("mbola mandeha");
  const token = user.getJwtToken();
  console.log("token");
  //options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = {
  sendToken,
};
