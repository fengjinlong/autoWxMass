const roomsJson = require("../rooms.json");
const robot = require("robotjs");
const { meta } = require("./meta");
const { delay } = require("./utils");
const view = require("./view");
const { Actions } = require("./const");

function keyTapByAction(action) {
  const { key, modified } = meta[action];
  console.log(robot);
  robot.keyTap(key, modified);
}

(async () => {
  const { groupName, sendData } = await view();

  keyTapByAction(Actions.openWeChat);

  const rooms = roomsJson[groupName];
  for (const roomName of rooms) {
    // console.log(roomName);
    await main(roomName);
  }

  async function main(roomName) {
    // await delay(1000);
    // keyTapByAction(Actions.findInWeChat);

    // await delay(1000);
    // robot.keyTap("enter");

    // await delay(1000);
    // robot.typeString(roomName);

    // 现在进入群了
    // await delay(2000);
    // robot.keyTap("enter");

    // 输入文字
    for (let i = 900; i > 0; i--) {
      await delay(500);
      // console.log(sendData);
      // robot.typeString(sendData);
      robot.typeString(i);

      // 发送消息 
      await delay(20);
      // robot.keyTap("space");
      robot.keyTap("enter");
    }
  }
})();
