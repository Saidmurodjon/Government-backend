const LavozimModel = require("./lavozim.model");

// get

async function getLavozim(req, res) {
  try {
    const tashkilot_id = req.headers["tashkilot_id"];
    const Lavozim = await LavozimModel.find({tashkilot_id:tashkilot_id});
    return res.status(200).send(Lavozim);
  } catch (err) {
    res.status(400).send(err);
  }
}

// post

async function addLavozim(req, res) {
  try {
    const Lavozim = await LavozimModel.create(req.body);
    return res.status(200).send(Lavozim);
  } catch (err) {
    res.status(400).send(err);
  }
}

// update / put

async function updateLavozim(req, res) {
  try {
    let LavozimId = req.params.id;
    let result = await LavozimModel.findByIdAndUpdate(LavozimId, req.body);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

// delete

async function deleteLavozim(req, res) {
  try {
    let LavozimId = req.params.id;
    let result = await LavozimModel.findByIdAndRemove(LavozimId);
    return res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  getLavozim,
  addLavozim,
  updateLavozim,
  deleteLavozim,
};
