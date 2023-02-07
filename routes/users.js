const {Router}=require('express');
const { check } = require('express-validator');
const { validate_fields } =require('../middleware/validate-fields')
const {db_ExistEmail}=require('../helpers/db_validates');



const { usersGET,
       usersPOST,
       usersPUT,
       usersDELETE
}=require('../controllers/users');

const router=Router();

router.get('/',usersGET);

//Agrego las validaciones 

router.post('/',[
       check('email','Este email no es valido').isEmail(),
       check('name', 'El nombre es obligatorio').not().isEmpty(),
       check('password', 'El password es obligatorio').not().isEmpty(),
       check('rol', 'El rol es obligatorio').not().isEmpty(),
       check('email').custom((email)=>db_ExistEmail(email)),
       validate_fields
],usersPOST);

router.put('/',usersPUT);

router.delete('/',usersDELETE);

module.exports=router;





