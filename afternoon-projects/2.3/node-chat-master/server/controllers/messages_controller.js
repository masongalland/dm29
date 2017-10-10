const messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
      const { text, time } = req.body;
      messages.push({id, text, time});
      id++;
      res.status(200).send(messages)
  },
  read: (req, res) => {
      res.status(200).send(messages)
  },
  update: (req, res) => {
      const {text} = req.body;
      const {id} = req.params;
      messages.forEach((e,i) => {
          if(e.id == id){
              e.text = text
          }
      })
      res.status(200).send(messages)

  },
  delete: (req, res) => {
      let deleted = messages.filter((e, i) => e.id !== req.params.id)
      messages = deleted;
      res.status(200).send(messages)
  }
};
