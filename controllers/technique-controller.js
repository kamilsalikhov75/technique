import { TechniqueModel } from '../models/technique.js';

export async function createTechnique(req, res) {
  try {
    const doc = new TechniqueModel({
      name: req.body.name,
      code: req.body.code,
      count: req.body.count,
    });

    const technique = await doc.save();

    if (technique) {
      res.status(200).json({
        message: 'Информация о технике добавлена',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать',
    });
  }
}

export async function getTechniques(req, res) {
  try {
    const techniques = await TechniqueModel.find();
    res.status(200).json(techniques);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить список техники',
    });
  }
}

export async function getTechnique(req, res) {
  try {
    const { id } = req.params;
    const technique = await TechniqueModel.findById(id);
    res.status(200).json(technique);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось получить информацию о технике',
    });
  }
}

export async function deleteTechnique(req, res) {
  try {
    const { id } = req.params;
    const technique = await TechniqueModel.findByIdAndDelete(id);

    if (technique) {
      res.status(200).json({
        message: 'Информация о технике удалена',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось удалить информацию о технике',
    });
  }
}

export async function updateTechnique(req, res) {
  try {
    const { id } = req.params;

    await TechniqueModel.findByIdAndUpdate(id, {
      name: req.body.name,
      code: req.body.code,
      count: req.body.count,
    });

    res.status(200).json({
      message: 'Информация о технике обновлена',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось обновить информацию о технике',
    });
  }
}
