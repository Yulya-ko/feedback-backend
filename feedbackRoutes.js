const { Router } = require('express');
const { getAllFeedbacks, saveFeedback, updateFeedback, deleteFeedback } = require('./FeedbackController');
const router = Router();

router.get('/', getAllFeedbacks);           // читання всіх
router.post('/', saveFeedback);            // створення нового
router.put('/:id', updateFeedback);        // оновлення за id
router.delete('/:id', deleteFeedback);     // видалення за id

module.exports = router;
