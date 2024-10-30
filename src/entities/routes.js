const { Router } = require('express');
const controller = require('./controller'); 

const router = Router();

router.get("/:id", controller.getProdutoById);
router.post("/", controller.addProduto);
router.get('/', controller.getProdutos);
router.delete("/:id", controller.deleteProduto);
router.put("/:id", controller.updateProduto);

module.exports = router;