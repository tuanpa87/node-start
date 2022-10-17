exports.getOverview = (req, res) => {
  res.status(200).render('overview', {
    tour: 'The Forest Hiker',
    user: 'Jonas',
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
}
