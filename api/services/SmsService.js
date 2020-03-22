module.exports = {
  send: async (id) => {
    // Implement SMS Service
    const textNumber = Math.floor(100000 + Math.random() * 900000);
    console.log(textNumber);
    try {
      await Users.update({id:id},{code:textNumber});
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  }
};