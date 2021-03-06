const titleValidation = (req, res, next) => {
  const { title } = req.body;
  console.log(req.body);
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const contentValidation = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const categoriesValidation = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  if (categoryIds.length < 1) return res.status(400).json({ message: '"categoryIds" is required' });

  next();
};

module.exports = {
  titleValidation,
  contentValidation,
  categoriesValidation,
};