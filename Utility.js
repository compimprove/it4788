const Utility = {
  isSuccessResponse(response) {
    return response.data.code === "1000";
  },
  createContent(content) {
    let emoijMap = require("./config.json").emoijMap;
    for(let key in emoijMap) {
      content = content.split(key).join(emoijMap[key]);
    }
    return content;
  }
};

export default Utility;