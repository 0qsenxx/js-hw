const userProfile = {
  userName: "Tom",
  userId: "887766",
};

// метод call

function getIdCall(socialNetworks) {
  console.log(`Your id in ${socialNetworks}: ${this.userId}`);
  return `Your id in ${socialNetworks}: ${this.userId}`;
};

getIdCall.call(userProfile, 'Instagram');

// метод apply
function getIdApply(socialNetworks) {
  console.log(`Your id in ${socialNetworks}: ${this.userId}`);
  return `Your id in ${socialNetworks}: ${this.userId}`;
};

getIdApply.apply(userProfile, ['Twitter']);

// метод bind
function getIdBind(socialNetworks) {
  console.log(`Your id in ${socialNetworks}: ${this.userId}`);
  return `Your id in ${socialNetworks}: ${this.userId}`;
};

const getUserId = getIdBind.bind(userProfile, 'TikTok');
getUserId();

// const getUserId = getIdBind.bind(userProfile);
// getUserId('TikTok');