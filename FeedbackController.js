const FeedbackModel = require('./FeedbackModel');

// CREATE
exports.saveFeedback = async (req, res) => {
  try {
    const feedback = await FeedbackModel.create(req.body);
    console.log('Feedback added!');
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// READ
exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// UPDATE
exports.updateFeedback = async (req, res) => {
  try {
    const updated = await FeedbackModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // додаємо runValidators
    );

    if (!updated) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// DELETE
exports.deleteFeedback = async (req, res) => {
  try {
    await FeedbackModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

    // const { _id } = req.body;
    // FeedbackModel.findByIdAndDelete(_id)
    // .then(() => res.send('Deleted a feedback'))
}
