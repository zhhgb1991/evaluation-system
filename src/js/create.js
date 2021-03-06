import contract from "truffle-contract";
import DemoContract from "@contracts/demo.json";

const Users = {
  contract: null,

  instance: null,

  init_user: function() {
    let self = this;

    return new Promise(function(resolve, reject) {
      self.contract = contract(DemoContract);
      self.contract.setProvider(window.web3.currentProvider);

      self.contract
        .deployed()
        .then(instance => {
          self.instance = instance;
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  addvaluation: function(
    Frame_number,
    Number_plate,
    Vehicle_type,
    Brand_number,
    car_displacement,
    approval_passengers,
    Engine_number,
    Manufacture_date,
    submit_date,
    valuation_number
  ) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .addvaluation(
          Frame_number, //车架号
          Number_plate, //号码车牌
          Vehicle_type, //车辆类型
          Brand_number, //品牌型号
          car_displacement, //汽车排量（L）
          approval_passengers, //核定载客量
          Engine_number, //发动机号码
          Manufacture_date, //出厂日期
          0, //评估价值(初始化为0)
          submit_date, //时间戳(提交日期)
          valuation_number, //评估单编号
          {
            from: window.web3.eth.accounts[0]
          }
        )
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  addphoto: function(
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    valuation_number
  ) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .addphoto(
          photo1,
          photo2,
          photo3,
          photo4,
          photo5,
          photo6,
          photo7,
          photo8,
          valuation_number, //评估单编号
          {
            from: window.web3.eth.accounts[0],
            value: "100"
          }
        )
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  appealesituation: function(msg) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .appealesituation(msg, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  backordernumber: function() {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .backordernumber({ from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  backvaluation: function() {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .backvaluation({ from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  setstate: function(index, condition) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .setstate(index, condition, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  appealdistribution: function(
    number,
    appeal1,
    appeal2,
    appeal3,
    appeal4,
    appeal5
  ) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .appealdistribution(
          number,
          appeal1,
          appeal2,
          appeal3,
          appeal4,
          appeal5,
          { from: window.web3.eth.accounts[0] }
        )
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  displayaccountforarbitrage: function(send) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .displayaccountforarbitrage(send, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  backofwork: function() {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .backofwork({ from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  displayvalue: function(num) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .displayvalue(num, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  getcreator: function(index) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .getcreator(index, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  getassessor: function(index) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .getassessor(index, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  displayinfo: function(num, index) {
    let self = this;

    return new Promise((resolve, reject) => {
      self.instance
        .displayinfo(num, index, { from: window.web3.eth.accounts[0] })
        .then(tx => {
          resolve(tx);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default Users;
