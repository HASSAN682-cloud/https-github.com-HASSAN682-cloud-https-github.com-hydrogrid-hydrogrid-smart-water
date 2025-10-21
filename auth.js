const token = jwt.sign({ id: tech._id, role: tech.role }, 'secret_key');
