const Finding = require("./_Model");

const addFinding = async (data) => {
  console.log(data,'aaaaaaa');
    const finding={
        name:"crate"
    }
//   const finding = await Finding.create(data, { returning: "*" });
  return finding
};

module.exports=addFinding
