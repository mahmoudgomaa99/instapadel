export const images: TImages = {
  auth: {
    otp: {
      lock: require('./lock.png'),
      lock_animation:require('./lock.json'),
    },
  },
  home: {
    background: require('./base.png'),
    createTournment: {
      step1: require('./step1.png'),
      step2: require('./step2.jpg'),
      step3: require('./step3.png'),
      multiRound: require('./multiRound.png'),
      legue: require('./Legue.png'),
    },
  },
};

type TImages = {
  auth: TAuth;
  home: {
    background: any;
    createTournment: {
      step1: any;
      step2: any;
      step3: any;
      multiRound: any;
      legue: any;
    };
  };
};
type TAuth = {
  otp: TOtp;
};
type TOtp = {
  lock: any;
  lock_animation: any;
};
